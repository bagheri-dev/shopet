import {productsDog} from "../data/data.ts";
import ProductItemDog from "./UI/ProductsDog.tsx";

const ProductDog = () => {
    return (
        <div className={"container mx-auto mt-14"}>
            <div className={"flex items-center gap-x-5"}>
                <div className={"h-full"}>
                    <img className={"w-full h-full"} src={"/images/baner.png"} alt={"baner"} />
                </div>
                <div className={"grid grid-cols-3 gap-y-2 gap-x-2"}>
                    {productsDog.map((item , index) => {
                        return <ProductItemDog id={index} name={item.name} image={item.image} price={item.price}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductDog