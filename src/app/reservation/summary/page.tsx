"use client";

import { useReservation } from "../context/ReservationContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { format } from "date-fns";
import { cs } from "date-fns/locale";


/**
 * SummaryPage Component:
 * Displays a summary of the reservation details including the formatted date, selected time, and the user's contact information.
 * On clicking the "Rezervace" button, it submits the reservation to the backend.
 */
export default function SummaryPage() {

    const [loading, setLoading] = useState(false);

    const { reservation } = useReservation();
    const router = useRouter();


    let formattedDate = "";
    if (reservation.date) {
      formattedDate = format(reservation.date, "EEEE d.M.yyyy", { locale: cs });
    }

    /**
    * handleReservation:
    * Sends a POST request to the /api/reservation endpoint with the reservation data.
    * Displays an alert based on whether the reservation was successful.
    * Sets loading state during the request.
    */
    const handleReservation = async () => {
        setLoading(true);
        try {
          const res = await fetch("/api/reservation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              date: reservation.date,
              time: reservation.time,
              firstName: reservation.firstName,
              lastName: reservation.lastName,
              email: reservation.email,
              phone: reservation.phone,
            }),
          });

          const data = await res.json();

          if (data.success) {
            alert("Rezervace proběhla úspěšně!");

          } else {
            alert("Nastala chyba při ukládání rezervace.");
          }
        } catch (error) {
          console.error("Chyba při rezervaci:", error);
          alert("Chyba komunikace se serverem.");
        } finally {
          setLoading(false);
        }
      };

  
    return (
        <div className="bg-white p-6 rounded-lg shadow text-center max-w-lg mx-auto">

                <div className="bg-secondary p-6 rounded-full space-y-2">
                    <p className="text-xl uppercase">{formattedDate}</p>
                    <p className="text-xl">{reservation.time}</p>
                    <p>Jméno: {reservation.firstName}</p>
                    <p>Přijmení: {reservation.lastName}</p>
                    <p>E-mail: {reservation.email}</p>
                    <p>Telefon: {reservation.phone}</p>
                </div>

                <div className="col-span-2 flex justify-center">
                    <button onClick={handleReservation} className={`mt-4 px-6 py-2 rounded-md font-semibold bg-button text-black`} disabled={loading}>
                        {loading ? "Rezervuji…" : "Rezervace"}
                    </button>
                </div>

        </div>
    );
};