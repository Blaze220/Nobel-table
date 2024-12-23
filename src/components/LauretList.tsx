import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hoock";
import ItemLauret from "./ItemLauret";
import Paginathion from "./Paginathion";
import { fetchGetLaureates } from "../store/actionLaureat";

const LauretList: FC = () => {
  const [searchName, setSearchName] = useState<string>("");
  const [searchDate, setSearchDate] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(30);
  const laurets = useAppSelector((state) => state.laureates.data);
  const { count, load } = useAppSelector((state) => state.laureates);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGetLaureates(count));
    setLimit(count);
  }, [count]);

  useEffect(() => {
    let s = laurets
      .filter((l) => {
        if (searchName.trim().length !== 0) {
          return l.fullName?.en
            .toLowerCase()
            .includes(searchName.toLowerCase());
        } else {
          return true;
        }
      })
      .filter((i) => {
        if (searchDate.trim().length !== 0) {
          return i.birth.date.includes(searchDate);
        } else {
          return true;
        }
      }).length;
    setLimit(s);
    setPage(1);
  }, [searchName.length, searchDate.length]);

  return (
    <>
      <div className="container_input">
        <div className="input_block">
          <label htmlFor="">name</label>
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
        <div className="input_block">
          <label htmlFor="">date</label>
          <input
            type="text"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </div>
      </div>

      {laurets.length !== 0 &&
        laurets
          .filter((l) => {
            if (searchName.trim().length !== 0) {
              return l.fullName?.en
                .toLowerCase()
                .includes(searchName.toLowerCase());
            } else {
              return true;
            }
          })
          .filter((i) => {
            if (searchDate.trim().length !== 0) {
              return i.birth.date.includes(searchDate);
            } else {
              return true;
            }
          })
          .slice(page * 30 - 30, page * 30)
          .map((lauret) => <ItemLauret key={lauret.id} lauret={lauret} />)}
      {load && <span className="loader"></span>}
      <Paginathion setPage={setPage} pageValue={page} maxLimit={limit} />
    </>
  );
};

export default LauretList;
