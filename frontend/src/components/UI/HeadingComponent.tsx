import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function HeadingComponent({ item }: Props) {
  const headingStyles = {
  display: {
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "24px",
  },
  headline: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "20px",
  },
  title: {
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "18px",
  },
  subtitle: {
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "16px",
  },
  body: {
    fontSize: "11px",
    fontWeight: 500,
    lineHeight: "14px",
  },
  caption: {
    fontSize: "10px",
    fontWeight: 500,
    lineHeight: "12px",
  },
  overline: {
    fontSize: "8px",
    fontWeight: 500,
    lineHeight: "10px",
  },
} as const;

  const style =
    headingStyles[
      item.headingLevel || "title"
    ];

  return (
    <div
      className="preview-heading"
      style={{
        ...style,
        fontFamily: "Inter, Arial, sans-serif",
        color: item.textColor || "#000000",
        backgroundColor: item.bgColor || "transparent",
        borderRadius: item.borderRadius || 0,
        border: item.borderColor
          ? `1px solid ${item.borderColor}`
          : "none",
      }}
    >
      {item.label}
    </div>
  );
}