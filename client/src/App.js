import Detail from "./pages/DetailTour";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import IncomeTrip from "./pages/IncomeTrip";
import Income from "./pages/Income";
import AddTrip from "./pages/AddTrip";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Waiting from "./pages/Waiting";

function App() {
  const [dataTrans, setDataTrans] = useState();

  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center", marginTop: "250px" }}>
              Pagenya Salah tuh..
            </h1>
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/Detail/:id"
          element={<Detail setDataTrans={setDataTrans} />}
        />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AddTrip" element={<AddTrip />} />
        <Route path="/IncomeTrip" element={<IncomeTrip />} />
        <Route path="/IncomeTransaction" element={<Income />} />
        <Route path="/Waiting" element={<Waiting />} />
      </Routes>
    </>
  );
}
export default App;
