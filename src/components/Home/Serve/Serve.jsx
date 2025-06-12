import React from "react";
import servStyle from "./serve.module.scss"
import Image from "next/image";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import icon4 from "./assets/icon4.svg";


export default function Serve() {
    return (
        <>
            <section className={servStyle.servSec}>
                <div className="container">
                    <div>
                        <h2 className={servStyle.servSecTlt}>Industries We Serve</h2>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className={servStyle.servLst}>
                                    <Image src={icon1} className="img-fluid" alt="Heavy Engg. & Machiner" title="Heavy Engg. & Machiner" loading="lazy" width={57.78} height={57.78} />
                                    <p className={servStyle.servLstTlt}>Heavy Engg. & Machinery</p>
                                    <p className={servStyle.servLstCnt}>Components designed for impact resistance, high-load endurance, and continuous operations</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className={servStyle.servLst}>
                                    <Image src={icon2} className="img-fluid" alt="Automotive & Transport" title="Automotive & Transport" loading="lazy" width={57.78} height={57.78} />
                                    <p className={servStyle.servLstTlt}>Automotive & Transport</p>
                                    <p className={servStyle.servLstCnt}>Precision tools and fasteners that enhance mobility solutions and assembly-line efficiency.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className={servStyle.servLst}>
                                    <Image src={icon3} className="img-fluid" alt="Electrical & Electronics" title="Electrical & Electronics" loading="lazy" width={57.78} height={57.78} />
                                    <p className={servStyle.servLstTlt}>Electrical & Electronics</p>
                                    <p className={servStyle.servLstCnt}>Ultra-fine, high-tolerance tools suited for modern electronic assemblies and PCB machining</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className={servStyle.servLst}>
                                    <Image src={icon4} className="img-fluid" alt="Furniture Manufacturing" title="Furniture Manufacturing" loading="lazy" width={57.78} height={57.78} />
                                    <p className={servStyle.servLstTlt}>Furniture Manufacturing</p>
                                    <p className={servStyle.servLstCnt}>High-speed cutting and drilling solutions optimized for metal and modular furniture systems</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
