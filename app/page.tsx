import Image from "next/image";
import Header from "@/component/Header";
import Article from "@/component/Article";
import Footer from "@/component/Footer";
import MainLinks from "@/component/MainLinks";
import Services from "@/component/service/Services";
import Sabtenam from "@/component/Sabtenam";
import WebLog from "@/component/WebLog";




function page() {
  return (
    <>
      <Header />
      <Article />
      <MainLinks />
      <Services />
      <Sabtenam />
      <WebLog />
      <Footer />
    </>
  );
}

export default page;
