import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="my-8">
        <div className="m-auto flex w-svw-95 max-w-7xl justify-between">
          <div className="text-sm text-muted-foreground">
            Copyright &copy; 2023 UgwAd Party.
          </div>
          <Link className="text-sm font-medium leading-none" href="/imprint">
            Imprint
          </Link>
        </div>
      </footer>
    </>
  );
}
