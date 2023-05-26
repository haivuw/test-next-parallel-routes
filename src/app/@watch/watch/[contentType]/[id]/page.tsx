import Link from "next/link";

export default function WatchPage() {
  return (
    <div className="border-4 p-4 border-red-500">
      <h1 className="text-xl font-semibold">@watch</h1>
      <Link href="/movie/1">Back to /movie/1</Link>
    </div>
  );
}
