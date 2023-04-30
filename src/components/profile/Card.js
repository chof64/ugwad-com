import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Card({ className, image, name, position, profile }) {
  return (
    <>
      <div className={("", clsx(className))}>
        {/* link src is profile, else use /#profile */}
        <Link href={profile || "/#profile"}>
          <div className="relative flex h-96 w-72 items-end overflow-clip rounded-2xl border-2 bg-gradient-to-t from-white via-transparent to-transparent p-2 transition delay-75 duration-200 ease-in-out hover:shadow-2xl">
            <div>
              <div className="text-xl font-semibold">{name}</div>
              <div className="">{position}</div>
            </div>
            <Image
              className="-z-10 object-cover object-center"
              src={image || "/ugwad-logo.jpg"}
              alt={name || "Portrait"}
              fill
            />
          </div>
        </Link>
      </div>
    </>
  );
}
