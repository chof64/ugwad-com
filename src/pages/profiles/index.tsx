import Layout from "@/components/layout/Layout";
import ProfileCard from "@/components/profile/Card";
import directus from "@/lib/directus";
import { sortProfiles } from "@/lib/sort-profiles";

export const getStaticProps = async () => {
  const { data } = await directus.items("profiles").readByQuery({
    limit: -1,
    fields: ["Name", "position", "department", "portrait", "slug"],
    filter: {
      _and: [{ status: { _eq: "published" } }],
    },
  });

  const profiles = sortProfiles(data);

  return {
    props: { profiles },
    revalidate: 30,
  };
};

export default function index({ profiles }) {
  return (
    <>
      <section className="my-16 pb-8">
        <div className="m-auto w-svw-95 max-w-7xl">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Profiles
          </h1>
          <p className="max-w-lg text-xl text-muted-foreground">
            Learn more about each of your candidates, their background,
            accomplishments, and platform.
          </p>
        </div>
      </section>
      <section className="my-36 mt-16">
        <div className="m-auto grid w-svw-95 max-w-7xl grid-rows-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-none lg:grid-cols-4">
          {profiles.map((profile) => (
            <ProfileCard key={profile.Name} profile={profile} />
          ))}
        </div>
      </section>
    </>
  );
}

index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
