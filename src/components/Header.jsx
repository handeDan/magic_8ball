import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <Link to="/">
        <p className="text-xl font-semibold">MAGIC 8BALL</p>
      </Link>

      <a href="/usage">usage</a>
    </div>
  );
}

export default Header;
