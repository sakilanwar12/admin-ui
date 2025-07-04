import type { TSelectedTime } from "./types";

export type TGenerateNumberSlot = {
  min: number;
  max: number;
  step: number;
};

export type TGenerateNumberSlotReturn = string[];

export const generateNumberSlots = ({
  min = 0,
  max = 59,
  step,
}: TGenerateNumberSlot): TGenerateNumberSlotReturn => {
  const slots = [];
  for (let i = min; i <= max; i += step) {
    slots.push(i.toString().padStart(2, "0"));
  }
  return slots;
};

// get time portion
export const getTimePortion = (
  time?: TSelectedTime,
  portion?: "hours" | "minutes" | "seconds"
): string | undefined => {
  if (!time || !portion) {
    return "00";
  }
  const [hours, minutes, seconds] = time.split(":");
  const hour = parseInt(hours);
  const minute = parseInt(minutes);
  const second = parseInt(seconds);

  if (portion === "hours") {
    return hour.toString().padStart(2, "0");
  } else if (portion === "minutes") {
    return minute.toString().padStart(2, "0");
  } else if (portion === "seconds") {
    return second.toString().padStart(2, "0");
  }
};

// handle Field Change
type THandleChangeProps = {
  value: string;
  portion: "hours" | "minutes" | "seconds";
  setSelectedTime: React.Dispatch<React.SetStateAction<TSelectedTime>>;
  onChange?: (value: TSelectedTime) => void;
  selectedTime: TSelectedTime;
};
export const handleChange = ({
  value,
  portion,
  setSelectedTime,
  onChange,
  selectedTime,
}: THandleChangeProps) => {
  setSelectedTime((prev) => {
    const [hours, minutes, seconds] = prev?.split(":") || [];
    if (portion === "hours") {
      return `${value}:${minutes}:${seconds}`;
    } else if (portion === "minutes") {
      return `${hours}:${value}:${seconds}`;
    } else if (portion === "seconds") {
      return `${hours}:${minutes}:${value}`;
    }
  });
  onChange?.(selectedTime);
};
