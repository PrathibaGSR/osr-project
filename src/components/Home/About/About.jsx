import React from "react";
import abtStyle from "./about.module.scss"
import Image from "next/image";
import img from "./assets/img.webp";


export default function About() {
    return (
        <>
            <section className={abtStyle.abtSec} id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div>
                                <Image src={img} className="img-fluid" alt="About OSR Industries" title="About OSR Industries" loading="lazy" width={589} height={506} />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-0 order-first">
                            <h2 className={abtStyle.abtSecTlt}>About OSR Industries</h2>
                            <p className={abtStyle.abtSecSub}>Trusted. Engineered. Delivered.</p>
                            <p className={abtStyle.abtSecCnt}>At OSR Industries, we are driven by a singular vision: to enable industries with tools that deliver measurable precision. We specialize in high-performance drills, fasteners, reamers, and customized cutting solutions engineered using state-of-the-art CNC and inspection machinery.</p>
                            <p className={abtStyle.abtSecCnt}>What sets us apart is our investment in top-tier manufacturing infrastructure—from high-tolerance CNC machining centres to multi-axis tool grinders and automated inspection systems. These capabilities empower us to consistently meet the demands of sectors where precision is not optional—its critical.</p>
                            <p className={abtStyle.abtSecCnt}>Whether enabling micro-machining in electronics or creating heavy-load components for transport, we deliver not just tools—but trust, accuracy, and lasting performance.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
