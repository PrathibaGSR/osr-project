import React from "react";
import foot from "./footer.module.scss"
import Image from "next/image";
import iso from "./assets/iso.svg";
import ZeroLogo from "./assets/logo.svg";
import fb from "./assets/fb.svg";
import twitter from "./assets/twitter.svg";
import insta from "./assets/insta.svg";


export default function Footer() {
    return (
        <>
            <section className={foot.footSec}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className={foot.footLft}>
                                <p className={foot.footSecLeftP}>Copyright © 2025  &nbsp;&nbsp;|</p>
                                <div className="d-flex align-items-center" >
                                    <Image src={iso} className="img-fluid me-2" alt="iso" title="iso" loading="lazy" />
                                    <p className={foot.footSecLeftP}>ISO 9001:2015 Certified</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-2 order-lg-0 order-last mt-lg-0 mt-4">
                            <div>
                                <Image src={ZeroLogo} className="img-fluid" alt="logo" title="logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-5  mt-lg-0 mt-4">
                            <div className={foot.footRght}>
                                <div className={`${foot.footSecRghtP}`}><b>Follow Us</b></div>
                                <div className={foot.footSecRghtP}>
                                    <Image src={fb} className="img-fluid" alt="logo" title="logo" loading="lazy" />
                                    Facebook
                                </div>
                                <div className={foot.footSecRghtP}>
                                    <Image src={twitter} className="img-fluid" alt="logo" title="logo" loading="lazy" />
                                    Twitter
                                </div>
                                <div className={foot.footSecRghtP}>
                                    <Image src={insta} className="img-fluid" alt="logo" title="logo" loading="lazy" />
                                    Instagram
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
