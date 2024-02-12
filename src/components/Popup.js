import Modal from "react-modal";

export const Soundcloud = ({ isOpen3, toggleModalThree }) => {
  return (
    <Modal
      isOpen={isOpen3}
      onRequestClose={toggleModalThree}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      {" "}
      <div
        onClick={toggleModalThree}
        className="modal-video mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content">
            <div className="mfp-iframe-scaler">
              <button
                onClick={toggleModalThree}
                title="Close (Esc)"
                type="button"
                className="mfp-close"
              >
                ×
              </button>
              <iframe
                className="mfp-iframe"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Modal>
  );
};
export const Detail = ({ isOpen4, toggleModalFour }) => {
  return (
    <Modal
      isOpen={isOpen4}
      onRequestClose={toggleModalFour}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalFour}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00148.jpg"
                  style={{
                    backgroundImage: 'url("assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00148.jpg")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  Arsutoria School of Design
                </h3>
                <span className="text-[14px]">Detail</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                  I was granted a scholarship to Arsutoria School in Milan, Italy, to attend their footwear technical course. 
                  This course integrated the skill of pattern making, stitching, and prototyping. 
                  </p>
                  <p>
                  My time was spent in the classroom
                  and the work room with hours dedicated to pattern drawing, cutting, and measuring, but also skiving, preparing and stitching</p>
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">School</span>
                      <span>Arsutoria School Of Design</span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Shoemaking and Design Projects
                        </a>
                      </span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>November 2023</span>
                    </li>
                    <li className="w-full float-left">
                      <span className="first font-bold block">Share</span>
                      <ul className="share relative top-[7px]">
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/facebook.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/twitter.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/instagram.svg"
                              alt="image"
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00054.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00054.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00055.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00055.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00067.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00067.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00074.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00074.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00078.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00078.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00086.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00086.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00114.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00114.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00130.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00130.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00086.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/AsturiaSchoolofDesign/thumbnail_DSC00086.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
  
};

{/*Detail 2*/ }
export const Detail2 = ({ isOpen5, toggleModalFive }) => {
  return (
    <Modal
      isOpen={isOpen5}
      onRequestClose={toggleModalFive}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalFive}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/Website/Proj. 4- Sneaker Studio/SHOE PROCESS/ORTHO WITH CALLOUTS.png"
                  style={{
                    backgroundImage: 'url("assets/img/Website/Proj. 4- Sneaker Studio/SHOE PROCESS/ORTHO WITH CALLOUTS.png")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  Sneaker Studio
                </h3>
                <span className="text-[14px]">Cleat Design</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                    I had the pleasure of taking a sneaker design studio at James Madison University as a part of the Industrial Design Major. During this time, I brought to life a number of footwear designs which I am very excited to showcase.
                  </p>
                  <p> Below are the design inspirations and final product of the cleats. I have been playing Ultimate Frisbee for many years and have noticed various problems with the cleats that are commonly used for the sport. This inspired me to design the Frisbee specific cleat that addresses these issues.
                    </p>
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">School</span>
                      <span>James Madison University</span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Cleat Design
                        </a>
                      </span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>March, 2023</span>
                    </li>
                    <li className="w-full float-left">
                      <span className="first font-bold block">Share</span>
                      <ul className="share relative top-[7px]">
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/facebook.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/twitter.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/instagram.svg"
                              alt="image"
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/CleatProcess3.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/CleatProcess3.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="/assets/img/Website/Proj. 4- Sneaker Studio/SHOE PROCESS/SHOE PROCESS 8.PNG"
                          style={{
                            backgroundImage:
                              'url("/assets/img/Website/Proj. 4- Sneaker Studio/SHOE PROCESS/SHOE PROCESS 8.PNG")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/Proj. 4- Sneaker Studio/SHOE PROCESS/SHOE PROCESS 10.PNG"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/Proj. 4- Sneaker Studio/SHOE PROCESS/SHOE PROCESS 10.PNG")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                   
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
  
};


{/*Detail 2*/ }
export const Detail3 = ({ isOpen6, toggleModalSix }) => {
  return (
    <Modal
      isOpen={isOpen6}
      onRequestClose={toggleModalSix}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalSix}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/Website/SneakerShelf/inspiration.jpg"
                  style={{
                    backgroundImage: 'url("assets/img/Website/SneakerShelf/inspiration.jpg")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  Bullseye Sneaker Boutique Shelving unit
                </h3>
                <span className="text-[14px]">Commission</span>
                <div />
              </div>
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
                      <span className="first font-bold block">Client</span>
                      <span>Bullseye Sneaker Boutique</span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Design
                        </a>
                      </span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li className="w-full float-left">
                      <span className="first font-bold block">Share</span>
                      <ul className="share relative top-[7px]">
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/facebook.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/twitter.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/instagram.svg"
                              alt="image"
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/SneakerShelf/render.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/SneakerShelf/render.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/SneakerShelf/sketches.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/SneakerShelf/sketches.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/SneakerShelf/sketches2.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/SneakerShelf/sketches2.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/SneakerShelf/finalrender1.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/SneakerShelf/finalrender1.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
  
};


{/*Detail 4*/ }
export const Detail4 = ({ isOpen7, toggleModalSeven }) => {
  return (
    <Modal
      isOpen={isOpen7}
      onRequestClose={toggleModalSeven}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalSeven}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/Website/HQPhoto/IMG_2089.jpeg"
                  style={{
                    backgroundImage: 'url("assets/img/Website/HQPhoto/IMG_2089.jpeg")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  Birkenstock
                </h3>
                <span className="text-[14px]">Footwear</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                  This project involved creating a pair of Birkenstock shoes using only authentic Birkenstock materials. My inspiration stemmed from the brand's renowned reputation for manufacturing comfortable and long-lasting footwear. The goal was to replicate the shoes with the same quality and style found in the original designs.
     
                  </p>
                  <p>
                  The process was a labor of love, and I am proud of the final result. This project allowed me to showcase my passion for creating high-quality, handmade products and to hone my skills as a craftsman.
                           
                  </p>
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">School</span>
                      <span>James Madison University</span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Sneaker
                        </a>
                      </span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>March, 2023</span>
                    </li>
                    <li className="w-full float-left">
                      
                      
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/Birk.jpeg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/Birk.jpeg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
  
};

{/*Detail 5 Woodworking*/ }
export const Detail5 = ({ isOpen8, toggleModalEight }) => {
  return (
    <Modal
      isOpen={isOpen8}
      onRequestClose={toggleModalEight}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalEight}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/Website/Woodworking/Bow Process/Bow Process Pic 8.jpeg"
                  style={{
                    backgroundImage: 'url("assets/img/Website/Woodworking/Bow Process/Bow Process Pic 8.jpeg")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  Woodwork
                </h3>
                <span className="text-[14px]">Projects</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                   This section of my portfolio showcases my love for crafting with my hands and an appreciation for the intricate details that come with working with wood. This section features a curated selection of my personal projects developed over the years, highlighting my skills and creativity in woodworking.
                  </p>
                  
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Detail
                        </a>
                      </span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li className="w-full float-left">
                      <span className="first font-bold block">Share</span>
                      <ul className="share relative top-[7px]">
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/facebook.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/twitter.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/instagram.svg"
                              alt="image"
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/Woodworking/Bow Process/FINAL BOW MAIN PICTURE_.png"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/Woodworking/Bow Process/FINAL BOW MAIN PICTURE_.png")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/Woodworking/Bow Process/Bow Process Pic 4.jpeg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/Woodworking/Bow Process/Bow Process Pic 4.jpeg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/Woodworking/Bow Process/Bow Process Pic 6.jpeg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/Woodworking/Bow Process/Bow Process Pic 6.jpeg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/Woodworking/Hammer.png"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/Woodworking/Hammer.png")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/Woodworking/Other Work/Custom storage box final.PNG"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/Woodworking/Other Work/Custom storage box final.PNG")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/Woodworking/Other Work/table Final 1 .PNG"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/Woodworking/Other Work/table Final 1 .PNG")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/Woodworking/Kumiko Process/final miko.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/Woodworking/Kumiko Process/final miko.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/Woodworking/Kumiko Process/Kumiko process 3.jpeg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/Woodworking/Kumiko Process/Kumiko process 3.jpeg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/Woodworking/Kumiko Process/Kumiko Process 5.jpeg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/Woodworking/Kumiko Process/Kumiko Process 5.jpeg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
  
};


{/*Detail 6 Custom Works*/ }
export const Detail6 = ({ isOpen9, toggleModalNine }) => {
  return (
    <Modal
      isOpen={isOpen9}
      onRequestClose={toggleModalNine}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalNine}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/Website/PersonalWork/Custom Sneakers/AVATAR.JPG"
                  style={{
                    backgroundImage: 'url("assets/img/Website/PersonalWork/Custom Sneakers/AVATAR.JPG")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  Custom Works
                </h3>
                <span className="text-[14px]">Comissions</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                  My custom work is a fusion of my passion for painting and sneakers. The showcased samples reflect some of my favorite designs, illustrating my collaborative process with clients to create unique, custom-painted shoes that align with their personalities and preferences. 
                  </p>
                 
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Custom Works
                        </a>
                      </span>
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/PersonalWork/Custom Sneakers/POKEMON.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/PersonalWork/Custom Sneakers/POKEMON.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/PersonalWork/Custom Sneakers/DIOR 2.0.jpeg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/PersonalWork/Custom Sneakers/DIOR 2.0.jpeg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/PersonalWork/Custom Sneakers/BURBERRY.jpg"
                          style={{
                            backgroundImage:
                              'url("/assets/img/Website/PersonalWork/Custom Sneakers/BURBERRY.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/PersonalWork/Custom Sneakers/AVATAR 3.0.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/PersonalWork/Custom Sneakers/AVATAR 3.0.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/PersonalWork/Custom Sneakers/SPLATTER_DRIP.JPG"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/PersonalWork/Custom Sneakers/SPLATTER_DRIP.JPG")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/PersonalWork/Custom Sneakers/CUSTOM 3.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/PersonalWork/Custom Sneakers/CUSTOM 3.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="/assets/img/Website/PersonalWork/Custom Sneakers/CUSTOM.jpg"
                          style={{
                            backgroundImage:
                              'url("/assets/img/Website/PersonalWork/Custom Sneakers/CUSTOM.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/PersonalWork/Custom Sneakers/BEACH.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/PersonalWork/Custom Sneakers/BEACH.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/PersonalWork/Custom Sneakers/SPLATTER 2.0.JPG"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/PersonalWork/Custom Sneakers/SPLATTER 2.0.JPG")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/PersonalWork/Custom Sneakers/CARTOON.JPG"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/PersonalWork/Custom Sneakers/CARTOON.JPG")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
  
};

{/*Detail 7*/ }
export const Detail7 = ({ isOpen10, toggleModalTen }) => {
  return (
    <Modal
      isOpen={isOpen10}
      onRequestClose={toggleModalTen}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalTen}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/Website/PersonalWork/Paintings/Guitar1.jpeg"
                  style={{
                    backgroundImage: 'url("assets/img/Website/PersonalWork/Paintings/Guitar1.jpeg")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  Custom Guitar Art
                </h3>
                <span className="text-[14px]">Comission</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                  I created a custom guitar for a client, commissioned specifically for his live shows. Collaborating closely with the client, we selected a design and colors that resonate with his personality, resulting in a unique and personalized instrument tailored to his preferences.
                  </p>
                  
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Client</span>
                      <span>Anonymous</span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Custom Art
                        </a>
                      </span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>March, 2021</span>
                    </li>
                    <li className="w-full float-left">
                      
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/PersonalWork/Paintings/guitar3.jpeg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/PersonalWork/Paintings/guitar3.jpeg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  
                  



                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
  
};



{/*Detail 7*/ }
export const Detail8 = ({ isOpen11, toggleModalEleven }) => {
  return (
    <Modal
      isOpen={isOpen11}
      onRequestClose={toggleModalEleven}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalEleven}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="/assets/img/Website/HQPhoto/AF1/IMG_2831.jpg"
                  style={{
                    backgroundImage: 'url("/assets/img/Website/HQPhoto/AF1/IMG_2831.jpg")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  Blue Elephant Print Air Force 1
                </h3>
                <span className="text-[14px]">Custom Built Sneaker</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                  The goal of this project was to craft a pair of Leather Air Jordan sneakers using the highest quality materials. Inspired by the brands history and my personal connection with the shoe, these cusom-made sneakers are a manifestation of my respect of the timless design of the Air Jordan.
                  </p>
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">School</span>
                      <span>James Madison University</span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Sneaker Build
                        </a>
                      </span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>March, 2023</span>
                    </li>
                    <li className="w-full float-left">
                      
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/HQPhoto/AF1/IMG_2608.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/HQPhoto/AF1/IMG_2608.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/HQPhoto/AF1/IMG_2643.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/HQPhoto/AF1/IMG_2643.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/HQPhoto/AF1/IMG_2674.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/HQPhoto/AF1/IMG_2674.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>



                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
  
};


{/*Detail 7*/ }
export const Detail9 = ({ isOpen12, toggleModalTwelve }) => {
  return (
    <Modal
      isOpen={isOpen12}
      onRequestClose={toggleModalTwelve}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalTwelve}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/Website/HQPhoto/thumbnail_IMG_2577.jpg"
                  style={{
                    backgroundImage: 'url("assets/img/Website/HQPhoto/thumbnail_IMG_2577.jpg")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  Brown Leather Chuck Taylor All Stars
                </h3>
                <span className="text-[14px]">Custom Built Sneaker</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                  The goal of this project was  to meticulously handcraft a pair of Leather Chuck Taylor All Stars, utilizing only authentic materials and the highest quality leather. The inspiration for this endeavor was drawn from the renowned brand's legacy of comfort and durability. My goal was to recreate these iconic shoes with an unwavering attention to detail and uncompromising quality, aiming to deliver a fusion of artistry and authenticity. 
                  </p>
                  <p>
                  The custom leather All-Stars serve as a homage to the timeless design of Chuck Taylor, providing a unique and high-quality interpretation of the classic footwear.
                  </p>
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">School</span>
                      <span>James Madison University</span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Sneaker Build
                        </a>
                      </span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>May, 2023</span>
                    </li>
                    <li className="w-full float-left">
                      
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/HQPhoto/AF1/IMG_2396.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/HQPhoto/AF1/IMG_2396.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/HQPhoto/AF1/IMG_2571.jpeg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/HQPhoto/AF1/IMG_2571.jpeg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/Website/HQPhoto/AF1/IMG_2410.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/Website/HQPhoto/AF1/IMG_2410.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>



                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
  
};