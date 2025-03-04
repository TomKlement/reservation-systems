"use client";

import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import { cs } from "date-fns/locale";
import ContactForm from "@/app/reservation/components/ContactForm"; 


export default function ContactPage() {
  const searchParams = useSearchParams();


  const date = searchParams.get("date"); 
  const time = searchParams.get("time");

  
  let formattedDate;
  if (date) {
    const dateObj = new Date(date);
    formattedDate = format(dateObj, "EEEE d.M.yyyy", { locale: cs });
  }

  return (
    <div className="grid grid-cols-2 gap-8">

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Vybrané datum</h2>
        <div className="bg-secondary p-6 rounded-full text-center">
          <p className="text-xl uppercase">{formattedDate}</p>
          <p className="text-lg">{time}</p>
        </div>
      </div>


      <ContactForm dateParam={date} timeParam={time} />
    </div>
  );
}
