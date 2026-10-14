import hospodaLogo from "../../assets/images/hospudka-logo.png";
import location from "../../assets/icons/location.png";
import locationW from "../../assets/icons/location-w.png";
import telNumber from "../../assets/icons/tel-number.png";
import telW from "../../assets/icons/tel-w.png";
import email from "../../assets/icons/email.png";
import emailW from "../../assets/icons/email-w.png";
import facebook from "../../assets/icons/facebook.png";
import facebookW from "../../assets/icons/facebook-w.png";
import google from "../../assets/icons/google.png";
import googleW from "../../assets/icons/google-w.png";
import ContactItem from "./components/ContactItem";
import OpeningHours from "./components/OpeningHours";
import payment from "../../assets/images/payment.png"
import paymentB from "../../assets/images/payment-brown.png"
import { useLocation } from "react-router";

function Contact() {

  const { pathname } = useLocation();

  return (
    <section id="kontakt"
      className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-15 pb-10 px-5 md:px-15 lg:px-20 3xl:px-40 gap-10  2xl:gap-15 font-[Bree_serif] ${pathname !== '/' ? 'bg-[#38271F] text-[#FFFDF8]' : 'bg-[#F5F0E6] text-[#2B241F] '}`}>


      <div className="flex  flex-col gap-2 ">

        <div className="flex items-center mb-6 gap-2">
          <img src={hospodaLogo} alt="" className="w-[90px] h-[90px]" />

          <div className="flex flex-col text-2xl 2xl:text-4xl tracking-wide gap-1 ">
            <span>Hospůdka</span>
            <span>pod Boušovem</span>
          </div>
        </div>

        <ContactItem src={pathname !== '/'  ? locationW : location}>č.p 1, 345 62 Všekary-Holýšov</ContactItem>

        <ContactItem src={pathname !== '/'  ? telW : telNumber}>606 536 633</ContactItem>

        <ContactItem src={pathname !== '/'  ? emailW : email}>hospudkapodbousovem@email.cz</ContactItem>
        <ContactItem src={pathname !== '/'  ? facebookW : facebook}>Facebook</ContactItem>
        <ContactItem src={pathname !== '/'  ? googleW : google}>Google</ContactItem>

        <hr className={`my-4 max-w-[400px] ${pathname !== '/' ? 'text-[#FFFDF8]/20' : 'text-[#2B241F]/20'}`} />

        <div className="flex gap-2 pl-2 text-sm 2xl:text-base">
          <span>Provotovatel:</span>
          <span>Radek Štangl</span>
        </div>

        <div className="flex gap-2 pl-2 text-sm 2xl:text-base">
          <span>Odpovědná osoba:</span>
          <span>Radek Štangl</span>
        </div>

        <div className="flex gap-2 pl-2 text-sm 2xl:text-base">
          <span>IČ:</span>
          <span>14150280</span>
        </div>
      </div>


      <div className={`flex flex-col gap-4 pt-5 max-w-[350px]  ${pathname !== '/' ? 'xl:border-[#FFFDF8]/20' : 'xl:border-[#2B241F]/20'}`}>
        <p className="text-xl 2xl:text-2xl tracking-wide text-center">Otevírací doba</p>

        <div className="flex flex-col gap-3 md:gap-4">
          <OpeningHours closed={true} pathname={pathname}>Pondělí</OpeningHours>
          <OpeningHours openingHour="14:00" closingHour="18:30" closed={false} pathname={pathname}>Úterý</OpeningHours>
          <OpeningHours openingHour="14:00" closingHour="18:30" closed={false} pathname={pathname}>Středa</OpeningHours>
          <OpeningHours openingHour="14:00" closingHour="18:30" closed={false} pathname={pathname}>Čtvrtek</OpeningHours>
          <OpeningHours openingHour="14:00" closingHour="18:30" closed={false} pathname={pathname}>Pátek</OpeningHours>
          <OpeningHours openingHour="14:00" closingHour="23:30" closed={false} pathname={pathname}>Sobota</OpeningHours>
          <OpeningHours openingHour="14:00" closingHour="18:30" closed={false} pathname={pathname}>Neděle</OpeningHours>
        </div>
      </div>


      <div className="flex flex-col gap-2 w-full md:col-span-2 xl:col-span-1">
        <img src={pathname !== '/'  ? paymentB : payment} alt="" className="max-w-[450px] 3xl:max-w-[500px] max-h-[200px]" />

        <div>
          <p className="text-2xl mb-4">Mapa</p>
          <iframe className="w-full  3xl:w-[550px] h-[250px] 2xl:h-[300px] border border-[#D9A441]/5 rounded-sm" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Hosp%C5%AFdka%20pod%20Bou%C5%A1ovem%2C%20%C4%8D.p%2C%20V%C5%A1ekary-Hol%C3%BD%C5%A1ov%2C%20Czechia&zoom=19&maptype=roadmap"></iframe>
        </div>


      </div>
    </section>
  )
}

export default Contact;