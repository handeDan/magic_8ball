import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <Link to="/">
        <p className="text-xl font-semibold hover:text-indigo-800 hover:font-bold">
          MAGIC 8BALL
        </p>
      </Link>

      <a href="/usage" className="hover:text-indigo-800 hover:font-bold">
        usage
      </a>
    </div>
  );
}

export default Header;
