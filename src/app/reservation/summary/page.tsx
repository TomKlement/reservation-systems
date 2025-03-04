"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { format } from "date-fns";
import { cs } from "date-fns/locale";



export default function ContactPage() {
    const searchParams = useSearchParams();
    const date = searchParams.get("date")!;
    const time = searchParams.get("time");
    const firstName = searchParams.get("firstName");
    const lastName = searchParams.get("lastName");
    const email = searchParams.get("email");
    const phone = searchParams.get("phone");
    const dateObj = new Date(date);
    const formattedDate = format(dateObj, "EEEE d.M.yyyy", {locale: cs});

  
    return (
        <div className="bg-white p-6 rounded-lg shadow text-center max-w-lg mx-auto">

                <div className="bg-secondary p-6 rounded-full space-y-2">
                    <p className="text-xl uppercase">{formattedDate}</p>
                    <p className="text-xl">{time}</p>
                    <p>Jméno: {firstName}</p>
                    <p>Přijmení: {lastName}</p>
                    <p>E-mail: {email}</p>
                    <p>Telefon: {phone}</p>
                </div>

                <div className="col-span-2 flex justify-center">
                    <button className={`mt-4 px-6 py-2 rounded-md font-semibold bg-button text-black`}>
                    Rezervace
                    </button>
                </div>

        </div>
    );
};