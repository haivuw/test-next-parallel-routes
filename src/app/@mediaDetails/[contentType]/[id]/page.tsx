import Link from "next/link";

export default function Page() {
  return (
    <div className="border-4 p-4 border-red-500">
      <h1 className="text-xl font-semibold">@mediaDetails</h1>
      <Link href="/watch/movie/1">/watch/movie/1</Link>
    </div>
  );
}
