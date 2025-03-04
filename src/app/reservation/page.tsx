"use client";

import Calendar from "@/app/components/Calendar"
import AvailableTimes from "@/app/components/AvailableTimes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ReservationPage() {
  const router = useRouter();

  const defaultDate = new Date();
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(defaultDate);


  const handleTimeSelect = (time: string) => {
    setSelectedTime((prevTime) => (prevTime === time ? undefined : time));
  };

  // selected new date =>date will unselect
  useEffect(() => {
    setSelectedTime(undefined);
  }, [selectedDate]);

  const handleContinue = () => {

    if (!selectedDate || !selectedTime) {
      alert("Prosím vyberte datum i čas.");
      return;
    }

    router.push(`/reservation/contact?date=${selectedDate}&time=${selectedTime}`);
  };


  return (
    <div className="grid grid-cols-2 gap-8">

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Vyberte datum</h2>
        <Calendar selected={selectedDate} onSelect={setSelectedDate} />
      </div>


      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Dostupné termíny</h2>
        <AvailableTimes selectedTime={selectedTime} onTimeSelect={handleTimeSelect} />
      </div>

     
      <div className="col-span-2 flex justify-end">
        <button onClick={handleContinue} className={`mt-4 px-6 py-2 rounded-md font-semibold ${selectedTime ? "bg-button text-black" : "bg-gray-400 text-gray-700 cursor-not-allowed" }`} disabled={!selectedDate || !selectedTime}>
          Pokračovat
        </button>
      </div>
    </div>
  );
}
