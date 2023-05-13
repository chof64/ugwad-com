import Layout from "@/components/layout/Layout";

export default function imprint() {
  return (
    <>
      <section className="my-32 mb-16">
        <div className="m-auto w-svw-95 max-w-xl">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Imprint
          </h1>
        </div>
      </section>
      <section className="my-16">
        <div className="m-auto w-svw-95 max-w-xl">
          <p className="text-xl leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
            This website is managed by UgwAd Party officers. For questions and
            concerns, please send us a message via{" "}
            <a
              className="font-bold underline underline-offset-4"
              href="https://facebook.com/UgwAdParty"
              target="_blank"
              rel="noreferrer noopener"
            >
              Messenger
            </a>
            .
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Designed, built and hosted by:{" "}
            <a
              className="font-bold underline underline-offset-4"
              href="https://chadfernandez.me"
              target="_blank"
              rel="noreferrer noopener"
            >
              Chad Fernandez
            </a>{" "}
            (
            <a
              className="font-bold underline underline-offset-4"
              href="https://github.com/chof64/ugwad-com"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
            )
          </p>
        </div>
      </section>
      <section className="my-16">
        <div className="m-auto w-svw-95 max-w-xl">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Purpose
          </h3>
          <p
            className="leading-7 [&:not(:first-child)]:mt-6
"
          >
            This website was made to serve as a campaign platform for UgwAd
            Party, a student alliance composed by students from the University
            of Antique.
          </p>
        </div>
      </section>
    </>
  );
}

imprint.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
