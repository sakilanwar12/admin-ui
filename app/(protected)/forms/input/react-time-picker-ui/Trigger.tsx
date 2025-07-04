import { useReactTimePickerContext } from "./ReactTimePickerUiProvider";

function Trigger() {
  const { toggle, value } = useReactTimePickerContext();
  return (
    <button
      type="button"
      onClick={toggle}
      className="h-12 border border-slate-400 rounded-md px-4 w-full text-left"
    >
      {value ? value : "Select Time"}
    </button>
  );
}

export default Trigger;
