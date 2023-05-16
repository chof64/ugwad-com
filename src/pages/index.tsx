import Layout from "@/components/layout/Layout";
import ProfileCard from "@/components/profile/Card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import directus from "@/lib/directus";
import { sortProfiles } from "@/lib/sort-profiles";
import { CheckSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  const { data } = await directus.items("profiles").readByQuery({
    limit: 8,
    fields: ["Name", "position", "department", "portrait", "slug"],
    filter: {
      _and: [
        {
          _or: [
            { position: { _eq: "president" } },
            { position: { _eq: "vice_president" } },
            { position: { _eq: "senator" } },
          ],
        },
        { status: { _eq: "published" } },
      ],
    },
  });

  const profiles = sortProfiles(data);

  return {
    props: { profiles },
    revalidate: 30,
  };
};

export default function Home({ profiles }) {
  return (
    <>
      <section className="my-32 mt-16">
        <div className="m-auto grid w-svw-95 max-w-7xl grid-rows-2 gap-6 md:grid-cols-2 md:grid-rows-none">
          <div className="my-auto space-y-5">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Padayon nga pag-<span className="text-blue-600">UgwAd</span> kang
              unibersidad
            </h1>
            <div className="text-xl text-muted-foreground">
              UgwAd Party is a new political student alliance that promotes
              progressive change, inclusion and equality.
            </div>
            <div className="inline-block space-x-2">
              <Button className="bg-blue-800 font-bold" asChild>
                <Link href="/#schedule">Vote UgwAd</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/profiles">View Profiles</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-96 w-full rounded-xl bg-muted shadow-md">
            <Image
              className="rounded-xl object-cover object-center"
              src="/ugwad-hero.png"
              alt="UgwAd cover image."
              fill
              priority
            />
          </div>
        </div>
      </section>

      <section className="my-32">
        <div className="m-auto flex w-svw-95 max-w-7xl flex-col gap-6 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Our Philosophy
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              We at UgwAd Party strongly believes that the student government is
              the voice of the students. We are the bridge between the students
              and the administration. We are the ones who will fight for the
              welfare of the students. We are the ones who will serve the
              students.
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Our Values
            </h2>
            <blockquote className="mt-6 border-l-2 border-blue-600 pl-6 italic">
              <b>A</b>ccountability, <b>T</b>ransparency, <b>H</b>umility{" "}
              <b>A</b>ccessibility, and <b>G</b>ood Governance
            </blockquote>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              ATHAG guides every member of UgwAd Party. It is the core values
              that every member of UgwAd live and follow. These values is what
              will guide us in our service to the students. We will always be
              accountable, transparent, humble, accessible, and we will always
              practice good governance.
            </p>
          </div>
        </div>
      </section>

      <section className="my-32">
        <div className="mx-auto w-svw-95 max-w-7xl">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            The Student Leaders
          </h2>
          <div className="my-6 grid auto-cols-auto auto-rows-auto grid-rows-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-none lg:grid-cols-4">
            {profiles.map((profile) => (
              <ProfileCard profile={profile} key={profile.Name} />
            ))}
          </div>
          <Button variant="outline" asChild>
            <Link href="/profiles">View more profiles</Link>
          </Button>
        </div>
      </section>

      <section className="my-32" id="schedule">
        <div className="mx-auto w-svw-95 max-w-7xl">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            The 2023 Election
          </h2>
          <div className="mt-6 flex w-full flex-1 flex-col gap-6 md:flex-row">
            <div className="basis-1/2">
              <Alert>
                <CheckSquareIcon className="h-4 w-4 stroke-blue-700" />
                <AlertTitle>Vote UgwAd!</AlertTitle>
                <AlertDescription>
                  This upcoming 2023 UASG National, Provincial and FLP
                  Sub-Chapter Officers Election, please vote for UgwAd Party!
                </AlertDescription>
              </Alert>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The Commission of Elections of the University of Antique - Main
                Campus has set a date for the 2023 UASG National, Provincial,
                and FLP Sub-Chapter Officers Election. This election allows the
                students to vote for their chosen candidates who will serve as
                their voice in the student government.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                May 17, 2023, is the big day when you and your fellow students
                can vote and select the new officers to be your voice in the
                University. So don&apos;t forget to add a reminder, set an
                alarm, and tell your friends to vote. Vote wisely.
              </p>
            </div>
            <div className="h-full w-full basis-1/2">
              <div className="relative m-auto aspect-square w-full max-w-sm">
                <Image
                  className="rounded-xl object-cover object-center"
                  src="/comelec-election.jpg"
                  alt="Comelec Schedule of Election"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
