import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Root = () => {
  return (
    <>
      <Header />
      <main className="max-w-7xl px-5 mx-auto flex flex-col lg:mt-12 lg:mb-12 mt-7 mb-7 gap-12">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
