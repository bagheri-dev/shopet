import Baner from "../components/UI/baner.tsx";
import Header from "../components/Header.tsx";
import HeroSection from "../components/HeroSection.tsx";
import AnimalFood from "../components/AnimalFood.tsx";
import ProductNewSection from "../components/ProductNewSection.tsx";
import AnimalWorld from "../components/AnimalWorld.tsx";
import Category from "../components/Category.tsx";
import ProductDog from "../components/ProductDog.tsx";
import Blogs from "../components/Blogs.tsx";
import Footer from "../components/Footer.tsx";

const HomePage = () => {
    return (
        <div className="font-IRANSans">
            <Baner />
            <Header />
            <HeroSection />
            <AnimalFood />
            <ProductNewSection />
            <AnimalWorld />
            <Category />
            <ProductDog />
            <Blogs />
            <Footer />
        </div>
    )
}

export default HomePage;