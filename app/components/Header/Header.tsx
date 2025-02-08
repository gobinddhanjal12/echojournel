"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={`p-4 flex gap-4 items-center justify-between ${styles.header}`}>

            <button
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            <h2 className="text-lg font-bold mr-auto">EchoJournal</h2>

            {/* Right - Navbar (Hidden on Mobile, Visible on Large Screens) */}
            <nav className="hidden md:flex space-x-6">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>
            </nav>

            {/* Mobile Drawer Menu */}
            {isOpen && (
                <div className="absolute top-0 left-0 w-2/3 h-screen bg-gray-800 text-white p-5 flex flex-col space-y-4 md:hidden">
                    <button className="self-end" onClick={() => setIsOpen(false)}>
                        <X size={30} />
                    </button>
                    <Link href="/" className="text-lg" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" className="text-lg" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/contact" className="text-lg" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}

        </header>
    );
}
