import { FC } from "react";
import { ILauret } from "../models/response/LaureatesResponse";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "../hooks/redux-hoock";
interface IItemLauret {
  lauret: ILauret;
}

const ItemLauret: FC<IItemLauret> = ({ lauret }) => {
  const { dispalay } = useAppSelector((state) => state.prize);
  return (
    <>
      <div
        className={`block_item ${lauret.nobelPrizes[0].category.en} ${dispalay}`}
      >
        <p><span className="title">Name: </span> {lauret.fullName?.en}</p>
        <p><span className="title">city: </span> {lauret.birth?.place?.city?.en}</p>
        <p><span className="title">country: </span>{lauret.birth?.place?.country?.en}</p>
        <p><span className="title">gender: </span> {lauret.gender}</p>
        <p><span className="title">birth: </span> {lauret.birth?.date}</p>
        <p><span className="title">wikipedia: </span> <a href={lauret.wikipedia.english} target="_blank">{lauret.fullName?.en}</a> </p>

        {lauret.nobelPrizes.map((prize) => (
          <p key={uuidv4()} className="p_bl">
            <span className="titlel">Prize</span>
            <span className="titlel">category: {prize.category?.en}</span>
            <span className="sp_bl"><span className="title">dateAwarded:</span> {prize.dateAwarded}</span>
            <span className="sp_bl"><span className="title">prizeAmount:</span> {prize.prizeAmount}</span>
            <span className="sp_bl"><span className="title">motivation:</span> {prize.motivation.en}</span> 
          </p>
        ))}
      </div>
    </>
  );
};

export default ItemLauret;
