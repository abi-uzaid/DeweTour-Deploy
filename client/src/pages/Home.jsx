import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import Cards from "../components/Card";
import { useState } from "react";
import { API } from "../config/api";
import { useQuery } from "react-query";

export default function Home() {
  document.title = "DeweTour | Home";
  const [search, setSearch] = useState("");
  const [data, setData] = useState();

  let { data: trips } = useQuery("tripsCache", async () => {
    const response = await API.get("/trips");
    setData(response.data.data);
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Navbar />
      <Jumbotron search={search} handleSearch={handleSearch} />
      <Cards data={data} search={search} />
      <Footer />
    </>
  );
}
