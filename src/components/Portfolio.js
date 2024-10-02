import Isotope from "isotope-layout";
import dynamic from "next/dynamic";
import { Fragment, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";
import { dataImage } from "../utils";
import ImageView from "./ImagePopup";
import { Detail, Detail2, Detail3,Detail4,Detail5,Detail6,Detail7, Detail8, Detail9, Detail10, Detail11,Detail12, Soundcloud } from "./Popup";

const Portfolio = () => {
  const ModalVideo = dynamic(
    () => {
      return import("react-modal-video");
    },
    { ssr: false }
  );

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    console.log(data);
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
          // layoutMode: "fitRows",
        });
      }, 3000);
    }

    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  useEffect(() => {
    setTimeout(() => {
      dataImage();
    }, 2000);
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  const [isOpen14, setIsOpen14] = useState(false);
  const [isOpen15, setIsOpen15] = useState(false);


  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }
  function toggleModalSeven() {
    setIsOpen7(!isOpen7);
  }
  function toggleModalEight() {
    setIsOpen8(!isOpen8);
  }
  function toggleModalNine() {
    setIsOpen9(!isOpen9);
  }
  function toggleModalTen() {
    setIsOpen10(!isOpen10);
  }

  function toggleModalEleven() {
    setIsOpen11(!isOpen11);
  }

  function toggleModalTwelve() {
    setIsOpen12(!isOpen12);
  }
  function toggleModalthirteen() {
    setIsOpen13(!isOpen13);
  }
  function toggleModalfourteen() {
    setIsOpen14(!isOpen14);
  }

  function toggleModalfifteen() {
    setIsOpen15(!isOpen15);
  }

  return (
    <Fragment>
      <ImageView />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="337293658"
        animationSpeed={300}
        onClose={() => setIsOpen2(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      />
      <Soundcloud isOpen3={isOpen3} toggleModalThree={toggleModalThree} />
      <Detail isOpen4={isOpen4} toggleModalFour={toggleModalFour} />
      <Detail2 isOpen5={isOpen5} toggleModalFive={toggleModalFive} />
      <Detail3 isOpen6={isOpen6} toggleModalSix={toggleModalSix} />
      <Detail4 isOpen7={isOpen7} toggleModalSeven={toggleModalSeven} />
      <Detail5 isOpen8={isOpen8} toggleModalEight={toggleModalEight} />
      <Detail6 isOpen9={isOpen9} toggleModalNine={toggleModalNine} />
      <Detail7 isOpen10={isOpen10} toggleModalTen={toggleModalTen} />
      <Detail8 isOpen11={isOpen11} toggleModalEleven={toggleModalEleven} />
      <Detail9 isOpen12={isOpen12} toggleModalTwelve={toggleModalTwelve} />
      <Detail10 isOpen13={isOpen13} toggleModalthirteen={toggleModalthirteen}/>
      <Detail11 isOpen14={isOpen14} toggleModalfourteen={toggleModalfourteen}/>
      <Detail12 isOpen15={isOpen15} toggleModalfifteen={toggleModalfifteen}/>

      <SectionContainer navName="portfolio">
        <div className="section_inner">
          <div className="cavani_tm_portfolio w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Creative Portfolio
              </span>
            </div>
            <div className="portfolio_filter w-full h-auto clear-both float-left text-left relative px-0 pt-[55px] pb-[42px]">
              <ul>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="current text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter="*"
                    onClick={handleFilterKeyChange("*")}
                  >
                    All
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".sneakers"
                    onClick={handleFilterKeyChange("sneakers")}
                  >
                    Sneaker Builds
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".designs"
                    onClick={handleFilterKeyChange("designs")}
                  >
                    Designs
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".woodworking"
                    onClick={handleFilterKeyChange("woodworking")}
                  >
                    Woodworking
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".personal"
                    onClick={handleFilterKeyChange("personal")}
                  >
                    Personal
                  </a>
                </li>
                
              </ul>
            </div>
            <div className="portfolio_list w-full h-auto clear-both float-left">
              <ul className="gallery_zoom ml-[-50px]">



              <li className="sneakers mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00181.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Arsutoria School of Design
                        </h3>
                        <span className="text-[14px]">Projects</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalFour}
                      />
                    </div>
                    <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                              During the fall semester of 2023, I had the pleasure of taking a semester at (Art School) in Milan. During this time, I was able to design, create, and bring to life a number of 
                              projects that I am proud of. I was able to work with a number of different mediums and materials to create my visions. Below are a few of th designs and products 
                            </p>
                            <p>
                              Mockups are useful both for the creative phase of
                              the project - for instance when you're trying to
                              figure out your user flows or the proper visual
                              hierarchy - and the production phase when they
                              phase when they will represent the target product.
                              Building mockups strikes the ideal balance ease of
                              modification.
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Detail
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March 07, 2021</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/facebook.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>


 {/*Start Portfolio Item 1 JMU Final */}



 <li className="personal mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/Website/JMUFinal/Mockup.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          JMU Independent Study
                        </h3>
                        <span className="text-[14px]">Projects</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalthirteen}
                      />
                    </div>
                    <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                              During the fall semester of 2023, I had the pleasure of taking a semester at (Art School) in Milan. During this time, I was able to design, create, and bring to life a number of 
                              projects that I am proud of. I was able to work with a number of different mediums and materials to create my visions. Below are a few of th designs and products 
                             </p>
                            <p>
                              Mockups are useful both for the creative phase of
                              the project - for instance when you're trying to
                              figure out your user flows or the proper visual
                              hierarchy - and the production phase when they
                              phase when they will represent the target product.
                              Building mockups strikes the ideal balance ease of
                              modification.
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Detail
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March 07, 2021</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/facebook.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
{/*Start Portfolio Item 2 JMU Jordans */}
<li className="personal mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/Website/JMUFinal/ElephantLeather.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Custom Jordan
                        </h3>
                        <span className="text-[14px]">Personal Projects</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalfourteen}
                      />
                    </div>
                    <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                              During the fall semester of 2023, I had the pleasure of taking a semester at (Art School) in Milan. During this time, I was able to design, create, and bring to life a number of 
                              projects that I am proud of. I was able to work with a number of different mediums and materials to create my visions. Below are a few of th designs and products 
                             </p>
                            <p>
                              Mockups are useful both for the creative phase of
                              the project - for instance when you're trying to
                              figure out your user flows or the proper visual
                              hierarchy - and the production phase when they
                              phase when they will represent the target product.
                              Building mockups strikes the ideal balance ease of
                              modification.
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Detail
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March 07, 2021</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/facebook.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
{/*Start Portfolio Item 1 JMU Final */}
<li className="personal mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/Website/JMUFinal/Final.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Custom Jordan
                        </h3>
                        <span className="text-[14px]">Personal Project</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalfifteen}
                      />
                    </div>
                    <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                              
                             </p>
                            <p>
                              
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span></span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Detail
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March 07, 2021</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/facebook.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

               

                {/*Start Portfolio Item 6 */}
              <li className="personal mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/Website/PersonalWork/AVATAR.JPG"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Custom Works
                        </h3>
                        <span className="text-[14px]">Projects</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalNine}
                      />
                    </div>
                    <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                              During the fall semester of 2023, I had the pleasure of taking a semester at (Art School) in Milan. During this time, I was able to design, create, and bring to life a number of 
                              projects that I am proud of. I was able to work with a number of different mediums and materials to create my visions. Below are a few of th designs and products 
                             </p>
                            <p>
                              Mockups are useful both for the creative phase of
                              the project - for instance when you're trying to
                              figure out your user flows or the proper visual
                              hierarchy - and the production phase when they
                              phase when they will represent the target product.
                              Building mockups strikes the ideal balance ease of
                              modification.
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Detail
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March 07, 2021</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/facebook.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

