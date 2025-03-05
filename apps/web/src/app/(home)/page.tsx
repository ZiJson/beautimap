import Link from "next/link";

import MyMap from "./components/MyMap";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center gap-3 text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{" "}
        and see the documentation.
      </p>
      <MyMap />
    </main>
  );
}
