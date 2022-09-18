/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const forgotpassword = () => {
  const [mainPage, setMainPage] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const router = useRouter();

  const params = {
    from_name: "project Health",
    to_email: email,
  };

  const handleSubmit = () => {
    if (validEmail) {
      emailjs
        .send(
          "service_wmowwed",
          "template_ftrhg2r",
          params,
          "vZ-Sv--M2SeS7pm5F"
        )
        .then(
          (result) => {
            setMainPage(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setErrorMsg(true);
    }
  };

  useEffect(() => {
    if (mailFormat.test(email)) {
      setValidEmail(true);
    }
  }, [email]);
  return (
    <div>
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        {!mainPage ? (
          <div>
            <Link href="/loginpage">
              <span className="BackButton">Back</span>
            </Link>
            <div className="ForgotText">Forgot your Password</div>
            <div className="ForgotText1">
              Enter your email address, and we’ll send you an <br />
              email with all the instructions.
            </div>
            <div className="greyEmail">Email</div>
            <input
              className="input3"
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="emailRectangle"></div>
            <button
              className="InstructionButton"
              onClick={
                //   () => {
                //   setMainPage(true);
                //   // router.push("/forgot2");
                // }
                handleSubmit
              }
            >
              <p className="inner-btn">Send Me Instructions</p>
            </button>
            {errorMsg ? (
              <p
                style={{
                  color: "red",
                  fontFamily: "Inter",
                  fontSize: "12px",
                  position: "absolute",
                  left: "450px",
                  top: "280px",
                }}
              >
                Please provide a Valid Email
              </p>
            ) : (
              ""
            )}
            <Link href="/loginpage">
              <span className="cancelButton"> Cancel</span>
            </Link>
          </div>
        ) : (
          <div>
            <Link href="/forgot-password">
              <span className="BackButton">Back</span>
            </Link>
            <div className="ForgotText">Check your email</div>
            <div className="ForgotText1">
              We have sent password reset link to <br />
              <strong>{email}</strong>
            </div>
            <div className="ForgotText2">
              To open your Gmail{" "}
              <Link href="https://mail.google.com/mail/u/0/#inbox">
                <span style={{ color: "#1996FC" }} className="clickHereHover">
                  click here
                </span>
              </Link>
            </div>
            <div className="forgot2">
              Didn’t receive the email?
              <span style={{ color: "#1996FC" }}> Click to resend</span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default forgotpassword;
