import React from "react";
import prdStyle from "./product.module.scss"
import Image from "next/image";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import img7 from "./assets/img7.png";
import img8 from "./assets/img8.png";
import Link from "next/link";


export default function Product() {
    return (
        <>
            <section className={prdStyle.prodSec} id="product">
                <div className="container">
                    <div>
                        <h2 className={prdStyle.prodSecTlt}>Our Product Range</h2>
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className={prdStyle.prodLst}>
                                    <div className={prdStyle.prodLstBg}>
                                        <Image src={img1} className="img-fluid" alt="Drilling" title="Drilling" loading="lazy" width={297} height={268} />
                                    </div>

                                    <div className="p-lg-3 p-1">
                                        <p className={prdStyle.prodLstTlt}>Drilling</p>
                                        <div className="mt-3">
                                            <Link href={"/drilling"} className={prdStyle.prodLstBtn}>View Details</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className={prdStyle.prodLst}>
                                    <div className={prdStyle.prodLstBg}>
                                        <Image src={img2} className="img-fluid" alt="Milling" title="Milling" loading="lazy" width={297} height={268} />
                                    </div>

                                    <div className="p-lg-3 p-1">
                                        <p className={prdStyle.prodLstTlt}>Milling</p>
                                        <div className="mt-3">
                                            <Link href={"/milling"} className={prdStyle.prodLstBtn}>View Details</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className={prdStyle.prodLst}>
                                    <div className={prdStyle.prodLstBg}>
                                        <Image src={img3} className="img-fluid" alt="Reaming" title="Reaming" loading="lazy" width={297} height={268} />
                                    </div>

                                    <div className="p-lg-3 p-1">
                                        <p className={prdStyle.prodLstTlt}>Reaming</p>
                                        <div className="mt-3">
                                            <Link href={"/reaming"} className={prdStyle.prodLstBtn}>View Details</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className={prdStyle.prodLst}>
                                    <div className={prdStyle.prodLstBg}>
                                        <Image src={img4} className="img-fluid" alt="Combination Tools" title="Combination Tools" loading="lazy" width={297} height={268} />
                                    </div>

                                    <div className="p-lg-3 p-1">
                                        <p className={prdStyle.prodLstTlt}>Combination Tools</p>
                                        <div className="mt-3">
                                            <Link href={"/combination-tools"} className={prdStyle.prodLstBtn}>View Details</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className={prdStyle.prodLst}>
                                    <div className={prdStyle.prodLstBg}>
                                        <Image src={img5} className="img-fluid" alt="PCD Cutting Tools" title="PCD Cutting Tools" loading="lazy" width={297} height={268} />
                                    </div>

                                    <div className="p-lg-3 p-1">
                                        <p className={prdStyle.prodLstTlt}>PCD Cutting Tools</p>
                                        <div className="mt-3">
                                            <Link href={"/pcd-cutting-tools"} className={prdStyle.prodLstBtn}>View Details</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className={prdStyle.prodLst}>
                                    <div className={prdStyle.prodLstBg}>
                                        <Image src={img6} className="img-fluid" alt="PCBN Cutting Tools" title="PCBN Cutting Tools" loading="lazy" width={297} height={268} />
                                    </div>

                                    <div className="p-lg-3 p-1">
                                        <p className={prdStyle.prodLstTlt}>PCBN Cutting Tools</p>
                                        <div className="mt-3">
                                            <Link href={"/pcbn-cutting-tools"} className={prdStyle.prodLstBtn}>View Details</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className={prdStyle.prodLst}>
                                    <div className={prdStyle.prodLstBg}>
                                        <Image src={img7} className="img-fluid" alt="Tool Holders" title="Tool Holders" loading="lazy" width={297} height={268} />
                                    </div>

                                    <div className="p-lg-3 p-1">
                                        <p className={prdStyle.prodLstTlt}>Tool Holders</p>
                                        <div className="mt-3">
                                            <Link href={"/tool-holders"} className={prdStyle.prodLstBtn}>View Details</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className={prdStyle.prodLst}>
                                    <div className={prdStyle.prodLstBg}>
                                        <Image src={img8} className="img-fluid" alt="Specialized Customized Tooling" title="Specialized Customized Tooling" loading="lazy" width={297} height={268} />
                                    </div>

                                    <div className="p-lg-3 p-1">
                                        <p className={prdStyle.prodLstTlt}>Specialized Customized Tooling</p>
                                        <div className="mt-3">
                                            <Link href={"/customized-specialized-tooling"} className={prdStyle.prodLstBtn}>View Details</Link>
                                        </div>
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
