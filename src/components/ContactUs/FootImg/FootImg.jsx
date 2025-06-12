import React, { useState } from "react";
import Image from "next/image";
import img from "./assets/img.webp";

export default function FootImg() {

  return (
    <>
      <section className="mt-5">
         <Image src={img} className="img-fluid" loading="lazy" alt="footerImg" title="footerImg" width={1440} height={717} style={{width:"100%"}} />
      </section>
    </>
  )
}
