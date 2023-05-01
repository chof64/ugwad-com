import Platform from "@/components/Platform";
import Card from "@/components/profile/Card";
import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <>
      <Platform>
        <div className="flex justify-between gap-6 pb-8 pt-16">
          <div className="my-auto w-1/2 space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-neutral-800">
                Padayon nga pag-<span className="text-blue-600">UgwAd</span>{" "}
                kang unibersidad
              </h1>
              <p className="text-xl font-medium text-neutral-600">
                UgwAd Party is a new political student alliance that promotes
                progressive change, inclusion and equality.
              </p>
            </div>
            <div className="space-x-2">
              <Link
                className="rounded-lg bg-blue-600 px-6 py-2 font-bold text-white transition delay-75 duration-200 ease-in-out hover:bg-blue-800"
                href="#"
              >
                Vote UgwAd
              </Link>
              <Link
                className="rounded-lg px-6 py-2 font-bold text-blue-600 transition delay-75 duration-200 ease-in-out hover:text-blue-800"
                href="#"
              >
                View Profiles
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <div className="relative flex h-96 w-full items-center justify-center overflow-clip rounded-2xl p-10">
              <Image
                className="-z-10 object-cover object-center"
                src="/ugwad-hero.svg"
                alt="UgwAd Party Hero Image"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </Platform>

      <Platform className="py-32" type="4xl">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold lg:text-5xl">Our Platform</h2>
          <div className="space-y-6 text-lg font-medium text-neutral-800">
            <p>
              This section is dedicated for the party&apos; platform and goals
              for the whole term. This is where we also put our plans and
              programs for the students. And any projects that we&apos;re
              planning to do.
            </p>
            <p>
              Ideally this should not be more than two paragraphs long, as this
              will only be a quick overview. A more elaborate version of this
              will be found in the about page or group of pages, if necessary.
            </p>
          </div>
        </div>
      </Platform>

      <Platform className="py-32" type="4xl">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold lg:text-5xl">
            The Student Leaders
          </h2>
          <div className="grid auto-cols-max grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card
              name="Ferdian Vince F. Diana"
              position="President"
              image="/profile/diana-president.jpg"
            />
            <Card
              name="Melchy Leong-on Orquejo"
              position="Vice President"
              image="/profile/orquejo-vice.jpg"
            />
            <Card name="Shee Jane Alvior" position="Senator" />
            <Card name="Alexandrou Estaris Bensa" position="Senator" />
            <Card name="Jirah Jane Cabrillos" position="Senator" />
            <Card name="Janine Sante Chicano" position="Senator" />
            <Card name={`Carlyle "Cing" De La Llave`} position="Senator" />
            <Card name="Queenie Fortunado" position="Senator" />
          </div>
          <div>
            <Link
              className="rounded-lg bg-blue-600 px-6 py-2 font-bold text-white transition delay-75 duration-200 ease-in-out hover:bg-blue-800"
              href="#"
            >
              View more profile
            </Link>
          </div>
        </div>
      </Platform>

      <Platform className="bg-blue-800 py-16">
        <div>
          <h2 className="text-center text-6xl font-bold text-white">
            Vote wisely, Vote UgwAd Party.
          </h2>
          <p className="text-center text-xl font-medium text-white">
            May 17 is the big day where you and the rest of the University of
            Antique students can cast your vote and select the next leaders of
            the Student Government.
          </p>
        </div>
      </Platform>
    </>
  );
}
