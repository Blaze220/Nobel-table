import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hoock";
import ItemPrize from "./ItemPrize";
import "../scss/items.scss";
import { v4 as uuidv4 } from "uuid";
import Paginathion from "./Paginathion";
import { fetchGetNobelPrizes } from "../store/actionPrize";


const PrizeList: FC = () => {
  const {count,load,prizes} = useAppSelector((state) => state.prize);
  const [limit, setLimit] = useState<number>(30);
  const [search, setSearch] = useState<string>("");
  const [searchCat, setSearchCat] = useState<string>("");
  const [isSearchArray, setIsSearchArray] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetNobelPrizes(count));
    setLimit(count);
  }, [count]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const res: string[] = [];
    prizes.map((prize) => {
      if (prize.dateAwarded?.includes(e.target.value)) {
        if (!res.includes(prize.dateAwarded)) res.push(prize.dateAwarded);
      }
    });
    setIsSearchArray(res);
  };
  const handleSearchCat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCat(e.target.value);
    const res: string[] = [];
    prizes.map((prize) => {
      if (prize.categoryFullName.en.includes(e.target.value)) {
        if (!res.includes(prize.categoryFullName.en))
          res.push(prize.categoryFullName.en);
      }
    });
    console.log(res);
    setIsSearchArray(res);
  };

useEffect(()=>{
  let s = prizes
  .filter((prize) => {
    if (search.trim().length !== 0) {
      return prize.dateAwarded && prize?.dateAwarded?.includes(search);
    } else {
      return true;
    }
  }).filter((prize) => prize.categoryFullName.en.includes(searchCat)).length
  setLimit(s)
  setPage(1);
},[search.length,searchCat.length])



  return (
    <>
    <div className="container_input">
    <div className="input_block">
        <p>date</p>
        <div className="block_search">
          <input type="text" value={search} onChange={(e) => {handleSearch(e)}}/>
          <div className={isSearchArray.length == 0   ? "search" : "search_active"}>
            {search.trim().length !==0 && isSearchArray.map((i, index) => (
              <p
                key={i + index}
                onClick={() => {
                  setIsSearchArray([]);
                  setSearch(i);
                }}
              >
                {i}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="input_block">
        <p>Name category</p>
        <div className="block_search">
          <input type="text" value={searchCat} onChange={(e) => {handleSearchCat(e)}}/>
          <div className={ isSearchArray.length == 0  ? "search" : "search_active"}>
            {searchCat.trim().length !==0 && isSearchArray.map((i, index) => (
              <p
                key={i + index}
                onClick={() => {
                  setIsSearchArray([]);
                  setSearchCat(i);
                }}>

                {i}

              </p>
            ))}
          </div>
        </div>
      </div>
    </div>


      {prizes.length !==0 && (
        prizes
          .filter((prize) => {
            if (search.trim().length !== 0) {
              return prize.dateAwarded && prize?.dateAwarded?.includes(search);
            } else {
              return true;
            }
          })
          .filter((prize) => prize.categoryFullName.en.includes(searchCat))
          .slice(page * 30 - 30, page * 30)
          .map((prize) => <ItemPrize key={uuidv4()} prize={prize} />)
      )}
      {load && <span className="loader"></span>}
      <Paginathion setPage={setPage} pageValue={page} maxLimit={limit} />
    </>
  );
};

export default PrizeList;
