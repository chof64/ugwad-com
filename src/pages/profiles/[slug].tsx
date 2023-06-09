import Layout from "@/components/layout/Layout";
import PositionTitle from "@/components/profile/PositionTitle";
import directus from "@/lib/directus";
import Image from "next/image";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  const { data: profile } = await directus.items("profiles").readByQuery({
    filter: {
      _and: [{ slug: { _eq: slug } }, { status: { _eq: "published" } }],
    },
  });

  // if profile is empty return 404
  if (!profile || !profile[0]) {
    return {
      notFound: true,
    };
  }

  return {
    props: { profile },
    revalidate: 10,
  };
};

export default function Profile({ profile }) {
  return (
    <>
      <section className="my-16">
        <div className="m-auto flex w-svw-95 max-w-7xl flex-1 flex-col-reverse gap-6 md:flex-row">
          <div className="relative h-[70svh] w-full rounded-xl bg-[url('/card-cover.png')] bg-cover bg-center md:basis-1/2">
            <Image
              className="h-full w-full rounded-xl object-cover object-top backdrop-blur-sm"
              src={
                `https://${process.env.NEXT_PUBLIC_DIRECTUS_DOMAIN}/assets/${profile[0].portrait}` ||
                "/ugwad-transparent.png"
              }
              alt={`Profile image of ${profile[0].Name}`}
              fill
              priority
            />
          </div>
          <div className="my-auto h-full md:basis-1/2">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {profile[0].Name}
            </h1>
            <div className="mt-2 text-xl text-muted-foreground">
              <PositionTitle
                position={profile[0].position}
                department={profile[0].department}
              />
            </div>
            <div className="mt-6 max-w-lg leading-7 [&:not(:first-child)]:mt-6">
              {profile[0].sub_header}
            </div>
          </div>
        </div>
      </section>
      <section className="my-16">
        <div className="m-auto w-svw-95 max-w-lg space-y-12">
          {profile[0].biography && (
            <div>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Biography
              </h2>
              <div
                className="prose prose-blue"
                dangerouslySetInnerHTML={{ __html: profile[0].biography }}
              />
            </div>
          )}
          {profile[0].education && (
            <div>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Educational Background
              </h2>
              <div
                className="prose prose-blue"
                dangerouslySetInnerHTML={{ __html: profile[0].education }}
              />
            </div>
          )}
          {profile[0].leadership && (
            <div>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Leadership Background
              </h2>
              <div
                className="prose prose-blue"
                dangerouslySetInnerHTML={{ __html: profile[0].leadership }}
              />
            </div>
          )}
          {profile[0].achievements && (
            <div>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Achievements
              </h2>
              <div
                className="prose prose-blue"
                dangerouslySetInnerHTML={{ __html: profile[0].achievements }}
              />
            </div>
          )}
          {profile[0].platform && (
            <div>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Platform
              </h2>
              <div
                className="prose prose-blue"
                dangerouslySetInnerHTML={{ __html: profile[0].platform }}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
