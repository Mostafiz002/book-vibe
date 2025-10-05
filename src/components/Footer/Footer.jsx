import { BookOpenText } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="border-t  border-gray-300">
      <footer className="max-w-[1350px] mx-auto  footer sm:footer-horizontal text-base-content p-10">
        <aside>
          <Link
            to="/"
            className="text-xl flex items-center justify-start gap-1 font-semibold text-purple-700"
          >
            <BookOpenText className="mt-1" /> Book Vibe
          </Link>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
