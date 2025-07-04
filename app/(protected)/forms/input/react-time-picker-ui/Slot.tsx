import type { TSelectedTime } from "./types";
import { generateNumberSlots } from "./utils";
import { useEffect, useRef } from "react";

export interface ISlotProps {
  min?: number;
  max?: number;
  step?: number;
  selectedTime?: TSelectedTime;
  onClick?: (number: string) => void;
}
function Slot({
  min = 0,
  max = 59,
  step = 1,
  selectedTime,
  onClick,
}: ISlotProps) {
  const numbers = generateNumberSlots({ min, max, step });
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (selectedTime) {
      const idx = numbers.findIndex((num) => num === selectedTime);
      if (idx !== -1 && buttonRefs.current[idx]) {
        buttonRefs.current[idx]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [selectedTime, numbers]);

  return (
    <div className="custom-scrollbar flex h-[200px] flex-col overflow-y-auto">
      {numbers?.map((number, index) => (
        <button
          type="button"
          key={index}
          ref={(el) => {
            buttonRefs.current[index] = el;
          }}
          onClick={() => onClick?.(number)}
          className={`cursor-pointer ${
            selectedTime === number ? "bg-blue-500 text-white" : ""
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Slot;
