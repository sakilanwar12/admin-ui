export type TNullish = null | undefined;
export type TSelectedTime = string | TNullish;

// ReactTimePickerUi Props
export interface IReactTimePickerUiProps {
  label?: string;
  value?: TSelectedTime;
  onChange?: (value: TSelectedTime) => void;
  error?: string;
}
