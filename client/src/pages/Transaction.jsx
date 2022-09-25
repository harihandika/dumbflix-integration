import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query';
import { API } from '../config/api';
// import '../transaction.css'
import { Table } from 'react-bootstrap';

function Transaction() {

  const [transactionData, setTransactionData] = useState([])

  let { data: transaction } = useQuery("transactionCache", async () => {
    const response = await API.get("/transactions");
    setTransactionData(response.data.data)
    return response.data.data;
  });

  console.log("transactionData", transactionData)

  function Duration(dueDate, startDate) {
    const due = new Date(dueDate);
    startDate = new Date();

    let duration;

    if (startDate < due) {
      duration = new Date(due - startDate);
    }

    let years = duration.getFullYear() - 1970
    let months = duration.getMonth();
    let days = duration.getDate();

    let yearTxt = "year";
    let monthTxt = "month";
    let dayTxt = "day";

    if (years > 1) yearTxt += "s";
    if (months > 1) monthTxt += "s";
    if (days > 1) dayTxt += "s";

    if (years >= 1) {
      duration = `${years} ${yearTxt} ${months} ${monthTxt} ${days} ${dayTxt}`;
    } else if (months >= 1) {
      duration = `${months} ${monthTxt} ${days} ${dayTxt}`;
    } else {
      duration = `${days} ${dayTxt}`;
    }
    return duration;
  }
  return (

    <div className="Transaction m-5" style={{marginTop:"10px"}}>
         <div>
            <h3 style={{marginTop:"10px"}} className="text-light">Incoming Transaction</h3>
         </div>
     <Table striped bordered hover className="table table-dark" style={{}}>
    <thead>
    <tr className="text-danger text-center">
        <th>No</th>
        <th>Nama</th>         
        <th>Email</th>
        <th>Due Date</th>
        <th>Status User</th>
        <th>Status Payment</th>
       </tr>
    </thead>
        <tbody>
        {transactionData?.map((item, index) => {
                    return (
                      <>
                        <tr style={{ height: "60px" }} className="text-center" key={index}>
                          <td>{index + 1}</td>
                          <td>{item.user.name}</td>
                          <td>{item.user.email}</td>
                          {item.status === "success"?
                          <td className='text-success'>{Duration(item.duedate, item.startdate)}</td>:<td className='text-danger'>0 day</td>}
                          <td className={item.status === "success" ? "text-success" : "text-danger"}>{item.status === "success" ? "Active" : "Not Active"}</td>
                          <td className={item.status === "success" ? "text-success" : item.status === "pending" ? "text-warning" : "text-danger"}>{item.status === "success" ? "Success" : item.status === "pending" ? "Pending" : "Failed"}</td>
                        </tr>
                      </>
                    );
                  })}
        </tbody>
      </Table>
    </div>
  )
}

export default Transaction