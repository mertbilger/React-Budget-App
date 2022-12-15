import React from "react";
import Butce from "./components/butce"
import Kalan from "./components/kalan";
import Harcanan from "./components/harcama";
import HarcamaListesi from "./components/HarcamaList";
import ExpenseForm from "./components/ExpenseForm";
import { AppProvider } from "./context/AppContext";
import Chartss from "./components/chart";
import Statistics from "./components/statisticsChart";

const App = () => {

  return (

    <AppProvider>
      <div className="App">
        <div className="container">
          <h1 className="mt-3">Bütçe Planlayıcı</h1>
          <div className="row mt-3">
            <div className="col-sm">
              <Butce />
            </div>
            <div className="col-sm">
              <Kalan />
            </div>
            <div className="col-sm">
              <Harcanan />
            </div>
          </div>
          <h3 className="mt-3">HARCAMALAR</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <HarcamaListesi />
            </div>
          </div>
          <h3 className="mt-3">Gider Ekle</h3>
          <div className="mt-3">
            <div className="col-sm">
              <ExpenseForm />
            </div>
            <h2 className="mt-3 p-5 ">Aylık İstatistiğiniz</h2>
            <div>
              <Statistics></Statistics>
            </div>
          </div>
        </div>
        <div>
          <Chartss />
        </div>
      </div>

    </AppProvider>

  );
}

export default App;
