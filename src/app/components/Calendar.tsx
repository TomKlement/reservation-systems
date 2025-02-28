"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import {cs} from "date-fns/locale"

export default function Calendar() {
    const [selected, setSelected] = useState<Date>();

  return (
    <div className="p-6 rounded-lg shadow-lg ">
        <DayPicker 
            locale={cs}
            showOutsideDays
            fixedWeeks
            mode="single" required
            selected={selected}
            onSelect={setSelected}
            disabled={{ before: new Date() }}   
            modifiersClassNames={{
                selected: "bg-secondary text-buttonText rounded-md",
              disabled: "opacity-50 text-gray-500",
            }}
            classNames={{
                cell: "text-center",
                head_cell: "uppercase text-sm text-text/70 p-2",
                day_button: "w-16 h-10",
                chevron: "fill-tertiary",
                nav: "flex justify-between items-center w-full",
                month_caption: "text-lg font-bold text-center flex-1 pb-6 -mt-16",
            }}   
        />
    </div>
  );
}
