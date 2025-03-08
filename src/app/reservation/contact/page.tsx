"use client";

import { useReservation } from "../context/ReservationContext";
import { format } from "date-fns";
import { cs } from "date-fns/locale";
import ContactForm from "@/app/reservation/components/ContactForm"; 


/**
 * ContactPage Component:
 * Displays the selected reservation date and time in a formatted style.
 * Renders the ContactForm component for user to enter contact details.
 */
export default function ContactPage() {

  // Access current reservation details from the context
  const { reservation } = useReservation();

  let formattedDate;

  if (reservation.date) {
    formattedDate = format(reservation.date, "EEEE d.M.yyyy", { locale: cs });
  }

  return (
    <div className="grid grid-cols-2 gap-8">

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Vybrané datum</h2>
        <div className="bg-secondary p-6 rounded-full text-center">
          <p className="text-xl uppercase">{formattedDate}</p>
          <p className="text-lg">{reservation.time}</p>
        </div>
      </div>


      <ContactForm />
    </div>
  );
}
