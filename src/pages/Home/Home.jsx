import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";
import Navbar from "../../components/Header/Navbar/Navbar";

const Home = () => {
  const cards = useLoaderData();
  console.log(cards);

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Cards cards={cards}></Cards>
    </div>
  );
};

export default Home;
