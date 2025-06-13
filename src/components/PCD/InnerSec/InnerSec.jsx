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
                <Image src={img1} className="img-fluid" alt="PCD Inserts" title="PCD Inserts" loading="lazy" width={340} height={298} />
                <div className={inrStyle.minHight}>
                  <h2 className={inrStyle.inrLstTlt}>PCD Inserts</h2>
                  <p className={inrStyle.inrLstCnt}>Engineered for high-precision machining of non-ferrous and abrasive materials, PCD tools offer exceptional wear resistance and extended tool life, ensuring superior surface finishes in demanding applications</p>

                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>Applications</p>
                    <ul>
                      <li>Ideal for machining aluminium, magnesium, and composite materials</li>
                      <li>Widely used in the aerospace, automotive, and electronics industries</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>DIMENSIONS / SPECS:</p>
                    <ul>
                      <li>Diameter Range: Ø0.2 mm to Ø20 mm</li>
                      <li>Tool Types: End mills, drills, reamers, inserts</li>
                      <li>Material: PCD tipped on carbide substrate</li>
                      <li>Custom geometries available upon request</li>
                    </ul>
                  </div>
                </div>
                <div className={inrStyle.btn} onClick={() => handleShow([pop1])}>View Details</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={inrStyle.inrLst}>
                <Image src={img2} className="img-fluid" alt="PCD Step Reamer" title="PCD Step Reamer" loading="lazy" width={340} height={298} />
                <div className={inrStyle.minHight}>
                  <h2 className={inrStyle.inrLstTlt}>PCD Step Reamer</h2>
                  <p className={inrStyle.inrLstCnt}>Precision step reamers with PCD tips for high-speed, multi-diameter finishing in non-ferrous and composite materials. Deliver exceptional tool life, tight tolerances, and superior surface finish in a single pass.</p>

                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>Applications</p>
                    <ul>
                      <li>Multi-step reaming in aluminium, composites, and magnesium</li>
                      <li>Ideal for aerospace and automotive precision parts</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className={inrStyle.inrLstSub}>DIMENSIONS / SPECS:</p>
                    <ul>
                      <li>Diameter Range: Ø4 mm to Ø20 mm</li>
                      <li>Steps: Custom Configurable</li>
                      <li>Material: PCD tipped on carbide</li>
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
