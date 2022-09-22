import React, { useEffect, useState, useContext, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RiAttachmentFill } from "react-icons/ri";
import { API } from "../config/api";
import { useQuery, useMutation } from "react-query";
import { UserContext } from "../context/userContext";

function Paymentuser() {
  const title = "Be Premium";
  document.title = "Dumbflix | " + title;

  const [state] = useContext(UserContext);
  console.log(state);

  let navigate = useNavigate();

  const [previewSrc, setPreviewSrc] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-RKtjzD8JgcesiL1i";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const handleBuy = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
        },
      };

      // const data = {
      //   user_id: state.user.id,
      // };

      // const body = JSON.stringify(data);

      const response = await API.post("/transaction", config);
      console.log(response);

      // Create variabel for store token payment from response here ...
      const token = response.data.data.token;

      // Init Snap for display payment page with token here ...
      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          navigate("/profile");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          navigate("/profile");
        },
        onError: function (result) {
          /* You may add your own implementation here */
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("You closed the popup without finishing the payment");
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  const onChangeFiles = (e) => {
    let fileInfo = e.target.files[0];
    setFile(fileInfo);
    let reader = new FileReader();

    if (e.target.files.length === 0) {
      return;
    }

    reader.onloadend = (e) => {
      setPreviewSrc([reader.result]);
    };

    reader.readAsDataURL(fileInfo);
  };

  const inputFileRef = useRef(null);

  const onBtnClick = () => {
    inputFileRef.current.click();
  };
  return (
    <div className="container-fluid sectionPayment">
      <div className="text-center text-light">
        <h1 className="fs-2 fw-bold mb-5">Premium</h1>
        <p className="pPayment">
          Bayar Sekarang dan nikmati streaming film-film yang kekinian dari{" "}
          <span className="text-danger fw-bold">DUMBFLIX</span>
        </p>

        <div>
          <p className="text-danger fw-bold">
            DUMBFLIX <span className="text-light">: 0981312323</span>{" "}
          </p>
        </div>

        <Form style={{ width: "60%", margin: "20px auto" }}>
          <Form.Group className="mb-3" controlId="accountNumber">
            <Form.Control
              type="email"
              placeholder="Input your account number"
              className="border border-light border-3 formPayment"
            />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label className="labelInputFile rounded">
              Attache proof of transfer{" "}
              <span>
                <RiAttachmentFill style={{ fontSize: "30px" }} />
              </span>
            </Form.Label>
            <Form.Control type="file" onClick={(e) => onBtnClick()} />
            <input
                onChange={(e) => onChangeFiles(e)}
                type="file"
                name="file"
                ref={inputFileRef}
                style={{ display: "none" }}
              />
              <img src={previewSrc} alt="" className="preview-src" />
          </Form.Group>

          <Button
          onClick={(e) => handleBuy.mutate(e)}
            variant="primary"
            type="submit"
            className="border-0 btnSubmitPayment py-2 fw-bold"
          >
            Kirim
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Paymentuser;
