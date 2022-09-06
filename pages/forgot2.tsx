import Head from "next/head";
import Link from "next/link";

const forgot2 = () => {
  return (
    <div>
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div>
          <Link href="/forgot-password">
            <span className="BackButton"> Back</span>
          </Link>

          <div className="ForgotText">Check your email</div>
          <div className="ForgotText1">
            We have sent password reset link to <br />
            <strong>bingwen@hotmail.com</strong>
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
      </main>
    </div>
  );
};

export default forgot2;
