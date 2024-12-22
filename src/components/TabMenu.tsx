import { FC } from "react";
import "../scss/tab.scss";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hoock";
import { editDispalay } from "../store/PrizeSlice";

interface ITanMemu {
  setNameTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabMenu: FC<ITanMemu> = ({ setNameTab }) => {
  const changeTab = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameTab(e.target.id);
  };
    const {dispalay} = useAppSelector(state=>state.prize)
    const dispatch = useAppDispatch();
  return (
    <>
      <div className="contenet">
      <div className="card_block">
          <img src="table.png" alt="" onClick={()=>dispatch(editDispalay("block"))} className={dispalay=="block" ? "active" : ""}/>
          <img src="icon.png" alt="" onClick={()=>dispatch(editDispalay(""))} className={dispalay=="block" ? "" : "active"}/>
        </div>
        <div className="tabs">
          <div className="tab">
            <input
              type="radio"
              id="prize"
              name="tab-group"
              onChange={(e) => changeTab(e)}
            />
            <label htmlFor="prize" className="tab-title">
              Hаграды
            </label>
          </div>
          <div className="tab">
            <input
              type="radio"
              id="laureates"
              name="tab-group"
              onChange={(e) => changeTab(e)}
            />
            <label htmlFor="laureates" className="tab-title">
              Лауряты
            </label>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default TabMenu;
