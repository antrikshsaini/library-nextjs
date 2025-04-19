import { Client as WorkflowClient } from "@upstash/workflow";
import config from "@/lib/config";
import { Client as QStashClient, resend } from "@upstash/qstash";
import { string } from "zod";

export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});

const qstashClient = new QStashClient({
  token: config.env.upstash.qstashToken,
});

export const sendEmail = async ({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) => {
  await qstashClient.publishJSON({
    api: {
      name: "email",
      provider: resend({ token: config.env.resendToken }),
    },
    body: {
      from: "Library Management <hello.antrikshsaini.com>",
      to: [email],
      subject,
      html: message,
    },
  });
};
