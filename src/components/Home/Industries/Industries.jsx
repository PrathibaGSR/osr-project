import React from "react";
import indusStyle from "./industries.module.scss"
import Image from "next/image";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import icon4 from "./assets/icon4.svg";


export default function Industries() {
    return (
        <>
            <section className={indusStyle.indusSec}>
                <div className="container">
                    <div>
                        <h2 className={indusStyle.indusSecTlt}>Why OSR Industries?</h2>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className={indusStyle.indusLst}>
                                    <div className={indusStyle.indusLstImg}>
                                        <Image src={icon1} className="img-fluid" alt="Custom Manufacturing" title="Custom Manufacturing" loading="lazy" width={88} height={88} />
                                    </div>
                                    <div className={indusStyle.indusLstMn}>
                                        <p className={indusStyle.indusLstTlt}>Custom Manufacturing</p>
                                        <p className={indusStyle.indusLstCnt}>Built-to-spec solutions that match unique dimensional, material, and performance needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={indusStyle.indusLst}>
                                    <div className={indusStyle.indusLstImg}>
                                        <Image src={icon2} className="img-fluid" alt="Quality Assured" title="Quality Assured" loading="lazy" width={88} height={88} />
                                    </div>
                                    <div className={indusStyle.indusLstMn}>
                                        <p className={indusStyle.indusLstTlt}>Quality Assured</p>
                                        <p className={indusStyle.indusLstCnt}>Every item undergoes strict inspection protocols, with optional material and batch traceability</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={indusStyle.indusLst}>
                                    <div className={indusStyle.indusLstImg}>
                                        <Image src={icon3} className="img-fluid" alt="Fast Turnaround" title="Fast Turnaround" loading="lazy" width={88} height={88} />
                                    </div>
                                    <div className={indusStyle.indusLstMn}>
                                        <p className={indusStyle.indusLstTlt}>Fast Turnaround</p>
                                        <p className={indusStyle.indusLstCnt}>Ready stock for standard items and short-cycle custom production capabilities</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={indusStyle.indusLst}>
                                    <div className={indusStyle.indusLstImg}>
                                        <Image src={icon4} className="img-fluid" alt="Trusted Across Sectors" title="Trusted Across Sectors" loading="lazy" width={75} height={75} />
                                    </div>
                                    <div className={indusStyle.indusLstMn}>
                                        <p className={indusStyle.indusLstTlt}>Trusted Across Sectors</p>
                                        <p className={indusStyle.indusLstCnt}>Serving automotive, electrical, construction, heavy engineering, and OEM industries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
