"use client";

import { useState } from "react";
import type { IReactTimePickerUiProps, TSelectedTime } from "./types";
import "./style.css";
import DropDownPanel from "./DropDownPanel";
import { ReactTimePickerUiProvider } from "./ReactTimePickerUiProvider";
import Trigger from "./Trigger";

function ReactTimePickerUi({
  label,
  value,
  onChange,
  error,
}: IReactTimePickerUiProps) {
  const [selectedTime, setSelectedTime] = useState<TSelectedTime | null>(value);

  return (
    <ReactTimePickerUiProvider
      label={label}
      value={selectedTime}
      onChange={onChange}
      setSelectedTime={setSelectedTime}
      error={error}
    >
      <Trigger />
      <DropDownPanel />
    </ReactTimePickerUiProvider>
  );
}

export default ReactTimePickerUi;
