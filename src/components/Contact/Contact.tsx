import hospodaLogo from "../../assets/images/hospudka-logo.png";
import location from "../../assets/icons/location.png";
import locationW from "../../assets/icons/location-w.png";
import tel from "../../assets/icons/tel.png";
import telW from "../../assets/icons/tel-w.png";
import email from "../../assets/icons/email.png";
import emailW from "../../assets/icons/email-w.png";
import facebook from "../../assets/icons/facebook.png";
import facebookW from "../../assets/icons/facebook-w.png";
import ContactItem from "./components/ContactItem";
import OpeningHours from "./components/OpeningHours";
import payment from "../../assets/images/payment.png"
import paymentB from "../../assets/images/payment-brown.png"
import { useLocation } from "react-router";

function Contact() {

  const { pathname } = useLocation();

  return (
    <section id="kontakt"
      className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-10 pb-8 px-5 md:px-15 lg:px-20 3xl:px-50 gap-10  2xl:gap-15 font-[Bree_serif] ${pathname !== '/' ? 'bg-[#38271F] text-[#FFFDF8]' : 'bg-[#F5F0E6] text-[#2B241F] '}`}>


      <div className="flex  flex-col gap-2 ">

        <div className="flex items-center mb-6 gap-2">
          <img src={hospodaLogo} alt="" className="w-[90px] h-[90px]" />

          <div className="flex flex-col text-2xl 2xl:text-3xl tracking-wide gap-1 ">
            <span>Hospůdka</span>
            <span>pod Boušovem</span>
          </div>
        </div>

        <ContactItem link="https://www.google.com/maps/place/Hosp%C5%AFdka+pod+Bou%C5%A1ovem/@49.604691,13.0426129,17z/data=!3m1!4b1!4m6!3m5!1s0x470abd006c185285:0xc9abed05071997f5!8m2!3d49.604691!4d13.0426129!16s%2Fg%2F11w240fq87!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D"  src={pathname !== '/'  ? locationW : location}>č.p 1, 345 62 Všekary-Holýšov</ContactItem>

        <ContactItem link="tel:+420606536633" src={pathname !== '/'  ? telW : tel}>606 536 633</ContactItem>

        <ContactItem link="mailto:hospudkapodbousovem@email.cz" src={pathname !== '/'  ? emailW : email}>hospudkapodbousovem@email.cz</ContactItem>
        <ContactItem link="https://www.facebook.com/profile.php?id=100093410382349" src={pathname !== '/'  ? facebookW : facebook}>Facebook</ContactItem>

        <hr className={`my-4 max-w-[400px] ${pathname !== '/' ? 'text-[#FFFDF8]/20' : 'text-[#2B241F]/20'}`} />

        <div className="flex gap-2 pl-2 text-sm ">
          <span>Provotovatel:</span>
          <span>Radek Štangl</span>
        </div>

        <div className="flex gap-2 pl-2 text-sm">
          <span>Odpovědná osoba:</span>
          <span>Radek Štangl</span>
        </div>

        <div className="flex gap-2 pl-2 text-sm ">
          <span>IČ:</span>
          <span>14150280</span>
        </div>
      </div>


      <div className={`flex flex-col gap-4 md:gap-6  pt-5 max-w-[320px]  ${pathname !== '/' ? 'xl:border-[#FFFDF8]/20' : 'xl:border-[#2B241F]/20'}`}>
        <p className="text-lg 2xl:text-xl tracking-wide text-center">Otevírací doba</p>

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
          <p className="text-xl mb-4">Mapa</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d457.0801312891659!2d13.042192638840696!3d49.6046223547894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470abd006c185285%3A0xc9abed05071997f5!2sHosp%C5%AFdka%20pod%20Bou%C5%A1ovem!5e0!3m2!1sen!2scz!4v1792084939020!5m2!1sen!2scz" className="w-full   h-[250px]  border border-[#D9A441]/5 rounded-sm" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
        </div>


      </div>
    </section>
  )
}

export default Contact;