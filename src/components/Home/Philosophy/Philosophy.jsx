import React from "react";
import philStyle from "./philosophy.module.scss"
import Image from "next/image";
import img from "./assets/img.webp";
import icon from "./assets/icon.svg";


export default function Philosophy() {
    return (
        <>
            <section className={philStyle.philSec}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <Image src={icon} className="img-fluid" alt="Our Philosophy" title="Our Philosophy" loading="lazy" width={129} height={103.68} />
                            <h2 className={philStyle.philSecTlt}>Our Philosophy</h2>
                            <p className={philStyle.philSecSub}>manufacture with precision, deliver with trust.</p>
                        </div>
                        <div className="col-lg-8">
                            <div className="text-lg-end">
                                <Image src={img} className="img-fluid" alt="Our Philosophy" title="Our Philosophy" loading="lazy" width={817} height={614.42} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
