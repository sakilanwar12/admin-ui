export type TNullish = null | undefined;
export type TSelectedTime = string | TNullish;

// TimePicker Props
export interface ITimePickerProps {
    label?: string;
    value?: TSelectedTime;
    onChange?: (value: TSelectedTime) => void;
    error?: string;
  }