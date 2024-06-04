"use client";

import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { FormButton } from "./FormButton";
import {
  useForm,
  getFormProps,
  getInputProps,
  // getFieldsetProps,
} from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { loginSchema } from "@/app/lib/validations";

export const ConformForm = () => {
  const [lastResult, formAction] = useFormState(authenticate, undefined);
  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema });
    },

    // Validate the form on blur event triggered
    shouldValidate: "onBlur",
  });

  return (
    <form
      action={formAction}
      className="flex flex-col bg-white p-6 rounded-md w-full max-w-lg"
      {...getFormProps(form)}
    >
      <label htmlFor="email">Email</label>
      <input
        placeholder="johndoe@gmail.com"
        {...getInputProps(fields.email, { type: "email" })}
        key={fields.email.key}
      />
      <div className="text-xs text-red-500">{fields.email.errors}</div>

      <label htmlFor="password">Password</label>
      <input
        placeholder="******"
        {...getInputProps(fields.password, { type: "password" })}
        key={fields.password.key}
      />
      <div className="text-xs text-red-500">{fields.password.errors}</div>
      <FormButton>Submit</FormButton>
    </form>
  );
};
