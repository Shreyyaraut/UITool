import type { UIComponent } from "../types";

interface Props {
  item: UIComponent;
}

function BroadbandIcon({ stroke }: { stroke: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="15" width="20" height="6" rx="1" />
      <path d="M5 12a10 10 0 0 1 14 0" />
      <path d="M8 9a6 6 0 0 1 8 0" />
      <line x1="12" y1="18" x2="12" y2="18" strokeWidth="3" />
    </svg>
  );
}

export default function IconWithCardComponent({ item }: Props) {
  const variant = item.iconWithCardVariant || "filled";
  const isFilled = variant === "filled";

  return (
    <div className="icon-with-card-grid">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className={`icon-with-card-item ${
            isFilled ? "filled" : "outlined"
          }`}
        >
          <BroadbandIcon
            stroke={isFilled ? "#222" : "#222"}
          />
          <span className="icon-with-card-label">
            Broadband
          </span>
        </div>
      ))}
    </div>
  );
}