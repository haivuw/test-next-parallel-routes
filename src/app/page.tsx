import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="border-4 p-4 border-red-500">
        <h1 className="text-xl font-semibold">Homepage</h1>
        <Link href="/movie/1">/movie/1</Link>
      </div>
    </>
  );
}
