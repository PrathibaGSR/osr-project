import React,{useState} from "react";
import inrStyle from "./inr.module.scss"
import Link from "next/link";
import Image from "next/image";
import order from "./assets/order.svg";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.webp";

import ProductModal from "@/components/ProductModel/ProductModel";
import pop1 from "./assets/pop1.webp";
import pop2 from "./assets/pop2.webp";



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
                <Image src={img1} className="img-fluid" alt="Plain Reamers" title="Plain Reamers" loading="lazy" width={340} height={298} />
                <div className={inrStyle.minHight}>
                  <h2 className={inrStyle.inrLstTlt}>Plain Reamers</h2>
                  <p className={inrStyle.inrLstCnt}>Precision ground reamers for tight tolerance hole sizing and superior surface finishes. Ideal for finishing pre-drilled holes</p>

                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>Applications</p>
                    <ul>
                      <li>Achieving high accuracy in hole diameters</li>
                      <li>Used in automotive and precision machinery</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>DIMENSIONS / SPECS:</p>
                    <ul>
                      <li>Diameter Range: Ø2mm to Ø20mm</li>
                      <li>Type: Straight / Spiral Flute</li>
                      <li>Tolerance: H7 standard</li>
                      <li>Shank: Straight</li>
                    </ul>
                  </div>
                </div>
                <div className={inrStyle.btn} onClick={() => handleShow([pop1])}>View Details</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={inrStyle.inrLst}>
                <Image src={img2} className="img-fluid" alt="Step Reamers" title="Step Reamers" loading="lazy" width={340} height={298} />
                <div className={inrStyle.minHight}>
                  <h2 className={inrStyle.inrLstTlt}>Step Reamers</h2>
                  <p className={inrStyle.inrLstCnt}>Versatile step reamers designed for multi-diameter hole reaming in one pass, enhancing accuracy and cycle time</p>

                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>Applications</p>
                    <ul>
                      <li>Step hole finishing in complex components</li>
                      <li>Suitable for high-volume CNC production</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>DIMENSIONS / SPECS:</p>
                    <ul>
                      <li>Step Diameter Range: Ø4 mm to Ø20 mm</li>
                      <li>Step Configuration: Customizable</li>
                      <li>Material: HSS/ Carbide</li>
                    </ul>
                  </div>
                </div>
                <div className={inrStyle.btn} onClick={() => handleShow([pop2])}>View Details</div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
      <ProductModal show={showModal} onHide={handleClose} image={modalImage} />
    </>
  )
}
