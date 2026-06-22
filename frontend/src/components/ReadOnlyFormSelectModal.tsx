import { useState } from "react";
import ReadOnlyFormComponent from "./UI/ReadOnlyFormComponent";

interface ReadOnlyFormOption {
  label: string;
}

interface Props {
  readOnlyFormOptions: ReadOnlyFormOption[];
  onClose: () => void;
  onAdd: (selected: ReadOnlyFormOption[]) => void;
}

export default function ReadOnlyFormSelectModal({
  readOnlyFormOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] =
    useState<ReadOnlyFormOption[]>([]);

  const toggleForm = (option: ReadOnlyFormOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) => item.label === option.label
      );
      if (exists) {
        return prev.filter(
          (item) => item.label !== option.label
        );
      }
      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Read Only Form</h3>
          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="readonly-preview-list">
          {readOnlyFormOptions.map((option) => (
            <label
              key={option.label}
              className="readonly-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() => toggleForm(option)}
              />
              <div className="readonly-preview-box">
                <ReadOnlyFormComponent />
              </div>
            </label>
          ))}
        </div>

        <button
          className="heading-add-btn"
          disabled={selected.length === 0}
          onClick={() => onAdd(selected)}
        >
          Add Selected
        </button>
      </div>
    </div>
  );
}