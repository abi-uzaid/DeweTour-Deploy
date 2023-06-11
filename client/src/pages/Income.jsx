import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Table } from "react-bootstrap";
import { ModalApprove } from "../components/ModalApprove";
import { useState } from "react";
import { useQuery } from "react-query";
import { API } from "../config/api";

export default function Income() {
  document.title = "Income | DeweTour";

  const [transid, setTransid] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("pending");
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [selectedTransactionEmail, setSelectedTransactionEmail] = useState("");

  const handleApprove = () => {
    setStatus("aktif");

    
  };

  const handleModalShow = async (transacid) => {
    const response = await API.get(`/transaction/${transacid}`);

    setTransid(response.data.data);
   
    setShowModal(true);
    selectedTransaction(52);
  };

  const handleModalHide = () => {
    setShowModal(false);
  };

  let { data: transaction } = useQuery("transactionCache", async () => {
    const response = await API.get(`/transactions`);
    return response.data.data;
  });

  return (
    <>
      <Navbar />
      <Container>
        <div>
          <h1 className="fw-bold my-5">Income Transaction</h1>
          <Table responsive striped>
            <thead>
              <tr>
                <th>No</th>
                <th>Users</th>
                <th>Trip</th>
                <th>Bukti Transfer</th>
                <th>Status Payment</th>
                <th>Tiket</th>
              </tr>
            </thead>
            <tbody>
              {transaction?.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.user.email}</td>
                    <td>{item.trip.title}</td>
                    <td>bca.jpg</td>
                    <td>{status}</td>
                    <td>
                      <button onClick={() => handleModalShow(item.id)}>
                        <img src="/images/alat.svg" alt="" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <ModalApprove
            data={transid}

            onApprove={() => handleApprove(selectedTransaction)}
            show={showModal}
            onHide={handleModalHide}
            selectedTransactionEmail={selectedTransactionEmail}

          />
        </div>
      </Container>
      <Footer />
    </>
  );
}
