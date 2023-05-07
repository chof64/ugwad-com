import Platform from "@/components/Platform";
import Layout from "@/components/layout/Layout";
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
      slug: { _eq: slug[0] },
    },
  });

  return {
    props: { profile, slug },
    revalidate: 10,
  };
};

export default function Profile({ profile }) {
  return (
    <>
      <Platform className="bg-gradient-to-b from-gray-100 via-gray-100 to-transparent py-16">
        <div className="flex flex-col gap-6 lg:h-[80svh] lg:flex-row">
          <div className="relative h-[60svh] w-full shadow-xl lg:h-full lg:w-1/2">
            <Image
              className="z-10 rounded-lg object-cover object-top backdrop-blur-sm"
              src={`https://${process.env.NEXT_PUBLIC_DIRECTUS_DOMAIN}/assets/${profile[0].portrait}`}
              alt={profile[0].name}
              fill
            />
            <Image
              className=" rounded-lg object-cover object-right"
              src="/card-cover.png"
              alt="card background"
              fill
            />
          </div>
          <div className="my-auto lg:w-1/2">
            <h1 className="text-3xl font-bold lg:text-4xl">
              {profile[0].name}
            </h1>
            <p className="text-lg font-medium">{profile[0].position}</p>
            <p className="pt-4 lg:max-w-lg lg:pt-6">{profile[0].sub_header}</p>
          </div>
        </div>
      </Platform>

      <Platform className="py-16" type="lg">
        <div className="">
          <h1 className="text-3xl font-bold">About</h1>
          <div>
            <div>
              <h2 className="text-xl font-semibold">Background</h2>
              <div
                className="prose prose-blue"
                dangerouslySetInnerHTML={{ __html: profile[0].biography }}
              />
            </div>
          </div>
        </div>
      </Platform>
    </>
  );
}

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
