"use client";

import Link from "next/link";
import { Menu, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LogoImg from "@/assets/Logo.svg";
import Image from "next/image";
import { Sms } from "iconsax-reactjs";
import { useEffect, useState } from "react";
import clsx from "clsx";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0A0712]/70 backdrop-blur-md shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Left - Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight">
          <Image src={LogoImg} height={40} width={40} alt="Logo" />
        </Link>

        {/* Center - Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition hover:text-primary-100"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Desktop Hire Me */}
          <Button className="hidden md:inline-flex rounded-full bg-linear-to-r from-[#DC49A6] to-[#8746EB]">
            <Sms />
            Hire Me
          </Button>

          {/* Mobile Hire Me (Icon Only) */}
          <Button size="icon" className="md:hidden rounded-full">
            <Briefcase className="h-4 w-4" />
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full sm:w-80">
              <div className="flex flex-col items-center justify-center h-full gap-8 text-lg font-medium">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover:text-primary-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
