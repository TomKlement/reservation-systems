type AvailableTimesProps = {
    selectedTime: string | undefined;
    onTimeSelect: (time: string) => void;
  };
  
  const AvailableTimes: React.FC<AvailableTimesProps> = ({ selectedTime, onTimeSelect }) => {

    const availableTimes = ["07:00 - 08:00", "08:00 - 09:00", "09:00 - 10:00", "10:00 - 11:00",
                            "11:00 - 12:00", "12:00 - 13:00", "13:00 - 14:00",
                            "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00", "18:00 - 19:00"];
  
    return (
      <div className="grid grid-cols-2">
        {availableTimes.map((time) => (
          <button
            key={time}
            className={`px-4 m-3 py-2 rounded-md ${
              selectedTime === time ? "bg-highlight text-white" : "bg-secondary"
            }`}
            onClick={() => onTimeSelect(time)}
          >
            {time}
          </button>
        ))}
      </div>
    );
  };
  
  export default AvailableTimes;