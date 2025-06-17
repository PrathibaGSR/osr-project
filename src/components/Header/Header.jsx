import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import headStyle from "./header.module.scss";
import logo from "./assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 200);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Scroll to hash on route change with offset
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                setTimeout(() => {
                    const yOffset = -100;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }, 10);
            }
        }
    }, [router.asPath]);

    // Collapse the menu manually on link click (mobile)
    const handleLinkClick = () => {
        const navbarCollapse = document.getElementById("navbarSupportedContent");
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
            const collapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: true });
            collapse.hide();
        }
    };

    const isActive = (path) => router.asPath === path;

    return (
        <section className={`${headStyle.headSec} ${scrolled ? headStyle.scrolled : ""}`}>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" href="/">
                        <Image src={logo} className="img-fluid" alt="logo" title="logo" width={134} height={119} />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/") ? headStyle.active : ""}`} href="/" onClick={handleLinkClick}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/#product") ? headStyle.active : ""}`} href="/#product" onClick={handleLinkClick}>
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/#about") ? headStyle.active : ""}`} href="/#about" onClick={handleLinkClick}>
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/contact-us") ? headStyle.active : ""}`} href="/contact-us" target="_blank" onClick={handleLinkClick}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    );
}
