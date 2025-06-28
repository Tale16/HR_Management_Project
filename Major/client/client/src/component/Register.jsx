import React from "react";

export const Page = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", color: "#333" }}>Registration Form</h2>

      <form style={{
        maxWidth: "400px",
        margin: "auto",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}>
        <label htmlFor="fullname" style={{ display: "block", marginBottom: "8px" }}>Full Name:</label>
        <input type="text" id="fullname" name="fullname" style={{ width: "100%", padding: "8px", marginBottom: "12px" }} />

        <label htmlFor="region" style={{ display: "block", marginBottom: "8px" }}>Region:</label>
        <input type="text" id="region" name="region" style={{ width: "100%", padding: "8px", marginBottom: "12px" }} />

        <label htmlFor="resume" style={{ display: "block", marginBottom: "8px" }}>Upload Resume:</label>
        <input type="file" id="resume" name="resume" style={{ marginBottom: "12px" }} />

        <label htmlFor="mob_number" style={{ display: "block", marginBottom: "8px" }}>Mobile Number:</label>
        <input type="tel" id="mob_number" name="mob_number" style={{ width: "100%", padding: "8px", marginBottom: "12px" }} />

        <label htmlFor="degree" style={{ display: "block", marginBottom: "8px" }}>Degree:</label>
        <input type="text" id="degree" name="degree" style={{ width: "100%", padding: "8px", marginBottom: "20px" }} />

        <input type="submit" value="Register" style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }} />
      </form>
    </>
  );
};