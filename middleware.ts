import { NextResponse } from "next/server";

export default function middleware(req: any) {
  let verify = req.cookies.get("loggedin");
  let url = req.url;

  // if (!verify && url.includes("/securedPages")) {
  //   return NextResponse.redirect("http://localhost:3000/");
  // }

  // if (verify && url === "http://localhost:3000/") {
  //   return NextResponse.redirect(
  //     "http://localhost:3000/securedPages/adminusers"
  //   );
  // }

  if (!verify && url.includes("/securedPages")) {
    return NextResponse.redirect(
      "https://rampup2-jois-proj.herokuapp.com/loginpage"
    );
  }

  if (verify && url === "https://rampup2-jois-proj.herokuapp.com/") {
    return NextResponse.redirect(
      "https://rampup2-jois-proj.herokuapp.com/adminusers"
    );
  }
}
