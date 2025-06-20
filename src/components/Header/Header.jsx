import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import headStyle from './header.module.scss';
import logo from './assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

let Collapse; // Global scope...

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 200);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                setTimeout(() => {
                    const yOffset = -100;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }, 10);
            }
        }
    }, [router.asPath]);

    // 🛠 Import Collapse from Bootstrap module
    useEffect(() => {
        import('bootstrap/js/dist/collapse').then((mod) => {
            Collapse = mod.default;
        });
    }, []);

    const handleLinkClick = () => {
        setTimeout(() => {
            const navbarCollapse = document.getElementById('navbarSupportedContent');
            if (navbarCollapse && navbarCollapse.classList.contains('show') && Collapse) {
                const collapse = new Collapse(navbarCollapse, { toggle: true });
                collapse.hide();
            }
        }, 200);
    };

    const isActive = (path) => router.asPath === path;

    return (
        <section className={`${headStyle.headSec} ${scrolled ? headStyle.scrolled : ''}`}>
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
                                <Link className={`nav-link ${isActive('/') ? headStyle.active : ''}`} href="/" onClick={handleLinkClick}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive('/#product') ? headStyle.active : ''}`} href="/#product" onClick={handleLinkClick}>
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive('/#about') ? headStyle.active : ''}`} href="/#about" onClick={handleLinkClick}>
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${isActive('/contact-us') ? headStyle.active : ''}`}
                                    href="/contact-us"
                                    target="_blank"
                                    onClick={handleLinkClick}
                                >
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
