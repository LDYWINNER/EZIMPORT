import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
  id?: number;
}

export default function getSession() {
  return getIronSession<SessionContent>(cookies(), {
    cookieName: "ezimport-auth-cookieq",
    password: process.env.NEXT_PUBLIC_COOKIE_PASSWORD!,
  });
}
