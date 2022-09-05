/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const forgot3 = () => {
  const [password, setPassword] = useState("pass@123");
  const [passwordShown, setPasswordShown] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("the button has been clicked");
  };

  const togglePassword = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div>
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="http://fortawesome.github.io/Font-Awesome/assets/font-awesome/css/font-awesome.css"
        />
      </Head>

      <main className="main">
        <div>
          <Link href="/loginpage" className="BackButton">
            Back
          </Link>

          <div className="ForgotText">Set new password</div>
          <div className="ForgotText1">
            Your new password must be different from <br />
            previous used passwords.
          </div>
          <div className="greyEmail">Password</div>
          <input
            className="input3"
            type={passwordShown ? "text" : "password"}
            name="email"
          />
          <i
            className={`fa ${
              passwordShown ? "fa-eye-slash" : "fa-eye"
            } password-icon1`}
            onClick={togglePassword}
          />
          <div className="emailRectangle"></div>
          <div className="line-h1">
            Minimum 8 characters with at least 1 number.
          </div>
          <div className="greyPass">Password</div>
          <input
            className="input4"
            type={passwordShown ? "text" : "password"}
            name="email"
          />
          <i
            className={`fa ${
              passwordShown ? "fa-eye-slash" : "fa-eye"
            } password-icon2`}
            onClick={togglePassword}
          />
          <div className="passRectangle"></div>
          <div className="line-h2">Both password must match.</div>
          <button
            className="InstructionButton2"
            onClick={() => {
              router.push("/forgot4");
            }}
          >
            <p className="inner-btn">Reset Password</p>
          </button>
          <Link href="#" className="cancelButton2">
            {" "}
            Cancel
          </Link>
        </div>
      </main>
    </div>
  );
};

export default forgot3;
