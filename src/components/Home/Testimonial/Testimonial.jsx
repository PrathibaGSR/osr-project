import React from "react";
import testStyle from "./testimonial.module.scss"
import Image from "next/image";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import star from "./assets/star.svg";
import quoteTop from "./assets/quoteTop.svg";
import quoteBot from "./assets/quoteBot.svg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


export default function Testimonials() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrow: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <>
            <section className={testStyle.testSec}>
                <div className="container">
                    <div>
                        <p className={testStyle.testSecSub}>Testimonials</p>
                        <h2 className={testStyle.testSecTlt}>Our Client Reviews</h2>
                        <div className="row">
                            <Slider {...settings}>
                                <div className="col-lg-4">
                                    <div className={testStyle.testLst}>
                                        <div className={testStyle.testLstBg}>
                                            <div>
                                                <Image src={star} className="img-fluid" alt="star" title="star" loading="lazy" width={147} height={16} />
                                            </div>
                                            <div className="mt-3">
                                                <Image src={icon1} className="img-fluid" alt="Production Head" title="Production Head" loading="lazy" width={70} height={70} />
                                            </div>
                                            <p className={testStyle.testLstTlt}>Production Head</p>
                                        </div>
                                        <div className={testStyle.testLstDesc}>
                                            <Image src={quoteTop} className="img-fluid" alt="quote" title="quote" loading="lazy" width={47} height={42} />
                                            <p className={testStyle.testLstCnt}>We’ve been sourcing micro drills and end mills from OSR. Their quality has remained consistent, especially across repeat orders with custom tolerances</p>
                                            <Image src={quoteBot} className="img-fluid" alt="quote" title="quote" loading="lazy" width={47} height={42} />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className={testStyle.testLst}>
                                        <div className={testStyle.testLstBg}>
                                            <div>
                                                <Image src={star} className="img-fluid" alt="star" title="star" loading="lazy" width={147} height={16} />
                                            </div>
                                            <div className="mt-3">
                                                <Image src={icon2} className="img-fluid" alt="Quality Assurance Lead" title="Quality Assurance Lead" loading="lazy" width={70} height={70} />
                                            </div>
                                            <p className={testStyle.testLstTlt}>Quality Assurance Lead</p>
                                        </div>
                                        <div className={testStyle.testLstDesc}>
                                            <Image src={quoteTop} className="img-fluid" alt="quote" title="quote" loading="lazy" width={47} height={42} />
                                            <p className={testStyle.testLstCnt}>OSR’s tooling precision and finish have significantly improved our machining accuracy. Their support team is always responsive with technical insights</p>
                                            <Image src={quoteBot} className="img-fluid" alt="quote" title="quote" loading="lazy" width={47} height={42} />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className={testStyle.testLst}>
                                        <div className={testStyle.testLstBg}>
                                            <div>
                                                <Image src={star} className="img-fluid" alt="star" title="star" loading="lazy" width={147} height={16} />
                                            </div>
                                            <div className="mt-3">
                                                <Image src={icon3} className="img-fluid" alt="Operations Director" title="Operations Director" loading="lazy" width={70} height={70} />
                                            </div>
                                            <p className={testStyle.testLstTlt}>Operations Director</p>
                                        </div>
                                        <div className={testStyle.testLstDesc}>
                                            <Image src={quoteTop} className="img-fluid" alt="quote" title="quote" loading="lazy" width={47} height={42} />
                                            <p className={testStyle.testLstCnt}>The flexibility in tool customization and prompt dispatch have made OSR our go-to partner for special operations. The performance of their inserts is particularly impressive</p>
                                            <Image src={quoteBot} className="img-fluid" alt="quote" title="quote" loading="lazy" width={47} height={42} />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className={testStyle.testLst}>
                                        <div className={testStyle.testLstBg}>
                                            <div>
                                                <Image src={star} className="img-fluid" alt="star" title="star" loading="lazy" width={147} height={16} />
                                            </div>
                                            <div className="mt-3">
                                                <Image src={icon1} className="img-fluid" alt="Procurement Manager" title="Procurement Manager" loading="lazy" width={70} height={70} />
                                            </div>
                                            <p className={testStyle.testLstTlt}>Procurement Manager</p>
                                        </div>
                                        <div className={testStyle.testLstDesc}>
                                            <Image src={quoteTop} className="img-fluid" alt="quote" title="quote" loading="lazy" width={47} height={42} />
                                            <p className={testStyle.testLstCnt}>Their fast delivery and proper certifications helped us pass every technical audit. Very prompt in support when we needed rapid retooling</p>
                                            <Image src={quoteBot} className="img-fluid" alt="quote" title="quote" loading="lazy" width={47} height={42} />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className={testStyle.testLst}>
                                        <div className={testStyle.testLstBg}>
                                            <div>
                                                <Image src={star} className="img-fluid" alt="star" title="star" loading="lazy" width={147} height={16} />
                                            </div>
                                            <div className="mt-3">
                                                <Image src={icon2} className="img-fluid" alt="Tool Room Supervisor" title="Tool Room Supervisor" loading="lazy" width={70} height={70} />
                                            </div>
                                            <p className={testStyle.testLstTlt}>Tool Room Supervisor</p>
                                        </div>
                                        <div className={testStyle.testLstDesc}>
                                            <Image src={quoteTop} className="img-fluid" alt="quote" title="quote" loading="lazy" width={47} height={42} />
                                            <p className={testStyle.testLstCnt}>From prototype development to high-volume tool runs, OSR provided continuous technical support. Their precision in custom tooling is excellent</p>
                                            <Image src={quoteBot} className="img-fluid" alt="quote" title="quote" loading="lazy" width={47} height={42} />
                                        </div>

                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
