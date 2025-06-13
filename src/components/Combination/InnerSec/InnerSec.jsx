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
            <Link href={"/contact-us"} className="text-decoration-none">
              <Image src={order} className="img-fluid" loading="lazy" alt="Order" title="Order" width={24} height={24} />
              <span>Order</span>
            </Link>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className={inrStyle.inrLst}>
                <Image src={img1} className="img-fluid" alt="Combination Tools" title="Combination Tools" loading="lazy" width={340} height={298} />
                <div className={inrStyle.minHight}>
                  <h2 className={inrStyle.inrLstTlt}>Combination Tools</h2>
                  <p className={inrStyle.inrLstCnt}>Hybrid tools that integrate drilling and milling functions for multi-step machining without tool change—optimizing time and precision</p>

                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>Applications</p>
                    <ul>
                      <li>Complex profile machining in a single setup</li>
                      <li>Perfect for reducing tool changes in automated CNCs</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>DIMENSIONS / SPECS:</p>
                    <ul>
                      <li>Diameter Range: Ø2 mm to Ø12 mm</li>
                      <li>Operations: Drilling, chamfering, slotting</li>
                      <li>Material: Solid Carbide</li>
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
