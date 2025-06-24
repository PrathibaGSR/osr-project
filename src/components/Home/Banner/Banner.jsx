import React from "react";
import bnrStyle from "./banner.module.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import bnr1 from "./assets/bnr1.webp";
import bnr2 from "./assets/bnr2.webp";
import bnr3 from "./assets/bnr3.webp";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Banner() {
    const router = useRouter();

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrow: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: false
                }
            }
        ]
    };

    const scrollToProduct = (e) => {
        e.preventDefault();
        const productEl = document.getElementById('product');
        if (productEl) {
            const yOffset = -100; // adjust based on your navbar height
            const y = productEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        } else {
            router.push("/#product"); // fallback
        }
    };

    return (
        <>
            <section className={bnrStyle.bnrSec}>
                <div className={bnrStyle.slideBnr}>
                    <Slider {...settings}>
                        <Image width={1440} height={675} src={bnr1} className="img-fluid" alt="Tools Engineered for Performance" title="Tools Engineered for Performance" />
                        <Image width={1440} height={675} src={bnr2} className="img-fluid" alt="Tools Engineered for Performance" title="Tools Engineered for Performance" />
                        <Image width={1440} height={675} src={bnr3} className="img-fluid" alt="Tools Engineered for Performance" title="Tools Engineered for Performance" />
                    </Slider>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={bnrStyle.bnrCntDv}>
                                <h1 className={bnrStyle.bnrSecTlt}>Tools Engineered for Performance</h1>
                                <p className={bnrStyle.bnrSecCnt}>Explore our range of CNC-optimized cutting tools built for exactness and endurance</p>
                                <div className={bnrStyle.bnrBtnDiv}>
                                    <div className={bnrStyle.btnMn}>
                                        <Link href="/#product" onClick={scrollToProduct} className={bnrStyle.bnrBtn}>View Our Tools</Link>
                                    </div>
                                    <div className={bnrStyle.btnMn}>
                                        <Link target="_blank" href="/catalogue.pdf" className={bnrStyle.bnrBtn}>Download Catalogue</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
