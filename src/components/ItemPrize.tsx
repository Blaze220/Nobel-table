import { FC } from "react";
import { NobelPrize } from "../models/response/NobelPrizeResponse";
import { useAppSelector } from "../hooks/redux-hoock";

interface IItemPrize {
  prize: NobelPrize;
  SearchDate: (str:string)=>void;
  SearchCat: (str:string)=>void
}

const ItemPrize: FC<IItemPrize> = ({ prize,SearchDate,SearchCat }) => {
  const {dispalay} = useAppSelector(state=>state.prize)


  return (
    <>
    {prize && <div className={`block_item ${prize.category.en} ${dispalay}`}>
      <div className="content">
        <p className="cross" onClick={()=>SearchCat(prize.category.en)}><span  className="title">categoryFullName:</span>  {prize.categoryFullName.en}</p>
        <p  className="cross" onClick={()=>SearchDate(prize.awardYear.toString())}><span className="title">dateAwarded:</span>  {prize.dateAwarded}</p>
        <p><span className="title">prizeAmount:</span>  {prize.prizeAmount} $</p>
      </div>
        
        <p className="lauret">
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
