/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="py-3 px-5 ">
      <nav className="flex justify-between items-center font-bold">
        <Link href="#">
          <img src="logo.png" alt="logo" width={144} height={30} />
        </Link>
        <div>
          {session && session?.user ? (
            <div className="flex items-center gap-4">
              {/* Create Link */}
              <Link href="#" className="">Create</Link>

              {/* Login Form */}
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="">
                  Logout
                </button>
              </form>

              {/* Avatar */}
              <img
                src={session.user.image || "/default-avatar.png"}
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full"
              />
            </div>
          ) : (
            // Login Form
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit" className="">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
