import Facebook from "./Facebook";
import Instagram from "./Instagram";

function Footer() {
  return (
    <>
      <div id="socialBar">
        <a href="https://www.facebook.com/TasteEventsByWolfmoon/">
          <Facebook />
        </a>
        <a href="https://www.instagram.com/mrswolfmoon/">
          <Instagram />
        </a>
      </div>
    </>
  );
}

export default Footer;
