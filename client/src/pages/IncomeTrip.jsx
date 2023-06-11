import Navbars from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Card";
import { Button, Container } from "react-bootstrap";
import { API } from "../config/api";
import { useState } from "react";
import { useQuery } from "react-query";


export default function IncomeTrip() {
  document.title = "IncomeTrip | DeweTour";
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
      <Navbars />
      <Container>
        <div className="d-flex my-5 justify-content-between">
          <h1 className="fw-bold">Income Trip</h1>
          <div>
            <Button
              href="/AddTrip"
              style={{
                backgroundColor: "#FFAF00",
                border: "none",
                padding: "10px 50px",
              }}
            >
              Add Trip
            </Button>
          </div>
        </div>
        <div className="mx-3">
        <Cards data={data} search={search} />
        </div>
      </Container>
      <Footer />
    </>
  );
}