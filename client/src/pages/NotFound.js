import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NotFounds from "../components/admin/NotFounds";

export default function NotFound() {
  return (
    <div>
      <NotFounds />
      <div className="d-flex col-2" style={{ margin: "auto" }}>
        <Button as={Link} to="/" variant="danger" className="col-12">
          back
        </Button>
      </div>
    </div>
  );
}
