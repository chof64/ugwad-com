import Image from "next/image";
import Link from "next/link";

export default function Card({ className, image, name, position, profile }) {
  return (
    <>
      <Link href={profile || "/#profile"}>
        <div className="relative flex h-96 items-end overflow-clip rounded-2xl border-2 bg-gradient-to-t from-white via-transparent to-transparent p-2 transition delay-75 duration-200 ease-in-out hover:shadow-2xl">
          <div>
            <div className="text-xl font-semibold">{name}</div>
            <div className="">{position}</div>
          </div>
          <Image
            className="-z-10 object-cover object-top"
            src={
              `https://${process.env.NEXT_PUBLIC_DIRECTUS_DOMAIN}/assets/${image}` ||
              "/ugwad-logo.jpg"
            }
            alt={name || "Portrait"}
            fill
          />
          <Image
            className="-z-20 object-cover object-right"
            src="/card-cover.png"
            alt="card background"
            fill
          />
        </div>
      </Link>
    </>
  );
}
