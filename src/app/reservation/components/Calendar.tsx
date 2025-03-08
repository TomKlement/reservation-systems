"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import {cs} from "date-fns/locale"

/**
 * Props for the Calendar component:
 * - selected: a string in "YYYY-MM-DD" format, or undefined
 * - onSelect: a callback that receives the chosen date as a string ("YYYY-MM-DD")
 */

interface CalendarProps {
  selected: string | undefined;
  onSelect: (dateString: string) => void;
}

/**
 * Calendar component:
 * Converts the `selected` string (e.g., "2025-03-09") to a Date object for DayPicker.
 * Renders a single-selection DayPicker
 * When a date is selected in the calendar, it calls onSelect(dateString).
 * Disables past dates
 */

export default function Calendar({ selected, onSelect}: CalendarProps) {

  const parsedDate = selected ? new Date(`${selected}T12:00:00`) : undefined;

  function handleDayPickerSelect(day: Date | undefined) {
    if (!day) return;
    const yyyy = day.getFullYear();
    const mm = String(day.getMonth() + 1).padStart(2, "0");
    const dd = String(day.getDate()).padStart(2, "0");
    const dateString = `${yyyy}-${mm}-${dd}`;
    onSelect(dateString);
  }

  return (
    <div className="p-6 rounded-lg shadow-lg ">

        <DayPicker 
            locale={cs}
            showOutsideDays
            fixedWeeks
            mode="single" required
            selected={parsedDate}
            onSelect={handleDayPickerSelect}
            disabled={{ before: new Date() }}
            modifiersClassNames={{
              selected: "bg-secondary text-buttonText rounded-md",
              disabled: "bg-gray-200 text-gray-400 opacity-70 cursor-not-allowed rounded-md"
            }}
            classNames={{
                cell: "text-center",
                head_cell: "uppercase text-sm text-text/70 p-2",
                day_button: "w-16 h-10",
                chevron: "fill-tertiary",
                nav: "flex justify-between items-center w-full",
                month_caption: "text-lg font-bold text-center flex-1 pb-6 -mt-16",
                today: ''
            }}   
        />
    </div>
  );
}
