"use client";

import Calendar from "@/app/reservation/components/Calendar"
import AllTimeSlots from "@/app/reservation/components/AllTimeSlots"
import { useRouter } from "next/navigation";
import { useReservation } from "./context/ReservationContext";

/**
 * ReservationPage Component:
 * Displays two sections: one for selecting a date using the Calendar component and one for selecting an available time slot using the AllTimeSlots component.
 * The "Continue" button becomes enabled only when both a date and time are selected.
 * When "Continue" is clicked, the page navigates to the contact information step.
 */

export default function ReservationPage() {

  const router = useRouter();
  const { reservation, setReservation } = useReservation();

    /**
   * handleDateSelect:
   * Called when a date is selected from the Calendar.
   * Updates the reservation context with the new date and resets the time.
   * The selected date in "YYYY-MM-DD" format.
   */

  function handleDateSelect(dateString: string) {
    setReservation(prev => ({
      ...prev,
      date: dateString,
      time: null,
    }));
  }
    /**
   * handleTimeSelect:
   * Called when a time slot is selected from AllTimeSlots.
   * Updates the reservation context with the selected time.
   * The selected time slot (e.g., "09:00 - 10:00").
   */

  const handleTimeSelect = (time: string) => {
    setReservation((prev) => ({
      ...prev,
      time,
    }));
  };

  const handleContinue = () => {
    router.push("/reservation/contact");
  };
  

  return (
    <div className="grid grid-cols-2 gap-8">

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Vyberte datum</h2>
        <Calendar selected={reservation.date || undefined} onSelect={handleDateSelect} />
      </div>


      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Dostupné termíny</h2>
        <AllTimeSlots selectedTime={reservation.time || undefined} onTimeSelect={handleTimeSelect} date={reservation.date || undefined}/>
      </div>

     
      <div className="col-span-2 flex justify-end">
        <button onClick={handleContinue} className={`mt-4 px-6 py-2 rounded-md font-semibold ${reservation.date && reservation.time ? "bg-button text-black": "bg-gray-400 text-gray-700 cursor-not-allowed"}`} disabled={!reservation.date || !reservation.time}>
          Pokračovat
        </button>
      </div>
    </div>
  );
}