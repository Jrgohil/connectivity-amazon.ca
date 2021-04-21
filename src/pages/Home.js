import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import CategorieList from "../components/CategoriesList";
import BestSellerList from "../components/BestSellerList";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <CategorieList />
      <BestSellerList />
      <Footer />
    </>
  );
};

export default Home;
