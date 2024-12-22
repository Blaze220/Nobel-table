import { FC } from "react";
import { NobelPrize } from "../models/response/NobelPrizeResponse";
import { useAppSelector } from "../hooks/redux-hoock";

interface IItemPrize {
  prize: NobelPrize;
}

const ItemPrize: FC<IItemPrize> = ({ prize }) => {
  const {dispalay} = useAppSelector(state=>state.prize)


  return (
    <>
    {prize && <div className={`block_item ${prize.category.en} ${dispalay}`}>
        <p><span  className="title">categoryFullName:</span>  {prize.categoryFullName.en}</p>
        <p><span className="title">dateAwarded:</span>  {prize.dateAwarded}</p>
        <p><span className="title">prizeAmount:</span>  {prize.prizeAmount} $</p>
        <p>
        <span className="titlel"> laureate:</span>
          {prize.laureates?.map((lauret) => (
            <span key={lauret.id}>
               <span className="titlel">fullName: {lauret.fullName?.en}</span>
                <span className="title">motivation :</span>  {lauret.motivation.en}
            </span>
          ))}
        </p>
      </div> }
      
    </>
  );
};

export default ItemPrize;
