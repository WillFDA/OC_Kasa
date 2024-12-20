import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

const Root = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <main className="max-w-7xl px-5 mx-auto flex flex-col lg:mt-12 lg:mb-12 mt-7 mb-7 lg:gap-12 gap-6 w-full flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Root;
