import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      style={{
        height: 520,
        width: "100%",
        color: "white",
        background: "black",
        marginTop: 200,
        padding: "0 120px",
      }}
    >
      <div
        style={{ width: "100%", display: "flex", height: 440, paddingTop: 60 }}
      >
        <div style={{ width: "40%", height: "100%" }}>
          <img src="./white-logo.png" height="60px" width="120px" />
        </div>

        <div
          style={{
            width: "60%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 15, color: "grey" }}>
            <p
              style={{ color: "white", marginBottom: 40 }}
            >
              Useful links
            </p>

            <p
              className="footer-link"
              style={{ fontSize: 15, marginBottom: 10, cursor: "pointer" }}
            >
              Contact Us
            </p>
            <p
              className="footer-link"
              style={{ fontSize: 15, marginBottom: 10, cursor: "pointer" }}
            >
              Delivery Information
            </p>
            <p
              className="footer-link"
              style={{ fontSize: 15, marginBottom: 10, cursor: "pointer" }}
            >
              Returns Policy
            </p>
            <p
              className="footer-link"
              style={{ fontSize: 15, marginBottom: 10, cursor: "pointer" }}
            >
              Hillsong Church
            </p>
            <p
              className="footer-link"
              style={{ fontSize: 15, marginBottom: 10, cursor: "pointer" }}
            >
              Terms & Conditions
            </p>
            <p
              className="footer-link"
              style={{ fontSize: 15, cursor: "pointer" }}
            >
              Privacy Policy
            </p>
          </div>

          <div style={{ fontSize: 15, color: "grey" }}>
            <p style={{ color: "white", marginBottom: 40 }}>Shop</p>

            <p
              className="footer-link"
              style={{ fontSize: 15, marginBottom: 10, cursor: "pointer" }}
            >
              Books
            </p>
            <p
              className="footer-link"
              style={{ fontSize: 15, marginBottom: 10, cursor: "pointer" }}
            >
              Music
            </p>
            <p
              className="footer-link"
              style={{ fontSize: 15, marginBottom: 10, cursor: "pointer" }}
            >
              Teaching
            </p>
            <p
              className="footer-link"
              style={{ fontSize: 15, marginBottom: 10, cursor: "pointer" }}
            >
              Curriculum
            </p>
            <p
              className="footer-link"
              style={{ fontSize: 15, marginBottom: 10, cursor: "pointer" }}
            >
              Apparel
            </p>
          </div>

          <div style={{ fontSize: 15, color: "grey" }}>
            <p
              style={{ color: "white", marginBottom: 40}}
            >
              Information
            </p>
            <p
              style={{ color: "grey", marginBottom: 60}}
            >
              Tax/GST will be calculated at the checkout.
            </p>

            <p
              style={{ fontSize: 15, marginBottom: 10}}
            >
              Hillsong Music Australia
            </p>
            <p
              style={{ fontSize: 15, marginBottom: 10}}
            >
              1-9 Solent Circuit
            </p>
            <p
              style={{ fontSize: 15, marginBottom: 10}}
            >
              Norwest NSW 2153
            </p>
            <p
              style={{ fontSize: 15, marginBottom: 10}}
            >
              Australia
            </p>
            <p
              className="footer-link"
              style={{ fontSize: 15, marginBottom: 10, cursor: "pointer" }}
            >
              Call us at +61 2 8853 5300
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          height: 80,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p>© 2021 Hillsong International Ltd atf Hillsong International</p>

        <div
          style={{
            width: 120,
            height: 30,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FacebookIcon fontSize="22px" />
          <InstagramIcon fontSize="22px" />
          <TwitterIcon fontSize="22px" />
        </div>
      </div>
    </Box>
  );
};

export default Footer;
