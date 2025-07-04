"use client";

import { useState } from "react";
import type { IReactTimePickerUiProps, TSelectedTime } from "./types";
import "./style.css";
import DropDownPanel from "./DropDownPanel";
import { ReactTimePickerUiProvider } from "./ReactTimePickerUiProvider";

function ReactTimePickerUi({
  label,
  value,
  onChange,
  error,
}: IReactTimePickerUiProps) {
  const [selectedTime, setSelectedTime] = useState<TSelectedTime>(
    value || "00:00:00"
  );

  return (
    <ReactTimePickerUiProvider>
      <DropDownPanel
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        onChange={onChange}
      />
    </ReactTimePickerUiProvider>
  );
}

export default ReactTimePickerUi;
