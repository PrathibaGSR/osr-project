import React,{useState} from "react";
import inrStyle from "./inr.module.scss"
import Link from "next/link";
import Image from "next/image";
import order from "./assets/order.svg";

import ProductModal from "@/components/ProductModel/ProductModel";
import pop1 from "./assets/pop1.webp";

export default function InnerSec() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState([]);

  const handleShow = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setModalImage(null);
  };
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
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className={inrStyle.inrLst}>
                <div className={inrStyle.minHight}>
                  <h2 className={inrStyle.inrLstTlt}>Customized Specialized Tooling</h2>
                  <p className={inrStyle.inrLstCnt}>Purpose-built cutting tools engineered to match your application needs—no matter the complexity. Ideal for non-standard operations, multi-step machining, or legacy part replication</p>

                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>Applications</p>
                    <ul>
                      <li>Tailored solutions for challenging geometries and materials</li>
                      <li>Optimized tooling for die-mold, aerospace, and medical components</li>
                      <li>High-precision performance in custom machining environments</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>DIMENSIONS / SPECS:</p>
                    <ul>
                      <li>Geometry: As per customer component or drawing</li>
                      <li>Coatings & Grades: Application-specific (PVD, TiAlN, etc.)</li>
                      <li>Material Options: Carbide / HSS / Hybrid</li>
                      <li>Delivery: Design consultation to final dispatch in rapid lead times</li>
                    </ul>
                  </div>
                  <div className={inrStyle.btn} onClick={() => handleShow([pop1])}>View Details</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={inrStyle.inrRqur}>
                <p className={inrStyle.inrRqurTlt}>Have a unique requirement?</p>
                <p className={inrStyle.inrRqurCnt}>Our team collaborates from concept to completion</p>
                <div className="mt-4">
                  <Link href={"/contact-us"}>Contact Us</Link>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <ProductModal show={showModal} onHide={handleClose} image={modalImage} />
    </>
  )
}
