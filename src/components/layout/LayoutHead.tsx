import Head from "next/head";

export default function LayoutHead({ data }) {
  return (
    <Head>
      <title>
        {data?.title
          ? `${data.title} - Chad Fernandez`
          : "UgwAd Party - A political student alliance that promotes progressive change."}
      </title>
      <meta
        name="description"
        content={
          data?.description
            ? data.description
            : "UgwAd Party is a new political student alliance that promotes progressive change, inclusion and equality."
        }
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://chadfernandez.me" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        property="og:title"
        content={
          data?.title
            ? `${data.title} - UgwAd Party`
            : "UgwAd Party - A political student alliance that promotes progressive change."
        }
      />
      <meta property="og:url" content="https://chadfernandez.me" />
      <meta
        property="og:description"
        content={
          data?.description
            ? data.description
            : "UgwAd Party is a new political student alliance that promotes progressive change, inclusion and equality."
        }
      />
      <meta property="og:site_name" content="Chad Fernandez" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:image:alt"
        content="UgwAd Party - A political student alliance that promotes progressive change."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={
          data?.title
            ? `${data.title} - Chad Fernandez`
            : "UgwAd Party - A political student alliance that promotes progressive change."
        }
      />
      <meta
        name="twitter:description"
        content={
          data?.description
            ? data.description
            : "UgwAd Party is a new political student alliance that promotes progressive change, inclusion and equality."
        }
      />
      <meta
        name="twitter:image:alt"
        content="UgwAd Party - A political student alliance that promotes progressive change."
      />

      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons//favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
