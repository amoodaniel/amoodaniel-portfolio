import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-ink flex flex-col">
      <Navbar />
      <main id="main" className="flex-1 flex items-center pt-16 md:pt-[72px]">
        <div className="container section">
          <p className="type-meta text-signal">404</p>
          <h1 className="type-h1 mt-6">This page doesn't exist.</h1>
          <p className="mt-6 text-muted-foreground max-w-md">
            The address may have changed in the redesign — the work, writing, and about pages are
            all still here.
          </p>
          <Link to="/" className="btn-primary mt-10 inline-flex">
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
