import React from "react";
import inrStyle from "./inr.module.scss"
import Link from "next/link";
import Image from "next/image";
import order from "./assets/order.svg";
import img1 from "./assets/img1.webp";


export default function InnerSec() {
  return (
    <>
      <section className={inrStyle.inrSec}>
        <div className="container">
          <div className="d-flex justify-content-between">
            <Link href={"/"} className={inrStyle.inrPage}> {"< Home"}</Link>
            <div>
              <Image src={order} className="img-fluid" loading="lazy" alt="Order" title="Order" width={24} height={24} />
              <span>Order</span>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className={inrStyle.inrLst}>
                <Image src={img1} className="img-fluid" alt="Tool Holders" title="Tool Holders" loading="lazy" width={340} height={298} />
                <div className={inrStyle.minHight}>
                  <h2 className={inrStyle.inrLstTlt}>Tool Holders</h2>
                  <p className={inrStyle.inrLstCnt}>Precision-engineered tool holders ensure secure and accurate clamping of cutting tools, enhancing machining performance and extending tool life across various CNC applications.</p>

                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>Applications</p>
                    <ul>
                      <li>Suitable for milling, drilling, and turning operations</li>
                      <li>Compatible with CNC machines in automotive, aerospace, and general manufacturing</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>DIMENSIONS / SPECS:</p>
                    <ul>
                      <li>Types: BT30, BT40, BT50, HSK63, HSK100</li>
                      <li>Clamping Range: Ø3 mm to Ø32 mm</li>
                      <li>Balance Grade: G2.5 at 25,000 RPM</li>
                      <li>Material: High-grade alloy steel with heat treatment</li>
                    </ul>
                  </div>
                </div>
                <div className={inrStyle.btn}>Contact Us</div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}
