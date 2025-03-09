import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?keyword=${keyword}&page=1`);
    } else {
      navigate(window.location.pathname);
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex justify-content-center align-items-center">
      <Form.Control
        type="text"
        name="q"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2"
        placeholder="Search..."
        style={{
          width: "400px", // Increased width for better prominence
          height: "45px", // Increased height for better interaction
          backgroundColor: "#f0f8ff", // Light subtle background color
          borderColor: "#7AB2D3", // Matching border color with your current palette
          borderRadius: "12px", // Rounded corners for a modern look
          padding: "10px", // Padding for better text spacing inside the search bar
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Added subtle shadow for depth
        }}
      />
      <Button
        type="submit"
        variant="outline-success"
        className="p-2 ml-2"
        style={{
          backgroundColor: "#FF8C00", // Complementary orange color
          borderColor: "#FF8C00", // Matching border color for the button
          color: "#fff", // White text color for contrast
          borderRadius: "12px", // Matching rounded corners
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
          height: "45px", // Match the height with the search bar
          display: "flex", // Align the button with the search bar vertically
          alignItems: "center", // Vertically align the button text
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default SearchBox;
