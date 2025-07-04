import Slot from "./Slot";
import { IReactTimePickerUiProps, TSelectedTime } from "./types";
import { getTimePortion, handleChange } from "./utils";

interface IDropDownPanelProps extends IReactTimePickerUiProps {
  selectedTime: TSelectedTime;
  setSelectedTime: React.Dispatch<React.SetStateAction<TSelectedTime>>;
}
function DropDownPanel({
  selectedTime,
  setSelectedTime,
  onChange,
}: IDropDownPanelProps) {
  return (
    <div className="w-full p-4">
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
