import {products} from "../data/data.ts";
import ProductItem from "./UI/ProductItem.tsx";

const ProductNewSection = () => {
    return(
        <div className={"container mx-auto"}>
            <div className={"flex items-center justify-between font-bold"}>
                <h3 className={"text-3xl"}>جدیدترین محصولات</h3>
                <p className={"text-primary text-2xl"}>مشاهده همه</p>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"}>
                {products.map((item) => {
                    return <ProductItem id={item.id} name={item.name} price={item.price} image={item.image}/>
                })}
            </div>
        </div>
    )
}

export default ProductNewSection;