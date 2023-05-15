import PositionTitle from "@/components/profile/PositionTitle";
import Image from "next/image";
import Link from "next/link";

export default function ProfileCard({ profile }) {
  return (
    <Link
      className="group w-full p-6 py-4"
      href={`/profiles/${profile.slug}`}
      key={profile.id}
    >
      <div className="relative aspect-square w-full rounded-xl shadow-inner">
        <Image
          className="z-10 aspect-square rounded-xl object-cover object-top"
          src={
            profile.portrait
              ? `https://${process.env.NEXT_PUBLIC_DIRECTUS_DOMAIN}/assets/${profile.portrait}`
              : "/ugwad-transparent.png"
          }
          alt={`Portrait of ${profile.Name}`}
          fill
        />
        <Image
          className="aspect-square rounded-xl object-cover object-right"
          src="/card-cover.png"
          alt="Card Cover"
          fill
        />
      </div>
      <div className="mt-2">
        <div className="text-center text-lg font-semibold transition duration-500 delay-75 ease-in-out group-hover:text-blue-800">
          {profile.Name}
        </div>
        <div className="text-center text-sm text-muted-foreground transition duration-500 delay-75 ease-in-out group-hover:text-blue-600">
          <PositionTitle
            position={profile.position}
            department={profile.department}
          />
        </div>
      </div>
    </Link>
  );
}
