import Footer from "./Footer";
// import LayoutHead from "./LayoutHead";
// import Navigation from "./Navigation";

export default function Layout({ children }) {
  // const { metadata } = children.props.children[1].props;

  return (
    <>
      {/* <LayoutHead data={metadata} /> */}
      <main>
        {/* <Navigation /> */}
        <>{children}</>
      </main>
      <Footer />
    </>
  );
}
