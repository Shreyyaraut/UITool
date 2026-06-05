import { useState } from "react";
import { FiCheck } from "react-icons/fi";

interface LanguageOption {
  label: string;
}

interface Props {
  languageOptions: LanguageOption[];
  onClose: () => void;
  onAdd: (selected: LanguageOption[]) => void;
}

export default function LanguageSelectModal({
  languageOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    LanguageOption[]
  >([]);

  const toggleLanguage = (option: LanguageOption) => {
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

  const languages = [
    "English",
    "हिन्दी",
    "मराठी",
    "ગુજરાતી",
  ];

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Language</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="language-preview-list">
          {languageOptions.map((option) => (
            <label
              key={option.label}
              className="language-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleLanguage(option)
                }
              />

              <div className="language-preview-box">
                <div className="language-wrapper preview">
                  <div className="language-overlay"></div>

                  <div className="language-sheet">
                    <h3>Select Language</h3>

                    <div className="language-list">
                      {languages.map((language, index) => (
                        <div
                          className={`language-item ${
                            index === 0 ? "active" : ""
                          }`}
                          key={language}
                        >
                          <span>{language}</span>

                          {index === 0 && (
                            <span className="language-check">
                              <FiCheck />
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
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