import { Form } from "@/components/Form";

export default function Home() {
  return (
    <main className="h-screen w-full bg-gray-100  flex justify-center items-center">
      <Form />
      <p className="absolute bottom-0 right-0 m-4 text-gray-400 font-bold text-sm uppercase">
        Normal
      </p>
    </main>
  );
}
