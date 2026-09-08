"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [["Work", "#work"], ["Thinking", "#thinking"], ["Experience", "#experience"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return <nav className="site-nav" aria-label="Main navigation">
    <a className="wordmark" href="#home" aria-label="David Agbugba home" onClick={() => setOpen(false)}>DA<span>•</span></a>
    <div className="nav-links">{links.map(([name, href]) => <a key={name} href={href}>{name}</a>)}<a className="nav-contact" href="#contact">Let&apos;s talk <span>↗</span></a></div>
    <button ref={buttonRef} className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
    {open && <div id="mobile-navigation" className="mobile-menu">{links.map(([name, href]) => <a onClick={() => setOpen(false)} key={name} href={href}>{name}</a>)}<a onClick={() => setOpen(false)} href="#contact">Let&apos;s talk ↗</a></div>}
  </nav>;
}
