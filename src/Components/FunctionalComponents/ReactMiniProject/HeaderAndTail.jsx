import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./HeaderAndTail.css";

const HeaderAndTail = () => {
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [result, setResult] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedValue === "") {
      setErrorMsg("Please select either H or T");
    }
    if (result?.length === 0) {
      setResult((previous) => [...previous, [selectedValue]]);
      setSelectedValue("");
      setErrorMsg("");
    } else {
      if (selectedValue === "H") {
        setResult((previous) =>
          previous && previous[previous.length - 1][0] === "H"
            ? [
                ...previous.slice(0, -1),
                [...previous[previous.length - 1], selectedValue],
              ]
            : [...previous, [selectedValue]]
        );
        setSelectedValue("");
        setErrorMsg("");
      }
      if (selectedValue === "T") {
        setResult((previous) =>
          previous[previous.length - 1][0] === "T"
            ? [
                ...previous.slice(0, -1),
                [...previous[previous.length - 1], selectedValue],
              ]
            : [...previous, [selectedValue]]
        );
        setSelectedValue("");
        setErrorMsg("");
      }
    }
  };
  console.log(result);

  return (
    <div className="head-contianer">
      <form onSubmit={handleSubmit}>
        <select
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="">Select any Value</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {result.map((eachelement, index1) => {
          return (
            <div key={index1}>
              {eachelement.map((item, index) => {
                return (
                  <p className="colo" key={`${index1}-${index}`}>
                    {item}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
      {errorMsg && <h2 style={{ color: "red" }}>{errorMsg}</h2>}
      <Button variant="danger" onClick={() => navigate("/")}>
        Back to home page
      </Button>
    </div>
  );
};

export default HeaderAndTail;
