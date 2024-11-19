import Baner from "../components/UI/baner.tsx";
import Header from "../components/Header.tsx";
import HeroSection from "../components/HeroSection.tsx";
import AnimalFood from "../components/AnimalFood.tsx";
import ProductNewSection from "../components/ProductNewSection.tsx";
import AnimalWorld from "../components/AnimalWorld.tsx";

const HomePage = () => {
    return (
        <div>
            <Baner />
            <Header />
            <HeroSection />
            <AnimalFood />
            <ProductNewSection />
            <AnimalWorld />
        </div>
    )
}

export default HomePage;