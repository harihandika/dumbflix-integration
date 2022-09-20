import { useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { IoMdAttach } from "react-icons/io";
import { useMutation } from 'react-query';
import { API } from "../config/api";
// import { Error, Success } from "../helpers/toast";

function Payment() {
  document.title = `Payment | Dumbflix`
  const [previewImage, setPreviewImage] = useState()
  const [transaction, setTransaction] = useState({
      attachment: ""
  })
  const [alreadyTransaction, setAlreadyTransaction] = useState()

  function handleChange(e) {
    console.log("punya transaction", e.target.name)
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
    })
    if (e.target.type === 'file') {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreviewImage(url)
    }
  }

  const handleSubmit = useMutation(async (e) => {
    e.preventDefault()
    const config = {
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
      }
    }
    try {
      const formDataTransaction = new FormData()
      formDataTransaction.set("attachment", transaction.attachment, transaction.attachment.name)

      await API.post('/transaction', formDataTransaction, config)
      checkAlreadyTransaction()
 
    } catch (err) {
      console.log(err)
      Error({ message: "Gagal menambahkan transaksi!" })
    }
  })

  const handleSubmitPayment = useMutation(async (e) => {
    e.preventDefault()
    const config = {
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
      }
    }
    try {
      const response = await API.post('/transaction', { attachment: "Automated Payment" }, config)
      console.log("response token midtrans", response)
      const token = response.data.data.token;

      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          // history.push("/profile");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          // history.push("/profile");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      })
      // checkAlreadyTransaction()
      // Success({ message: "Berhasil menambahkan transaksi, tunggu hingga admin mengkonfirmasi 😁" })
    } catch (err) {
      console.log(err)
      Error({ message: "Gagal menambahkan transaksi!" })
    }
  })

  async function checkAlreadyTransaction() {
    const config = {
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
      }
    }

    try {
      const transactions = await API.get('/transactions', config)
      setAlreadyTransaction(transactions.data.data[0])
      console.log(transactions)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    checkAlreadyTransaction()
  }, [])

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-6WbQDjmNTAqTS6KA";

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

  return (
    <>
      <div className="bg-black" style={{ height: "637px", padding: "53px" }}>
        <Container style={{ color: "white", margin: "auto" }}>
          <div>
            <Stack gap={3} className=" mx-auto pb-4">
              <h1 className="text-center fw-bolder py-4">Premium</h1>
              <h6 className="text-center " style={{ fontSize: "18px" }}>
                Bayar sekarang seharga <b>Rp. 50.000</b> dan nikmati streaming film-film yang kekinian
                dari
                <span
                  style={{
                    color: "#E50914",
                    fontWeight: "bold",
                    margin: "2pt",
                  }}
                >
                  DUMBFLIX
                </span>
              </h6>
              <h6 className="text-center fw-bold" style={{ fontSize: "18px" }}>
                <span style={{ color: "#E50914" }}> DUMBFLIX </span>: 0981312323
              </h6>
            </Stack>
            <div className="d-flex w-100 justify-content-center align-items-center">
              {
                // alreadyTransaction ? alreadyTransaction.status == "Approved" ? <h1 style={{ textAlign: "center" }}>Akun sudah berhasil diaktivasi</h1> : <h1 style={{ textAlign: "center" }}>Pembayaran berhasil, tunggu hingga admin mengkonfirmasinya</h1> :
                  <>
                    <form action="" style={{ width: "350px" }}>
                      {previewImage &&
                        <img src={previewImage} alt={previewImage} style={{ width: "100%" }} className="my-2" />
                      }
                      <div className="d-flex">
                        <div className="mx-auto w-100">
                          <label
                            htmlFor="attachment"
                            style={{
                              backgroundColor: "white",
                              padding: "8px 10px",
                              color: "#E50914",
                              borderRadius: "6px",
                              fontSize: "18px",
                              fontWeight: "bolder",
                              display: "auto",
                              textAlign: "center",
                            }}
                            className="w-100"
                          >
                            Attach proof of transfer
                            <IoMdAttach
                              style={{
                                color: "#E50914",
                                marginLeft: "70px",
                                fontSize: "30px",
                              }}
                            />
                          </label>
                          <input type="file" name="attachment" id="attachment" onChange={handleChange} hidden />
                        </div>
                      </div>
                      <div className="d-flex my-5">
                        <Button
                          className="w-100 mx-auto "
                          style={{ backgroundColor: "#E50914", border: "1px white" }}
                          onClick={(e) => handleSubmit.mutate(e)}
                        >
                          Kirim
                        </Button>
                      </div>
                      <div className="d-flex my-3">
                        <Button
                          className=" mb-3 w-100 mx-auto "
                          style={{ backgroundColor: "#E50914", border: "1px white" }}
                          onClick={(e) => handleSubmitPayment.mutate(e)}
                        >
                          Bayar Otomatis Klik Disini
                        </Button>
                      </div>
                    </form>
                  </>
              }
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Payment;