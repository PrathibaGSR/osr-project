import { Modal } from 'react-bootstrap';
import Image from 'next/image';
import mdlStyle from "./product.module.scss";

export default function ProductModal({ show, onHide, image }) {
  if (!Array.isArray(image)) return null; // safeguard

  return (
    <section className={mdlStyle.mdlSec}>
      <Modal show={show} onHide={onHide} centered size="lg">
        <Modal.Header closeButton />
        <Modal.Body className="text-center">
          {image.length === 1 ? (
            <Image src={image[0]} alt="Product" className="img-fluid" />
          ) : (
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {image.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`Product ${idx + 1}`}
                  className="img-fluid"
                />
              ))}
            </div>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
}
