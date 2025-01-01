import {IProductItemType} from "../../types/productItem.Type.ts";
import {CiSquarePlus} from "react-icons/ci";

const ProductItem:React.FC<IProductItemType> = ({id, name , image , price}) => {
    return(
        <div key={id} className={"py-2 px-6 space-y-3 flex flex-col justify-between shadow-xl border border-dashed rounded-lg"}>
            <div className={"flex justify-center"}>
                <img className={"w-[204px] h-[204px]"} src={image} alt={name} />
            </div>
            <h3 className={"text-[#666666] text-xl font-bold"}>{name}</h3>
            <div className={"flex items-center justify-between text-lg font-bold text-[#79AF79]"}>
                <span>قیمت :</span>
                <span>{Number(price).toLocaleString()}</span>
            </div>
            <div className={"flex justify-center"}>
                <button className={"flex items-center gap-x-2 bg-[#519BC2] text-white py-1 px-2 text-lg rounded-lg"}><CiSquarePlus/>افزودن
                    به سبد خرید
                </button>
            </div>
        </div>
    )
}
export default ProductItem