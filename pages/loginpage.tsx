import pic from "../images/bgimage.png";
import pic1 from "../images/health-logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import pic2 from "../images/Vector.png";
import styles from "../styles/all.module.css";

import React, { useReducer, useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@mui/material/styles";

import TextField from "@mui/material/TextField";

import Head from "next/head";
import { Button, Input } from "@mui/material";

const tempEmail = "user";
const tempPassword = "user@123";

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passFormat =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])(.{8,24})$/;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongUsername, setWrongUsername] = useState(false);
  const [invalidUsername, setInvalidUsername] = useState(true);
  const [invalidPassword, setInvalidPassword] = useState(true);
  const [close, setClose] = useState<boolean>(false);
  const [loginClick, setLoginClick] = useState<boolean>(false);
  const [splash, setSplash] = useState(true);

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("the button has been clicked");
  };

  const togglePassword = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  useEffect(() => {
    setTimeout(() => setSplash(false), 3000);
  }, []);
  const handleLogin = () => {
    setLoginClick(true);
    if (email === tempEmail && password === tempPassword) {
      setWrongUsername(false);
      setWrongPassword(false);
      router.push("/adminusers");
    } else if (email !== tempEmail || password !== tempPassword) {
      setWrongPassword(true);
      setWrongUsername(true);
    }
  };

  useEffect(() => {
    if (mailFormat.test(email)) {
      console.log("accepted");
    } else {
      console.log("rejected");
    }
  }, [email]);

  useEffect(() => {
    if (passFormat.test(password)) {
      console.log("accepted");
    } else {
      console.log("rejected");
    }
  }, [password]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (loginClick) {
      setLoginClick(false);
      if (wrongPassword || wrongUsername) {
        setClose(false);
      }
    }
  });
  return (
    <>
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="http://fortawesome.github.io/Font-Awesome/assets/font-awesome/css/font-awesome.css"
          />
        </Head>
        <div className="conatiner-img">
          <Image src={pic} height={620} width={560} alt="" />
        </div>
        <div className="small-img">
          <Image src={pic1} height={100} alt="" width={130} />
        </div>
        <div>
          <div>
            <div style={{ opacity: close ? "0" : "1" }}>
              <div
                className={styles.errorBox}
                style={{ opacity: wrongPassword ? "1" : "0" }}
              >
                <div className={styles.rectSide}></div>
                <div className={styles.imgVector}>
                  <Image
                    src={pic2}
                    height={35}
                    width={35}
                    alt=""
                    onClick={() => {
                      setClose(true);
                    }}
                  />
                </div>

                <div>
                  <p className={styles.errorText}>
                    This password is not correct. Try again
                    <span> or request a new password if you forgot.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.containerLogin}>Log In</div>
            <form>
              <div className={styles.greyEmail1}>Email</div>
              <input
                className={styles.input0}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={styles.rect01}></div>
              <div className={styles.greyPass1}>Password</div>
              <input
                className={styles.input01}
                type={passwordShown ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="email"
              />
              <i
                className={`fa ${
                  passwordShown ? "fa-eye-slash" : "fa-eye"
                } password-icon`}
                onClick={togglePassword}
              />
              <div className={styles.rect012}></div>
              <p className={styles.hint}>
                Minimum 8 characters with at least 1 number
              </p>
              <button
                className={styles.invalidSubmit}
                onClick={handleLogin}
                disabled={!email}
              >
                <p className={styles.login}>Log In</p>
              </button>
              <p className={styles.endWords}>
                By signing in you agree to Health
                <span className={styles.clr}> Terms of service</span> and
                <span className={styles.clr}> Privacy policy.</span>
              </p>
              <p
                className={styles.fgp}
                onClick={() => {
                  router.push("/forgot-password");
                }}
              >
                Forgot your password
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
