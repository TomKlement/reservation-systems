"use client";
import React, { useEffect, useState } from "react";

/**
 * Props for the AllTimeSlots component:
 * selectedTime: the currently selected time slot (e.g. "09:00 - 10:00"), or undefined
 * onTimeSelect: a function to handle the chosen time slot
 * date: date (string in format "YYYY-MM-DD")
 */
type AllTimeSlotsProps = {
  selectedTime: string | undefined;
  onTimeSelect: (time: string) => void;
  date?: string; 
};


const ALL_TIME_SLOTS = ["07:00 - 08:00", "08:00 - 09:00", "09:00 - 10:00",
                        "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00",
                        "13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00",
                        "16:00 - 17:00", "17:00 - 18:00", "18:00 - 19:00" ];


/**
 * AllTimeSlots Component:
 * 1) Fetches occupied times for the given date.
 * 2) Renders all possible time slots.
 * 3) Grays out occupied slots.
 * 4) Highlights the selected time slot.
 * 5) Calls onTimeSelect(slot) when a free slot is clicked.
 */

const AllTimeSlots: React.FC<AllTimeSlotsProps> = ({selectedTime, onTimeSelect, date}) => {
  
  const [occupiedTimes, setOccupiedTimes] = useState<string[]>([]);

  // Whenever the date changes, fetch times from /api/times
  useEffect(() => {
    if (!date) {
      setOccupiedTimes([]);
      return;
    }

    fetch(`/api/times?date=${date}`)
      .then((res) => res.json())
      .then((data: { occupiedTimes: string[] }) => {
        console.log("API data pro den", date, data);
        setOccupiedTimes(data.occupiedTimes || []);
      })
      .catch((err) => {
        console.error("Chyba při načítání obsazených časů:", err);
      });
  }, [date]);

  return (
    <div className="grid grid-cols-2 gap-2">

      {ALL_TIME_SLOTS.map((slot) => {

        const isOccupied = occupiedTimes.includes(slot);
        const isSelected = slot === selectedTime;

        return (
          <button
            key={slot}
            onClick={() => !isOccupied && onTimeSelect(slot)}
            disabled={isOccupied}
            className={`px-4 py-2 rounded text-sm font-semibold 
              ${
                isOccupied
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : isSelected
                  ? "bg-highlight text-white"
                  : "bg-secondary text-black hover:opacity-90"
              }`}
          >
            {slot}
          </button>
        );
      })}
    </div>
  );
};

export default AllTimeSlots;
