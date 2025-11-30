"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClass?: string;
}

const NavLink = ({ href, children, className = "", activeClass = "" }: Props) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClass : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
