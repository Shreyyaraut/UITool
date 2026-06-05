import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function SnackBarComponent({
  item,
}: Props) {
  const variant =
    item.snackBarVariant || "information";

  const titleMap = {
    information: "Information",
    success: "Success",
    error: "Error",
    warning: "Warning",
  };

  const messageMap = {
    information: "This is an information message",
    success: "This is a success message",
    error: "This is an error message",
    warning: "This is a warning message",
  };

  return (
    <div className={`snackbar-box ${variant}`}>
      <h4>{titleMap[variant]}</h4>
      <p>{messageMap[variant]}</p>
    </div>
  );
}