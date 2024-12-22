import { FC, useEffect, useState } from "react";
import "./scss/tab.scss";
import "./scss/loader.scss"
import "./App.css";
import TabMenu from "./components/TabMenu";
import PrizeList from "./components/PrizeList";
import LauretList from "./components/LauretList";
import { useAppSelector } from "./hooks/redux-hoock";

const App: FC = () => {
  const [tab, setTab] = useState<string>("prize");
  const {error} = useAppSelector(state=>state.prize)
  const {error: errorLauret} = useAppSelector(state=>state.laureates)

  useEffect(() => {
   
  }, []);

  return (
    <>
      <TabMenu setNameTab={setTab} />
    
      <section className="tab-content">
        {tab == "prize" ? <PrizeList /> : <LauretList />}
        {error.length!==0 && (<div className="error">{error}</div>)}
        {errorLauret.length!==0 && (<div className="error">{errorLauret}</div>)}
      </section>

    </>
  );
};

export default App;
