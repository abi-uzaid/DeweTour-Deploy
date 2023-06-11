import { Modal, Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export const ModalForm = (props) => {
  let { id } = useParams();

  let form = {
    fullname: "",
    gender: "",
    phone: "",
  }

  const handleBookNow = () => {
    let forms = JSON.parse(localStorage.getItem("forms")) || [];
    forms.push(form);
    localStorage.setItem("forms", JSON.stringify(forms));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Insert Data Success",
      showConfirmButton: false,
      timer: 1500,
    });
    props.onHide(true);
  };
 
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <img
          src="/images/palm.png"
          alt="#"
          width="30%"
          style={{ position: "absolute" }}
        />
        <img
          src="/images/hibiscus.png"
          alt="#"
          style={{ position: "absolute", left: "433px", borderRadius: "6px" }}
        />
        <div className="px-5 pb-3">
          <p className="fs-3 fw-bold text-center " style={{ paddingTop: 50 }}>
            Form
          </p>
          <Form className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold">Full Name</Form.Label>
              <Form.Control
                className="p-2 mb-3"
                name="fullname"
                type="text"
                onChange={(e) => (form.fullname = e.target.value)}
              />
              <Form.Label className="fw-bold">Gender</Form.Label>
              <Form.Control
                className="p-2 mb-3"
                name="gender"
                type="text"
                onChange={(e) => (form.gender = e.target.value)}
              />
              <Form.Label className="fw-bold">Phone</Form.Label>

              <Form.Control
                type="text"
                name="phone"
                onChange={(e) => (form.phone = e.target.value)}
              />
            </Form.Group>
            <Link to={`/payment/${id}`}>
              <Button
                style={{
                  backgroundColor: "#FFAF00",
                  fontWeight: "bold",
                  border: "none",
                  padding: "10px 40px",
                  marginBottom: "30px",
                }}
                onClick={handleBookNow}
              >
                BOOK NOW
              </Button>
            </Link>
          </Form>
        </div>
      </Modal>
    </>
  );
};
export default ModalForm;
