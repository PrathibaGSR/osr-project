import React,{useState} from "react";
import inrStyle from "./inr.module.scss"
import Link from "next/link";
import Image from "next/image";
import order from "./assets/order.svg";
import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.webp";
import img3 from "./assets/img3.webp";

import ProductModal from "@/components/ProductModel/ProductModel";
import pop1 from "./assets/pop1.webp";
import pop2 from "./assets/pop2.webp";
import pop3 from "./assets/pop3.webp";


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
                <Image src={img1} className="img-fluid" alt="Plain Drills" title="Plain Drills" loading="lazy" width={340} height={298} />
                <div className={inrStyle.minHight}>
                  <h2 className={inrStyle.inrLstTlt}>Plain Drills</h2>
                  <p className={inrStyle.inrLstCnt}>High-precision drills designed for consistent, clean holes in a variety of industrial materials. Engineered with durability and accuracy for general-purpose drilling</p>

                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>Applications</p>
                    <ul>
                      <li>Suitable for alloy steel, cast iron, and aluminium</li>
                      <li>Ideal for general machining and maintenance jobs</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>DIMENSIONS / SPECS:</p>
                    <ul>
                      <li>Diameter: Ø0.1 mm to Ø12 mm</li>
                      <li>Material: Carbide / HSS</li>
                      <li>Shank: Straight</li>
                      <li>Tolerance: h6</li>
                    </ul>
                  </div>
                </div>
                <div className={inrStyle.btn} onClick={() => handleShow([pop1])}>View Details</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={inrStyle.inrLst}>
                <Image src={img2} className="img-fluid" alt="Step Drills" title="Step Drills" loading="lazy" width={340} height={298} />
                <div className={inrStyle.minHight}>
                  <h2 className={inrStyle.inrLstTlt}>Step Drills</h2>
                  <p className={inrStyle.inrLstCnt}>multi-diameter drilling tools for clean, burr-free holes with stepwise diameter variation—perfect for sheet metal and thin materials.</p>

                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>Applications</p>
                    <ul>
                      <li>Efficient for drilling in soft metals and plastics</li>
                      <li>Ideal for electrical panel and thin sheet cutting</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>DIMENSIONS / SPECS:</p>
                    <ul>
                      <li>Step Diameter Range: Ø4mm to Ø30mm</li>
                      <li>Number of Steps: 2 to 6</li>
                      <li>Material: Coated Carbide</li>
                    </ul>
                  </div>
                </div>
                <div className={inrStyle.btn} onClick={() => handleShow([pop2])}>View Details</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={inrStyle.inrLst}>
                <Image src={img3} className="img-fluid" alt="Centre Drills" title="Centre Drills" loading="lazy" width={340} height={298} />
                <div className={inrStyle.minHight}>
                  <h2 className={inrStyle.inrLstTlt}>Centre Drills</h2>
                  <p className={inrStyle.inrLstCnt}>Precision ground centre drills used for accurate centering prior to machining and tapping. Excellent rigidity for reducing drill wander</p>

                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>Applications</p>
                    <ul>
                      <li>Centering before drilling or milling</li>
                      <li>Chamfering operations in CNC and manual machines</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>DIMENSIONS / SPECS:</p>
                    <ul>
                      <li>Body Diameter: Ø1.0 mm to Ø6.3 mm</li>
                      <li>Angle: 60° standard</li>
                      <li>Shank: Straight</li>
                    </ul>
                  </div>
                </div>
                <div className={inrStyle.btn} onClick={() => handleShow([pop3])}>View Details</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductModal show={showModal} onHide={handleClose} image={modalImage} />
    </>
  )
}
