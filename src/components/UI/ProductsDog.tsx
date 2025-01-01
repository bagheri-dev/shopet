import {IProductItemType} from "../../types/productItem.Type.ts";
import {CiSquarePlus} from "react-icons/ci";

const ProductItemDog:React.FC<IProductItemType> = ({id, name , image , price}) => {
    return(
        <div key={id} className={"px-6 py-2 space-y-3 flex flex-col justify-between border rounded-lg"}>
            <div className={"flex justify-center"}>
                <img src={image} alt={name} />
            </div>
            <h3 className={"text-[#666666] text-lg font-bold"}>{name}</h3>
            <div className={"flex items-center justify-between font-semibold text-[#79AF79]"}>
                <span>قیمت :</span>
                <span className="text-lg">{Number(price).toLocaleString()}</span>
            </div>
            <div className={"flex justify-center"}>
                <button className={"flex items-center gap-x-2 bg-[#519BC2] text-white py-1 px-2 text-lg rounded-lg"}><CiSquarePlus/>افزودن
                    به سبد خرید
                </button>
            </div>
        </div>
    )
}
export default ProductItemDog