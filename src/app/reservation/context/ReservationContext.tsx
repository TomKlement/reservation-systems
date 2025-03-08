"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

type ReservationData = {
  date: string | null;
  time: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type ReservationContextType = {
  reservation: ReservationData;
  setReservation: React.Dispatch<React.SetStateAction<ReservationData>>;
};

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

/**
 * ReservationProvider component:
 * Initializes the reservation state with today's date (formatted as "YYYY-MM-DD") and empty contact fields.
 * Provides the reservation data and setter function to its child components.
 */

export function ReservationProvider({ children }: { children: ReactNode }) {
 // Helper function to get today's date in "YYYY-MM-DD" format.
  const getTodayString = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [reservation, setReservation] = useState<ReservationData>({
    date: getTodayString(),
    time: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  return (
    <ReservationContext.Provider value={{ reservation, setReservation }}>
      {children}
    </ReservationContext.Provider>
  );
}

/**
 * Custom hook to access the ReservationContext.
 * Throws an error if used outside of a ReservationProvider.
 */
export function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}
