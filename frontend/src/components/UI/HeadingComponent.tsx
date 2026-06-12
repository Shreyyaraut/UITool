import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function HeadingComponent({ item }: Props) {
  const headingStyles = {
  display: {
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "40px",
  },
  headline: {
    fontSize: "28px",
    fontWeight: 700,
    lineHeight: "36px",
  },
  title: {
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "32px",
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "24px",
  },
  body: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
  },
  caption: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
  },
  overline: {
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "16px",
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