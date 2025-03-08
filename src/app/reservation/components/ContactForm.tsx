"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useReservation } from "../context/ReservationContext";


type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};


/**
 * ContactForm Component:
 * Uses react-hook-form to manage input validation and submission.
 * Prefills form fields with data from the reservation context (firstName, lastName, etc.).
 * On submit, updates the reservation context and navigates to /reservation/summary.
 */
export default function ContactForm( ) {

  // Access current reservation data and update function from context
  const { reservation, setReservation } = useReservation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      firstName: reservation.firstName,
      lastName: reservation.lastName,
      email: reservation.email,
      phone: reservation.phone,
    },
  });
  
  /**
   * Called when the form is submitted successfully.
   * Updates reservation data in context and redirects to the summary page.
   */
  const onSubmit = (data: ContactFormData) => {
    setReservation((prev) => ({
      ...prev,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    }));


    router.push("/reservation/summary");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Kontaktní údaje</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="block text-sm font-semibold mb-1">Jméno</label>
          <input
            {...register("firstName", { required: "Jméno je povinné" })}
            className="border border-stroke rounded px-3 py-2 w-full 
                       focus:outline-none focus:ring-2 focus:ring-highlight"
            placeholder="Zadejte jméno"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>


        <div>
          <label className="block text-sm font-semibold mb-1">Příjmení</label>
          <input
            {...register("lastName", { required: "Příjmení je povinné" })}
            className="border border-stroke rounded px-3 py-2 w-full 
                       focus:outline-none focus:ring-2 focus:ring-highlight"
            placeholder="Zadejte příjmení"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">E-mail</label>
          <input
            {...register("email", {
              required: "E-mail je povinný",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "Neplatná e-mailová adresa",
              },
            })}
            className="border border-stroke rounded px-3 py-2 w-full 
                       focus:outline-none focus:ring-2 focus:ring-highlight"
            placeholder="např. jan.novak@email.cz"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>


        <div>
          <label className="block text-sm font-semibold mb-1">Telefon</label>
          <input
            {...register("phone")}
            className="border border-stroke rounded px-3 py-2 w-full 
                       focus:outline-none focus:ring-2 focus:ring-highlight"
            placeholder="+420 777 123 456"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-button text-buttonText font-semibold px-6 py-2 rounded mt-2
                       hover:opacity-90 transition-opacity"
          >
            Pokračovat
          </button>
        </div>
      </form>
    </div>
  );
}
