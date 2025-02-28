import Calendar from "@/app/components/Calendar"

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-8">

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Vyberte datum</h2>
        <Calendar />
      </div>


      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Dostupné termíny</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-secondary text-black py-2 px-4 rounded-lg">08:00 - 09:00</button>
          <button className="bg-secondary text-black py-2 px-4 rounded-lg">09:00 - 10:00</button>
        </div>
      </div>

     
      <div className="col-span-2 flex justify-end">
        <button className="bg-primary text-white px-6 py-3 rounded-lg">Pokračovat</button>
      </div>
    </div>
  );
}
