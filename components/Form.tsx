"use client";

import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { FormButton } from "./FormButton";

export const Form = () => {
  const [lastResult, formAction] = useFormState(authenticate, undefined);

  return (
    <form
      action={formAction}
      className="flex flex-col bg-white p-6 rounded-md w-full max-w-lg"
    >
      <label htmlFor="email">Email</label>
      <input type="text" name="email" placeholder="johndoe@gmail.com" />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="******" />
      <FormButton>Submit</FormButton>
    </form>
  );
};
