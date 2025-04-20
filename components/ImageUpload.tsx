import React, { useRef, useState } from "react";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import config from "@/lib/config";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

//authenticate

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();

    const { signature, expire, token } = data;

    return { token, expire, signature };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

interface Props {
  type: "image" | "video";

  onFileChange: (filePath: string) => void;
}

const ImageUpload = ({
  type,

  onFileChange,
}: Props) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string | null }>(null);

  const onError = (error: any) => {
    console.log(error);

    toast.message(`${type} upload failed`, {
      description: `Your ${type} could not be uploaded. Please try again.`,
    });
  };
  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);

    toast.message(`${type} uploaded successfully`, {
      description: `${res.filePath} uploaded successfully!`,
    });
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        className="hidden"
        fileName="test-upload.png"
      />
      <button
        className={cn("upload-btn")}
        onClick={(e) => {
          e.preventDefault();

          if (ikUploadRef.current) {
            // @ts-ignore
            ikUploadRef.current?.click();
          }
        }}
      >
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
        />

        <p className={cn("text-base text-light-100")}>upload a file</p>

        {file && <p className={cn("upload-filename")}>{file.filePath}</p>}
      </button>

      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={300}
        />
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;

// Reference
// https://imagekit.io/docs/integration/nextjs
