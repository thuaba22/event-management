import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";
import Navbar from "../../components/Header/Navbar/Navbar";
import Teams from "../../components/Teams/Teams";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  const cards = useLoaderData();
  const teamData = [
    {
      id: "1",
      name: "John Smith",
      image_url: "https://i.postimg.cc/521dS7mp/member1.png",
      profession: "Event Planner",
    },
    {
      id: "2",
      name: "Jane Doe",
      image_url: "https://i.postimg.cc/fLdBFZzd/member2.png",
      profession: "Decor Specialist",
    },
    {
      id: "3",
      name: "David Johnson",
      image_url: "https://i.postimg.cc/zDjnf3cB/member3.png",
      profession: "Catering Manager",
    },
    {
      id: "4",
      name: "Sarah Wilson",
      image_url: "https://i.postimg.cc/7PFfw4x6/member4.png",
      profession: "Entertainment Coordinator",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Cards cards={cards}></Cards>
      <div data-aos="fade-zoom-in">
        <Teams teamData={teamData}></Teams>
      </div>

      <div data-aos="fade-zoom-in">
        <Faq></Faq>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