{/*Start Portfolio Item 9 Chuck Taylors*/}
<li className="sneakers mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/Website/HQPhoto/thumbnail_202304271.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Custom leather Chuck Taylor All-Stars
                        </h3>
                        <span className="text-[14px]">Sneaker Build</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalTwelve}
                      />
                    </div>
                    <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                            </p>
                            <p>
                            
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Detail
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March 07, 2021</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/facebook.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                
 {/*Start Portfolio Item 8 */}
                
 <li className="sneakers mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/Website/HQPhoto/thumbnail_20230427.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Elephant Print Leather AF1
                        </h3>
                        <span className="text-[14px]">Sneaker Build</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalEleven}
                      />
                    </div>
                    <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                              During the fall semester of 2023, I had the pleasure of taking a semester at (Art School) in Milan. During this time, I was able to design, create, and bring to life a number of 
                              projects that I am proud of. I was able to work with a number of different mediums and materials to create my visions. Below are a few of th designs and products 
                             </p>
                            <p>
                              Mockups are useful both for the creative phase of
                              the project - for instance when you're trying to
                              figure out your user flows or the proper visual
                              hierarchy - and the production phase when they
                              phase when they will represent the target product.
                              Building mockups strikes the ideal balance ease of
                              modification.
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Detail
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March 07, 2021</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/facebook.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>




 {/*Start Portfolio Item 4 */}

 <li className="personal mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/Website/HQPhoto/thumbnail_IMG_2092.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Birkenstocks
                        </h3>
                        <span className="text-[14px]">Projects</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalSeven}
                      />
                    </div>
                    <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                            To achieve this, I spent a significant amount of time studying the design and construction of Birkenstock shoes to ensure that my version was as faithful to the original as possible. Using only genuine Birkenstock materials, I crafted each component of the shoe myself, to create a truly unique and exceptional pair of shoes. 
                             </p>
                            <p>
                            The process was a labor of love, and I am proud of the final result. This project allowed me to showcase my passion for creating high-quality, handmade products and to hone my skills as a craftsman. I am excited to share my work with others who appreciate the beauty and craftsmanship of handmade goods.
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Detail
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March 07, 2021</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/facebook.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>


                
              {/*Start Portfolio Item 7 */}
                
