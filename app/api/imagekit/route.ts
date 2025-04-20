import config from "@/lib/config";
import ImageKit from "imagekit";
import { NextResponse } from "next/server";

// destructure
const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint });

// get function for authenticator
export async function GET() {
  return NextResponse.json(imagekit.getAuthenticationParameters());
}
