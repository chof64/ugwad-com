import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LayoutHead from "@/components/layout/LayoutHead";

export default function Layout({ children }) {
  const { metadata } = children.props.children[1].props;

  return (
    <>
      <LayoutHead data={metadata} />
      <main className="min-h-screen">
        <Header />
        <>{children}</>
      </main>
      <Footer />
    </>
  );
}