<li className="personal mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/Website/guitar2.jpeg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Custom Guitar Art
                        </h3>
                        <span className="text-[14px]">Comission</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalTen}
                      />
                    </div>
                    <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                              During the fall semester of 2023, I had the pleasure of taking a semester at (Art School) in Milan. During this time, I was able to design, create, and bring to life a number of 
                              projects that I am proud of. I was able to work with a number of different mediums and materials to create my visions. Below are a few of th designs and products 
                             </p>
                            <p>
                              Mockups are useful both for the creative phase of
                              the project - for instance when you're trying to
                              figure out your user flows or the proper visual
                              hierarchy - and the production phase when they
                              phase when they will represent the target product.
                              Building mockups strikes the ideal balance ease of
                              modification.
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Detail
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March 07, 2021</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/facebook.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>


{/*Start Portfolio Item 6 */}

<li className="designs mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="/assets/img/Website/FinalPhoto.png"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/Website/FinalPhoto.png"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Sneaker Design Studio
                        </h3>
                        <span className="text-[14px]">Projects</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalFive}
                      />
                    </div>
                    <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                              During the fall semester of 2023, I had the pleasure of taking a semester at (Art School) in Milan. During this time, I was able to design, create, and bring to life a number of 
                              projects that I am proud of. I was able to work with a number of different mediums and materials to create my visions. Below are a few of th designs and products 
                             </p>
                            <p>
                              
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Detail
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March 07, 2021</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/facebook.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>



{/*Start Portfolio Item 3 */}

<li className="designs mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/Website/SneakerShelf/Bullseyerack.gif"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Bullseye Sneaker Shelf
                        </h3>
                        <span className="text-[14px]">Design</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalSix}
                      />
                    </div>
                    <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                            This is my design for a custom shelving unit created for Bullseye Sneaker Boutique. As a student at James Madison University, I had the opportunity to bring this project to life as part of my Industrial Design CAD class. Utilizing Rhino 7, I designed the shelf with both practicality and aesthetic appeal in mind and rendered the final product using Keyshot. I'm proud of the results and I hope you enjoy viewing the outcome of my hard work.
                             </p>
                            <p>
                              
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span>Bullseye Sneaker Boutique</span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Design
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March, 2021</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/facebook.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
               


                {/*Start Portfolio Item 5 */}
                <li className="woodworking mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/Website/Woodworking/Hammer.png"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Woodwork
                        </h3>
                        <span className="text-[14px]">Projects</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalEight}
                      />
                    </div>
                    <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                            </p>
                            <p>
                            
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Detail
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March 07, 2021</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/facebook.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>


               
              

                
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Fragment>
  );
};
export default Portfolio;
