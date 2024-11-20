import {productsDog} from "../data/data.ts";
import ProductItemDog from "./UI/ProductsDog.tsx";

const ProductDog = () => {
    return (
        <div className={"container mx-auto mt-14 py-4"}>
            <div className={"flex items-center gap-x-5"}>
                <div className={"h-full"}>
                    <img className={"w-full h-full"} src={"/public/images/baner.png"} alt={"baner"} />
                </div>
                <div className={"grid grid-cols-3 gap-3"}>
                    {productsDog.map((item) => {
                        return <ProductItemDog id={item.name} name={item.name} image={item.image} price={item.price}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductDog