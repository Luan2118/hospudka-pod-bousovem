import hospodaLogo from "../../assets/images/hospudka-logo.png";
import location from "../../assets/icons/location.png";
import telNumber from "../../assets/icons/tel-number.png";
import email from "../../assets/icons/email.png";
import facebook from "../../assets/icons/facebook.png";
import google from "../../assets/icons/google.png";
import ContactItem from "./components/ContactItem";
import OpeningHours from "./components/OpeningHours";
import payment from "../../assets/images/payment.png"

function Contact() {

  return (
    <section id="kontakt" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-[#F5F0E6] pt-15 pb-10 px-5 md:px-15 lg:px-20 3xl:px-40 gap-10  2xl:gap-15 font-[Bree_serif] text-[#2B241F]">


      <div className="flex  flex-col gap-2 ">

        <div className="flex items-center mb-6 gap-2">
          <img src={hospodaLogo} alt="" className="w-[90px] h-[90px]" />

          <div className="flex flex-col text-2xl 2xl:text-4xl tracking-wide gap-1 ">
            <span>Hospůdka</span>
            <span>pod Boušovem</span>
          </div>
        </div>

        <ContactItem src={location}>č.p 1, 345 62 Všekary-Holýšov</ContactItem>

        <ContactItem src={telNumber}>606 536 633</ContactItem>

        <ContactItem src={email}>hospudkapodbousovem@email.cz</ContactItem>
        <ContactItem src={facebook}>Facebook</ContactItem>
        <ContactItem src={google}>Google</ContactItem>

        <hr className="my-4 max-w-[400px]" />

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


      <div className="flex flex-col gap-4 pt-5 xl:border xl:px-15 2xl:px-20 xl:border-t-0 xl:border-b-0 xl:border-[#000000]/20 max-w-[380px] xl:max-w-none">
        <p className="text-xl 2xl:text-2xl tracking-wide">Otevírací doba</p>

        <div className="flex flex-col gap-3">
          <OpeningHours closed={true}>Pondělí</OpeningHours>
          <OpeningHours openingHour="14:00" closingHour="18:30" closed={false}>Úterý</OpeningHours>
          <OpeningHours openingHour="14:00" closingHour="18:30" closed={false}>Středa</OpeningHours>
          <OpeningHours openingHour="14:00" closingHour="18:30" closed={false}>Čtvrtek</OpeningHours>
          <OpeningHours openingHour="14:00" closingHour="18:30" closed={false}>Pátek</OpeningHours>
          <OpeningHours openingHour="14:00" closingHour="23:30" closed={false}>Sobota</OpeningHours>
          <OpeningHours openingHour="14:00" closingHour="18:30" closed={false}>Neděle</OpeningHours>
        </div>
      </div>


      <div className="flex flex-col gap-2 w-full md:col-span-2 xl:col-span-1">
        <img src={payment} alt="" className="max-w-[450px] 3xl:max-w-[500px]" />

        <div>
          <p className="text-2xl mb-4">Mapa</p>
          <iframe className="w-full  3xl:w-[550px] h-[250px] 2xl:h-[300px] border border-[#D9A441]/5 rounded-sm"   src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Hosp%C5%AFdka%20pod%20Bou%C5%A1ovem%2C%20%C4%8D.p%2C%20V%C5%A1ekary-Hol%C3%BD%C5%A1ov%2C%20Czechia&zoom=19&maptype=roadmap"></iframe>
        </div>


      </div>
    </section>
  )
}

export default Contact;