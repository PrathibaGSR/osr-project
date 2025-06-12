import React,{useState} from "react";
import inrStyle from "./inr.module.scss"
import Link from "next/link";
import Image from "next/image";
import order from "./assets/order.svg";
import img1 from "./assets/img1.webp";

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
          <div className="row">
            <div className="col-lg-4">
              <div className={inrStyle.inrLst}>
                <Image src={img1} className="img-fluid" alt="PCBN Inserts" title="PCBN Inserts" loading="lazy" width={340} height={298} />
                <div className={inrStyle.minHight}>
                  <h2 className={inrStyle.inrLstTlt}>PCBN Inserts</h2>
                  <p className={inrStyle.inrLstCnt}>Designed for the efficient machining of hard ferrous materials, PCBN tools provide excellent thermal stability and wear resistance, making them suitable for high-speed and dry cutting operations.</p>

                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>Applications</p>
                    <ul>
                      <li>Machining hardened steels, cast irons, and superalloys</li>
                      <li>Commonly used in automotive, aerospace, and heavy machinery sectors</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>DIMENSIONS / SPECS:</p>
                    <ul>
                      <li>Insert Shapes: Round, square, triangular, and custom profiles</li>
                      <li>Cutting Edge Radius: 0.2 mm to 1.2 mm</li>
                      <li>Tool Types: Turning inserts, boring bars, grooving tools</li>
                      <li>Material: PCBN with various binder compositions</li>
                    </ul>
                  </div>
                </div>
                <div className={inrStyle.btn} onClick={() => handleShow([pop1])}>View Details</div>
              </div>
            </div>
          
          </div>
        </div>
      </section>
      <ProductModal show={showModal} onHide={handleClose} image={modalImage} />
    </>
  )
}
