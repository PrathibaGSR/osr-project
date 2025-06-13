import React,{useState} from "react";
import inrStyle from "./inr.module.scss"
import Link from "next/link";
import Image from "next/image";
import order from "./assets/order.svg";
import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.webp";

import ProductModal from "@/components/ProductModel/ProductModel";
import pop1 from "./assets/pop1.webp";
import pop2 from "./assets/pop2.webp";
import pop3 from "./assets/pop3.webp";
import pop4 from "./assets/pop4.webp";


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
                <Image src={img1} className="img-fluid" alt="Square End Mill" title="Square End Mill" loading="lazy" width={340} height={298} />
                <div className={inrStyle.minHight}>
                  <h2 className={inrStyle.inrLstTlt}>Square End Mill</h2>
                  <p className={inrStyle.inrLstCnt}>Robust and sharp-edged end mills designed for side milling, slotting, and contouring. Offers excellent chip removal and surface finish</p>

                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>Applications</p>
                    <ul>
                      <li>Ideal for slot and shoulder milling</li>
                      <li>Suitable for alloy steel, Mold steel, and cast iron</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>DIMENSIONS / SPECS:</p>
                    <ul>
                      <li>Diameter Range: Ø2mm to Ø40mm</li>
                      <li>Material: Solid carbide</li>
                      <li>Flute: 2/4/6/8 flutest</li>
                      <li>Shank: Straight</li>
                    </ul>
                  </div>
                </div>
                <div className={inrStyle.btn} onClick={() => handleShow([pop1])}>View Details</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={inrStyle.inrLst}>
                <Image src={img2} className="img-fluid" alt="Ball Nose End Mill" title="Ball Nose End Mill" loading="lazy" width={340} height={298} />
                <div className={inrStyle.minHight}>
                  <h2 className={inrStyle.inrLstTlt}>Ball Nose End Mill</h2>
                  <p className={inrStyle.inrLstCnt}>High-performance ball nose mills for 3D contouring, die-Mold machining, and fine surface finishing in deep cavities</p>

                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>Applications</p>
                    <ul>
                      <li>3D profiling for dies and Molds</li>
                      <li>Contour milling in hard materials</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>DIMENSIONS / SPECS:</p>
                    <ul>
                      <li>Ball Radius: R0.1 mm to R10 mm</li>
                      <li>Length: Short / Regular / Long Neck</li>
                      <li>Material: Solid Carbide</li>
                      <li>Flute Type: Helical</li>
                    </ul>
                  </div>
                </div>
                <div className={inrStyle.btn} onClick={() => handleShow([pop2,pop3,pop4])}>View Details</div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
      <ProductModal show={showModal} onHide={handleClose} image={modalImage} />
    </>
  )
}
