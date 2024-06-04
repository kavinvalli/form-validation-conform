"use client";

import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

export const FormButton = ({
  children,
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { pending } = useFormStatus();

  const handleClick = (event: React.MouseEvent) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <button
      className={
        "text-white rounded-md p-2" +
        (pending ? " bg-gray-400" : " bg-blue-500")
      }
      onClick={handleClick}
      disabled={pending}
    >
      {children}
    </button>
  );
};
