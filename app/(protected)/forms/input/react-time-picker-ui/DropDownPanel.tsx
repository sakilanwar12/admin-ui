import { useReactTimePickerContext } from "./ReactTimePickerUiProvider";
import Slot from "./Slot";
import { getTimePortion, handleChange } from "./utils";

function DropDownPanel() {
  const {
    isOpen,
    value: selectedTime,
    onChange,
    setSelectedTime,
  } = useReactTimePickerContext();
  if (!isOpen) {
    return null;
  }
  return (
    <div className=" p-4 absolute top-full mt-3 w-full h-fit z-50 border border-slate-200 rounded-md shadow-sm">
      <div className="grid grid-cols-3">
        <Slot
          min={0}
          max={23}
          step={1}
          selectedTime={getTimePortion(selectedTime, "hours")}
          onClick={(value) =>
            handleChange({
              value,
              portion: "hours",
              selectedTime,
              setSelectedTime,
              onChange,
            })
          }
        />
        <Slot
          min={0}
          max={59}
          step={1}
          selectedTime={getTimePortion(selectedTime, "minutes")}
          onClick={(value) =>
            handleChange({
              value,
              portion: "minutes",
              selectedTime,
              setSelectedTime,
              onChange,
            })
          }
        />
        <Slot
          min={0}
          max={59}
          step={1}
          selectedTime={getTimePortion(selectedTime, "seconds")}
          onClick={(value) =>
            handleChange({
              value,
              portion: "seconds",
              selectedTime,
              setSelectedTime,
              onChange,
            })
          }
        />
      </div>
    </div>
  );
}

export default DropDownPanel;
