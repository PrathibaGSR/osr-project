import React, { useState } from "react";
import inrStyle from "./inr.module.scss"
import Link from "next/link";
import Image from "next/image";
import phone from "./assets/phone.svg";
import mail from "./assets/mail.svg";
import map from "./assets/map.svg";
import emailjs from "@emailjs/browser";



export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  // Validation functions for each field
  const validateField = (name, value) => {
    let error = '';
    // const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        break;
      case 'phone':
        if (!value.trim()) error = 'Phone is required';
        // else if (!phoneRegex.test(value)) error = 'Enter a valid 10-digit phone number';
        break;
      case 'email':
        if (!value.trim()) error = 'Email is required';
        else if (!emailRegex.test(value)) error = 'Enter a valid email address';
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        break;
      case 'agreement':
        if (!value) error = 'You must agree before submitting';
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const val = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: val }));

    const error = validateField(name, val);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tempErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) tempErrors[key] = error;
    });

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      setIsSending(true);

      try {
        const response = await emailjs.send(
          "service_c428dqb", // Replace with your EmailJS Service ID
          "template_p7tyng3", // Replace with your Template ID
          {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message
          },
          "Dq1zBxJWPycC7jNGz" // Replace with your EmailJS Public Key
        );

        console.log("SUCCESS!", response.status, response.text);
        alert("Form submitted successfully!");

        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
          agreement: false,
        });
        setErrors({});
      } catch (error) {
        console.error("FAILED...", error);
        alert("Failed to send message. Please try again.");
      }

      setIsSending(false);
    }
  };

  return (
    <>
      <section className={inrStyle.frmSec}>
        <div className="container">
          <div>
            <Link href={"/"} className={inrStyle.inrPage}> {"< Home"}</Link>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div>
                <h2 className={inrStyle.frmSecTlt}>Request a Custom Quote</h2>
                <p className={inrStyle.frmSecSub}>Let’s engineer success together</p>
                <p className={inrStyle.frmSecCnt}>Partner with OSR Industries for high-quality industrial products, personalized service, and solutions that work as hard as you do.</p>
                <ul>
                  <li>
                    <span><Image src={phone} alt="phone" title="phone" width={25} height={25} loading="lazy" /></span> <a href="tel:+91 95605 08673">+91 95605 08673</a>
                  </li>
                  <li>
                    <span><Image src={mail} alt="mail" title="mail" width={25} height={25} loading="lazy" /></span> <a href="mailto:info@osrindustries.co.in">info@osrindustries.co.in</a>
                  </li>
                  <li>
                    <span><Image src={mail} alt="mail" title="mail" width={25} height={25} loading="lazy" /></span> <a href="mailto:info@osrindustries.co.in">sales@osrindustries.co.in</a>
                  </li>
                  <li>
                    <span><Image src={map} alt="map" title="map" width={25} height={25} loading="lazy" /></span> <p>Plot No. 35 Street No. 8, Kadipur Industrial Area, Sector 37C Gurugram - 122001 (Haryana)</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="position-relative">
                      <input placeholder="Name *" type="text" name="name" value={formData.name} onChange={handleChange} />
                      {errors.name && <p className={inrStyle.errMsg}>{errors.name}</p>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="position-relative">
                      <input placeholder="Phone Number *" type="text" name="phone" value={formData.phone} onChange={handleChange} />
                      {errors.phone && <p className={inrStyle.errMsg}>{errors.phone}</p>}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="position-relative">
                      <input placeholder="Email *" type="email" name="email" value={formData.email} onChange={handleChange} />
                      {errors.email && <p className={inrStyle.errMsg}>{errors.email}</p>}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="position-relative">
                      <textarea placeholder="Message" name="message" value={formData.message} onChange={handleChange}></textarea>
                      {errors.message && <p className={inrStyle.errMsg}>{errors.message}</p>}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="position-relative d-flex align-items-center mt-2">
                      <input className={inrStyle.checkInp} type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} /> <p className={inrStyle.checkCnt}>I agree to receive other communications from OSR-Industries</p>
                      {errors.agreement && <p className={inrStyle.errMsgOne}>{errors.agreement}</p>}
                    </div>

                  </div>
                </div>
                <button type="submit">Submit Query</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
