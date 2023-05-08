import Image from "next/image";

export default function ProfileCard({ className, profile }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          {profile.name}
        </h3>
        <p className="text-sm font-medium text-muted-foreground">
          {profile.position}
        </p>
      </div>
      <div className="p-6 pt-0">
        <div className="relative aspect-square">
          <Image
            src={
              `https://${process.env.NEXT_PUBLIC_DIRECTUS_DOMAIN}/assets/${profile.portrait}` ||
              "/ugwad-logo.jpg"
            }
            alt={"Portrait"}
            fill
          />
        </div>
      </div>
      <div className="flex items-center p-6 pt-0 text-sm text-muted-foreground">
        View profile
      </div>
    </div>
  );
}
