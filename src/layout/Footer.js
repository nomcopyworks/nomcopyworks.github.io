const Footer = () => {
  return (
    <div className="cavani_tm_footer fixed inset-x-0 bottom-0 bg-white z-[10] h-[70px] leading-[70px] flex items-center justify-between py-0 px-[70px] middle:hidden">
      <div className="copyright">
      <p className="text-[#333] font-poppins">Copyright <a href="https://www.naramalhasani.com">NOM</a> © 2024</p>
      </div>
      <div className="social">
        <ul>
          <li className="mr-[15px] inline-block">
            
          </li>
          
          <li className="mr-[15px] inline-block">
            <a className="text-[#333]" href="https://www.instagram.com/_mlcustoms_/">
              <img
                className="svg inline-block"
                src="assets/img/svg/social/instagram.svg"
                alt="image"
              />
            </a>
          </li>
          
          
        </ul>
      </div>
    </div>
  );
};
export default Footer;
