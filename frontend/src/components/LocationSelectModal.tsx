import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

interface LocationOption {
  label: string;
}

interface Props {
  locationOptions: LocationOption[];
  onClose: () => void;
  onAdd: (selected: LocationOption[]) => void;
}

export default function LocationSelectModal({
  locationOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    LocationOption[]
  >([]);

  const toggleLocation = (
    option: LocationOption
  ) => {
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

  const locationData = [
    ["City", "Mumbai"],
    ["State", "Maharashtra"],
    ["Country", "India"],
    ["Pin Code", "400064"],
    ["Latitude", "28.282828"],
    ["Longitude", "82.828282"],
  ];

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Location</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="location-preview-list">
          {locationOptions.map((option) => (
            <label
              key={option.label}
              className="location-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleLocation(option)
                }
              />

              <div className="location-preview-box">
                <div className="location-screen">
                  <div className="location-header">
                    <FiArrowLeft />
                    <span>My Location</span>
                  </div>

                  <div className="location-list">
                    {locationData.map(([label, value]) => (
                      <div
                        className="location-item"
                        key={label}
                      >
                        <p>{label}</p>
                        <h4>{value}</h4>
                      </div>
                    ))}
                  </div>
                </div>
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