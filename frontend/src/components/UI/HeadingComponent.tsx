import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function HeadingComponent({
  item,
}: Props) {
  const headingStyles = {
    display: {
      fontSize: "32px",
      fontWeight: 700,
    },

    headline: {
      fontSize: "28px",
      fontWeight: 700,
    },

    title: {
      fontSize: "24px",
      fontWeight: 700,
    },

    subtitle: {
      fontSize: "20px",
      fontWeight: 700,
    },

    body: {
      fontSize: "16px",
      fontWeight: 500,
    },

    caption: {
      fontSize: "12px",
      fontWeight: 500,
    },
  };

  const style =
    headingStyles[
      item.headingLevel || "title"
    ];

  return (
    <div
      className="preview-heading"
      style={{
        ...style,
        color:
          item.textColor || "#111827",

        backgroundColor:
          item.bgColor || "transparent",

        borderRadius:
          item.borderRadius || 0,

        border: item.borderColor
          ? `1px solid ${item.borderColor}`
          : "none",

        // padding: "px",
      }}
    >
      {item.label}
    </div>
  );
}