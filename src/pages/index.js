import Platform from "@/components/Platform";
import Card from "@/components/profile/Card";
import directus from "@/lib/directus";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  const { data: profiles } = await directus.items("profiles").readByQuery({
    limit: -1,
    fields: ["id", "name", "position", "portrait"],
    filter: {
      _and: [
        {
          _or: [
            { position: { _eq: "President" } },
            { position: { _eq: "Vice President" } },
            { position: { _eq: "Senator" } },
          ],
        },
        { category: { _eq: "national" } },
      ],
    },
  });

  return {
    props: { profiles },
    revalidate: 10,
  };
};

export default function index({ profiles }) {
  return (
    <>
      <Platform className="py-16">
        <div className="grid grid-rows-2 gap-6 md:grid-cols-2 md:grid-rows-none">
          <div className="my-auto space-y-12">
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
                className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition delay-75 duration-200 ease-in-out hover:bg-blue-800"
                href="#"
              >
                Vote UgwAd
              </Link>
              <Link
                className="rounded-lg px-6 py-3 font-bold text-blue-600 transition delay-75 duration-200 ease-in-out hover:text-blue-800"
                href="#"
              >
                View Profiles
              </Link>
            </div>
          </div>
          <div>
            <div className="relative flex h-96 w-full items-center justify-center overflow-clip rounded-2xl p-10 shadow-xl">
              <Image
                className="object-cover object-center"
                src="/ugwad-hero.png"
                alt="UgwAd Party Hero Image"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </Platform>

      <Platform className="py-16">
        <div className="grid grid-rows-2 gap-6 md:grid-cols-2 md:grid-rows-none">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold lg:text-5xl">Our Philosophy</h2>
            <div className="space-y-6 text-lg font-medium text-neutral-800">
              <p>
                We at UgwAd Party strongly believes that the student government
                is the voice of the students. We are the bridge between the
                students and the administration. We are the ones who will fight
                for the welfare of the students. We are the ones who will serve
                the students.
              </p>
            </div>
          </section>
          <section className="space-y-6">
            <h2 className="text-3xl font-bold lg:text-5xl">Our Values</h2>
            <div className="space-y-2 text-neutral-800">
              <p className="text-lg font-medium">
                ATHAG guides every member of UgwAd Party. It is the core values
                that every member live and follow.
              </p>
              <div className="space-y-1 text-xl">
                <p>
                  <span className="text-2xl font-semibold text-blue-600">
                    A
                  </span>
                  ccountability
                </p>
                <p>
                  <span className="text-2xl font-semibold text-blue-600">
                    T
                  </span>
                  ransparency
                </p>
                <p>
                  <span className="text-2xl font-semibold text-blue-600">
                    H
                  </span>
                  umility
                </p>
                <p>
                  <span className="text-2xl font-semibold text-blue-600">
                    A
                  </span>
                  ccessibility
                </p>
                <p>
                  <span className="text-2xl font-semibold text-blue-600">
                    G
                  </span>
                  ood Governance
                </p>
              </div>
            </div>
          </section>
        </div>
      </Platform>

      <Platform className="py-16">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold lg:text-5xl">
            The Student Leaders
          </h2>
          <div className="grid auto-cols-max grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {profiles.map((profile) => (
              <Card
                key={profile.id}
                name={profile.name}
                position={profile.position}
                image={profile.portrait}
              />
            ))}
          </div>
          <div>
            <Link
              className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition delay-75 duration-200 ease-in-out hover:bg-blue-800"
              href="#"
            >
              View more profile
            </Link>
          </div>
        </div>
      </Platform>

      <Platform className="bg-gradient-to-br from-blue-800 to-sky-800 py-16">
        <div className="space-y-6">
          <h2 className="text-center text-3xl font-bold text-white lg:text-5xl">
            Vote wisely, Vote UgwAd Party.
          </h2>
          <p className="text-center text-lg font-medium text-white lg:text-2xl">
            May 17 is the big day where you and the rest of the University of
            Antique students can cast your vote and select the next leaders of
            the Student Government.
          </p>
        </div>
      </Platform>
    </>
  );
}
