import type { UIComponent } from "../types";

type FieldType =
  | "text"
  | "textarea"
  | "color"
  | "number"
  | "select";

interface PropertyField {
  key: keyof UIComponent;
  label: string;
  type: FieldType;
  options?: {
    label: string;
    value: string;
  }[];
}

interface Props {
  selectedComponent: UIComponent | null;
  updateComponent: (
    id: string,
    updatedData: Partial<UIComponent>
  ) => void;
  closePopup: () => void;
}

const commonFields: PropertyField[] = [
  {
    key: "label",
    label: "Label",
    type: "text",
  },
  {
    key: "bgColor",
    label: "Background Color",
    type: "color",
  },
  {
    key: "textColor",
    label: "Text Color",
    type: "color",
  },
  {
    key: "borderColor",
    label: "Border Color",
    type: "color",
  },
  {
    key: "borderRadius",
    label: "Border Radius",
    type: "number",
  },
];

const propertyFieldsByType: Record<
  string,
  PropertyField[]
> = {
  button: [
    commonFields[0],
    {
      key: "buttonVariant",
      label: "Button Style",
      type: "select",
      options: [
        { label: "Filled", value: "filled" },
        { label: "Outline", value: "outline" },
        { label: "Text", value: "text" },
      ],
    },
    ...commonFields.slice(1),
  ],

  card: [
    commonFields[0],
    {
      key: "description",
      label: "Description",
      type: "textarea",
    },
    ...commonFields.slice(1),
  ],

  input: [
    commonFields[0],
    {
      key: "placeholder",
      label: "Placeholder",
      type: "text",
    },
    ...commonFields.slice(1),
  ],

  textarea: [
    commonFields[0],
    {
      key: "description",
      label: "Content",
      type: "textarea",
    },
    {
      key: "placeholder",
      label: "Placeholder",
      type: "text",
    },
    ...commonFields.slice(1),
  ],

  heading: [
    commonFields[0],
    commonFields[2],
    commonFields[1],
    commonFields[3],
    commonFields[4],
  ],

  paragraph: [
    commonFields[0],
    {
      key: "description",
      label: "Description",
      type: "textarea",
    },
    ...commonFields.slice(1),
  ],

  topTabs: [
  {
    key: "label",
    label: "Title",
    type: "text",
  },
  {
    key: "tabs",
    label: "Tabs (comma separated)",
    type: "text",
  },
  {
    key: "bgColor",
    label: "Background Color",
    type: "color",
  },
  {
    key: "textColor",
    label: "Text Color",
    type: "color",
  },
  {
    key: "borderColor",
    label: "Active Color",
    type: "color",
  },
  {
    key: "borderRadius",
    label: "Border Radius",
    type: "number",
  },
],

bottomTabs: [
  {
    key: "label",
    label: "Title",
    type: "text",
  },
  {
    key: "bottomTabs",
    label: "Tabs (comma separated)",
    type: "text",
  },
  {
    key: "bgColor",
    label: "Background Color",
    type: "color",
  },
  {
    key: "textColor",
    label: "Text Color",
    type: "color",
  },
  {
    key: "borderColor",
    label: "Active Tab Color",
    type: "color",
  },
  {
    key: "borderRadius",
    label: "Border Radius",
    type: "number",
  },
],
};

export default function PropertiesPopup({
  selectedComponent,
  updateComponent,
  closePopup,
}: Props) {
  if (!selectedComponent) return null;

  const fields =
    propertyFieldsByType[selectedComponent.type] ||
    commonFields;

 const handleChange = (
  field: keyof UIComponent,
  value: string | number
) => {
  if (
    field === "tabs" &&
    typeof value === "string"
  ) {
    updateComponent(selectedComponent.id, {
      tabs: value
        .split(",")
        .map((tab) => tab.trim())
        .filter(Boolean),
    });

    return;
  }

  if (
    field === "bottomTabs" &&
    typeof value === "string"
  ) {
    updateComponent(selectedComponent.id, {
      bottomTabs: value
        .split(",")
        .map((tab) => tab.trim())
        .filter(Boolean),
    });

    return;
  }

  updateComponent(selectedComponent.id, {
    [field]: value,
  });
};

const getValue = (field: PropertyField) => {
  const value = selectedComponent[field.key];

  if (field.key === "tabs") {
    return Array.isArray(value)
      ? value.join(", ")
      : "";
  }

  if (field.key === "bottomTabs") {
    return Array.isArray(value)
      ? value.join(", ")
      : "";
  }

  if (field.type === "color") {
    return String(value || "#ffffff");
  }

  if (field.type === "number") {
    return Number(value ?? 10);
  }

  return String(value || "");
};

  return (
    <div className="properties-overlay">
      <div className="properties-popup">
        <div className="properties-header">
          <h3>
            {selectedComponent.type} Properties
          </h3>

          <button
            type="button"
            onClick={closePopup}
          >
            ×
          </button>
        </div>

        {fields.map((field) => (
          <div
            className="property-field"
            key={String(field.key)}
          >
            <label>{field.label}</label>

            {field.type === "textarea" ? (
              <textarea
                value={getValue(field)}
                onChange={(e) =>
                  handleChange(
                    field.key,
                    e.target.value
                  )
                }
              />
            ) : field.type === "select" ? (
              <select
                value={getValue(field)}
                onChange={(e) =>
                  handleChange(
                    field.key,
                    e.target.value
                  )
                }
              >
                {field.options?.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                value={getValue(field)}
                onChange={(e) =>
                  handleChange(
                    field.key,
                    field.type === "number"
                      ? Number(e.target.value)
                      : e.target.value
                  )
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}