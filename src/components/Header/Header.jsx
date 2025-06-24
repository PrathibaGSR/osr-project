import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import headStyle from './header.module.scss';
import logo from './assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false); // NEW
    const router = useRouter();

    // Scroll effect & active section
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 200);

            const sections = ['product', 'about'];
            for (let id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(id);
                        return;
                    }
                }
            }

            setActiveSection('home');
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Set active section on route change
    useEffect(() => {
        const [path, hash] = router.asPath.split('#');
        if (path === '/' && !hash) {
            setActiveSection('home');
        } else if (hash === 'product') {
            setActiveSection('product');
        } else if (hash === 'about') {
            setActiveSection('about');
        } else if (path === '/contact-us') {
            setActiveSection('contact-us');
        } else {
            setActiveSection('');
        }
    }, [router.asPath]);

    // Smooth scroll when URL hash changes
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                setTimeout(() => {
                    const yOffset = -100;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }, 300);
            }
        }
    }, [router.asPath]);

    // Toggle menu manually
    const toggleMenu = () => {
        const navbarCollapse = document.getElementById('navbarSupportedContent');
        if (navbarCollapse) {
            navbarCollapse.classList.toggle('show');
            setMenuOpen(navbarCollapse.classList.contains('show'));
        }
    };

    // Handle menu link click
    const handleLinkClick = (e, href) => {
        e.preventDefault();

        const navbarCollapse = document.getElementById('navbarSupportedContent');
        if (navbarCollapse?.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
            setMenuOpen(false);
        }

        const currentPath = router.asPath.split('#')[0];
        const [hrefPath, hrefHash] = href.split('#');

        if (currentPath !== hrefPath) {
            router.push(href);
        } else {
            setTimeout(() => {
                if (hrefHash) {
                    const el = document.getElementById(hrefHash);
                    if (el) {
                        const yOffset = -100;
                        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                        setActiveSection(hrefHash);
                    }
                } else {
                    setActiveSection('home');
                }
            }, 300);
        }
    };

    const isActive = (section) => activeSection === section;

    return (
        <section className={`${headStyle.headSec} ${scrolled ? headStyle.scrolled : ''}`}>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" href="/" onClick={(e) => handleLinkClick(e, '/')}>
                        <Image
                            src={logo}
                            className="img-fluid"
                            alt="logo"
                            title="logo"
                            width={134}
                            height={119}
                        />
                    </Link>

                    {/* TOGGLE BUTTON */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        {menuOpen ? (
                            <span style={{ fontSize: '1.5rem' }}>&times;</span> // Close icon ✖
                        ) : (
                            <span className="navbar-toggler-icon"></span> // Default icon ☰
                        )}
                    </button>

                    {/* NAV LINKS */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${isActive('home') ? headStyle.active : ''}`}
                                    href="/"
                                    onClick={(e) => handleLinkClick(e, '/')}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${isActive('product') ? headStyle.active : ''}`}
                                    href="/#product"
                                    onClick={(e) => handleLinkClick(e, '/#product')}
                                >
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${isActive('about') ? headStyle.active : ''}`}
                                    href="/#about"
                                    onClick={(e) => handleLinkClick(e, '/#about')}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${isActive('contact-us') ? headStyle.active : ''}`}
                                    href="/contact-us"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => handleLinkClick(e, '/contact-us')}
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
