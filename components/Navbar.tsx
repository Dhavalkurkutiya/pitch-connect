import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut, Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-black hover:text-[rgb(238,43,105)] transition-colors">
            Explore Startups
          </Link>
          <Link href="/blog" className="text-black hover:text-[rgb(238,43,105)] transition-colors">
            Blog
          </Link>
          <Link href="/faq" className="text-black hover:text-[rgb(238,43,105)] transition-colors">
            FAQ
          </Link>
          <Link href="/about" className="text-black hover:text-[rgb(238,43,105)] transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create" className="hover:text-[rgb(238,43,105)] transition-colors">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="hover:text-[rgb(238,43,105)] transition-colors">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <>
              {/* Show menu items on mobile before login button */}
              <div className="md:hidden flex items-center">
                <Link href="/startup/create" className="mr-4 hover:text-[rgb(238,43,105)] transition-colors">
                  <BadgePlus className="size-6" />
                </Link>
              </div>
              
              <form
                action={async () => {
                  "use server";

                  await signIn("github");
                }}
              >
                <button type="submit" className="bg-white border-[3px] border-black py-1 px-4 rounded-full hover:text-[rgb(238,43,105)] hover:border-[rgb(238,43,105)] transition-colors">
                  Login
                </button>
              </form>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Navigation Menu (shown via dropdown) */}
      <div className="md:hidden mt-2">
        <div className="overflow-x-auto scrollbar-thin relative pb-1">
          <div className="flex gap-2 pb-2 px-1">
            <Link href="/startups" className="text-sm whitespace-nowrap bg-white text-gray-700 border border-gray-300 hover:border-[rgb(238,43,105)] hover:text-[rgb(238,43,105)] px-4 py-2 rounded-lg transition-colors">
              Startups
            </Link>
            <Link href="/blog" className="text-sm whitespace-nowrap bg-white text-gray-700 border border-gray-300 hover:border-[rgb(238,43,105)] hover:text-[rgb(238,43,105)] px-4 py-2 rounded-lg transition-colors">
              Blog
            </Link>
            <Link href="/faq" className="text-sm whitespace-nowrap bg-white text-gray-700 border border-gray-300 hover:border-[rgb(238,43,105)] hover:text-[rgb(238,43,105)] px-4 py-2 rounded-lg transition-colors">
              FAQ
            </Link>
            <Link href="/about" className="text-sm whitespace-nowrap bg-white text-gray-700 border border-gray-300 hover:border-[rgb(238,43,105)] hover:text-[rgb(238,43,105)] px-4 py-2 rounded-lg transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
