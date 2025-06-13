import React from "react";
import bnrStyle from "./banner.module.scss"
import Link from "next/link";
import Image from "next/image";
import bnr from "./assets/banner.webp";

export default function Banner() {
  return(
    <>
       <section className={bnrStyle.bnrSec}>
        <div>
        <Image src={bnr} className="img-fluid" alt="bnr" title="bnr" width={1440} height={389} />
        </div>
        <div className="container">
            <div className={bnrStyle.bnrPos}>
                <h1 className={bnrStyle.bnrSecTlt}>Customized Specialized Tooling</h1>
                <div className={bnrStyle.disDiv}>
                    <Link href={"/"}>Home</Link>
                    <span>Products</span>
                </div>
            </div>
        </div>
       </section>
    </>
  )
}
