import { ConformForm } from "@/components/ConformForm";

export default function Home() {
  return (
    <main className="h-screen w-full bg-gray-100  flex justify-center items-center">
      <ConformForm />
      <p className="absolute bottom-0 right-0 m-4 text-gray-400 font-bold text-sm uppercase">
        Conform
      </p>
    </main>
  );
}
