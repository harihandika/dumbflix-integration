import React from "react";
import { Table, Card, Dropdown } from "react-bootstrap";


const styles = {
  cardd: {
    backgroundColor: "black",
    margin: "20px",
  },
};
const Transaction = () => {
  return (
    <Card style={styles.cardd}>
      <Card.Body className="text-light m-3">
        <Card.Title className="mb-4">Incoming Transaction</Card.Title>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr className="text-danger">
              <th>No</th>
              <th>Users</th>
              <th>Bukti Transfer</th>
              <th>Remaining Active</th>
              <th>Status User</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Radif Ganteng</td>
              <td>bca.jpg</td>
              <td>26/Hari</td>
              <td className="text-success">Active</td>
              <td className="text-success">Approve</td>
              <td>
                <Dropdown className="me-5">
                  <Dropdown.Toggle
                    variant="blue"
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "none",
                      color: "blue",
                      border: "none",
                    }}
                    className="fs-4"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu className="bg-dark">
                    <Dropdown.Item
                      href="#/action-1"
                      className="text-success text-center"
                    >
                      <span>Approved</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="text-danger text-center"
                    >
                      <span>Cancel</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Haris Rahman</td>
              <td>bni.jpg</td>
              <td>26/Hari</td>
              <td className="text-success">Active</td>
              <td className="text-success">Approve</td>
              <td>
                <Dropdown className="me-5">
                  <Dropdown.Toggle
                    variant="blue"
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "none",
                      color: "blue",
                      border: "none",
                    }}
                    className="fs-4"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu className="bg-dark">
                    <Dropdown.Item
                      href="#/action-1"
                      className="text-success text-center"
                    >
                      <span>Approved</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="text-danger text-center"
                    >
                      <span>Cancel</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Amin Subagiyo</td>
              <td>permata.jpg</td>
              <td>0/Hari</td>
              <td className="text-danger">Not active</td>
              <td className="text-danger">Cancel</td>
              <td>
                <Dropdown className="me-5">
                  <Dropdown.Toggle
                    variant="blue"
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "none",
                      color: "blue",
                      border: "none",
                    }}
                    className="fs-4"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu className="bg-dark">
                    <Dropdown.Item
                      href="#/action-1"
                      className="text-success text-center"
                    >
                      <span>Approved</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="text-danger text-center"
                    >
                      <span>Cancel</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Haris Astina</td>
              <td>permata.jpg</td>
              <td>0/Hari</td>
              <td className="text-danger">Not active</td>
              <td className="text-warning">Pending</td>
              <td>
                <Dropdown className="me-5">
                  <Dropdown.Toggle
                    variant="blue"
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "none",
                      color: "blue",
                      border: "none",
                    }}
                    className="fs-4"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu className="bg-dark">
                    <Dropdown.Item
                      href="#/action-1"
                      className="text-success text-center"
                    >
                      <span>Approved</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="text-danger text-center"
                    >
                      <span>Cancel</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Azis Oni On</td>
              <td>bi.jpg</td>
              <td>0/Hari</td>
              <td className="text-danger">Not active</td>
              <td className="text-warning">Pending</td>
              <td>
                <Dropdown className="me-5">
                  <Dropdown.Toggle
                    variant="blue"
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "none",
                      color: "blue",
                      border: "none",
                    }}
                    className="fs-4"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu className="bg-dark">
                    <Dropdown.Item
                      href="#/action-1"
                      className="text-success text-center"
                    >
                      <span>Approved</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="text-danger text-center"
                    >
                      <span>Cancel</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Sugeng No Pants</td>
              <td>bni.jpg</td>
              <td>0/Hari</td>
              <td className="text-danger">Not active</td>
              <td className="text-warning">Pending</td>
              <td>
                <Dropdown className="me-5">
                  <Dropdown.Toggle
                    variant="blue"
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "none",
                      color: "blue",
                      border: "none",
                    }}
                    className="fs-4"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu className="bg-dark">
                    <Dropdown.Item
                      href="#/action-1"
                      className="text-success text-center"
                    >
                      <span>Approved</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="text-danger text-center"
                    >
                      <span>Cancel</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
export default Transaction;
