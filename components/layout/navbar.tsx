"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const links = [["Work", "#work"], ["Thinking", "#thinking"], ["Experience", "#experience"]];
export default function Navbar() { const [open, setOpen] = useState(false); return <nav className="site-nav"><a className="wordmark" href="#home">DA<span>•</span></a><div className="nav-links">{links.map(([name, href]) => <a key={name} href={href}>{name}</a>)}<a className="nav-contact" href="#contact">Let&apos;s talk <span>↗</span></a></div><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>{open && <motion.div initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} className="mobile-menu">{links.map(([name,href])=><a onClick={()=>setOpen(false)} key={name} href={href}>{name}</a>)}<a onClick={()=>setOpen(false)} href="#contact">Let&apos;s talk ↗</a></motion.div>}</nav>; }
