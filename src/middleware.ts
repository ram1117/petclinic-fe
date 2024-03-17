import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const middleware = (request: NextRequest, response: NextResponse) => {
  const isLoggedin = cookies().get("access_token");

  if (!isLoggedin) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
};

export const config = {
  matcher: ["/account/:path*", "/appointments/:path*"],
};
