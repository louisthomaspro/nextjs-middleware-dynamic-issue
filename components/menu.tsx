import Link from "next/link";

export const Menu = () => (
  <div className="flex gap-4 mb-4">
    <Link className="underline focus:text-blue-500" href="/">
      Page
    </Link>
    <Link
      className="underline focus:text-blue-500"
      href="/middleware-dynamic"
    >
      Dynamic Page (under middleware)
    </Link>
  </div>
);
