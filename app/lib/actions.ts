"use server";

import { loginSchema } from "./validations";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

export const authenticate = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: loginSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  redirect(`/form?value=${JSON.stringify(submission.value)}`);
};
