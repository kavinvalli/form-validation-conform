import z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message:
      "Invalid email address, should be of the form username@emailprovider.tld",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
