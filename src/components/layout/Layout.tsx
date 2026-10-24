import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import Contact from "../Contact/Contact";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { client } from "../../sanity/sanityClient";
import type { ContactContext, ContactData } from "../../types/contact";
import type { OpeningHoursData, OpeningHoursState } from "../../types/openingHours";

const CONTACT_QUERY = `
  *[_type == "contact"][0] {
    phoneNumber,
    email,
    facebookUrl
  }
`;

const OPENING_HOURS_QUERY = `
  *[_type == "openingHours"][0] {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
  }
`;

function Layout() {

  const { hash, pathname } = useLocation();

  const [contactState, setContactState] = useState<ContactContext>({
    contact: null,
    loading: true,
    error: null,
  });

  const [openingHoursState, setOpeningHoursState] = useState<OpeningHoursState>({
    openingHours: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let active = true;

    async function getContact() {
      try {
        const contact = await client.fetch<ContactData | null>(CONTACT_QUERY);

        if (active) {
          setContactState({ contact, loading: false, error: null });
        }
      } catch (error) {
        if (active) {
          setContactState({
            contact: null,
            loading: false,
            error: "Kontaktní údaje se nepodařilo načíst.",
          });
          console.error(error);
        }
      }
    }

    getContact();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;

    async function getOpeningHours() {
      try {
        const openingHours = await client.fetch<OpeningHoursData | null>(OPENING_HOURS_QUERY);

        if (active) {
          setOpeningHoursState({ openingHours, loading: false, error: null });
        }
      } catch (error) {
        if (active) {
          setOpeningHoursState({
            openingHours: null,
            loading: false,
            error: "Otevírací dobu se nepodařilo načíst.",
          });
          console.error(error);
        }
      }
    }

    getOpeningHours();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }, [hash, pathname]);

  return (
    <div className="h-screen relative ">

      <Navbar facebookUrl={contactState.contact?.facebookUrl?.trim()} />

      <main>
        <Outlet context={{ ...contactState, openingHoursState }} />
      </main>
      <Contact {...contactState} openingHoursState={openingHoursState} />
      <Footer />

    </div>
  )
}

export default Layout;
