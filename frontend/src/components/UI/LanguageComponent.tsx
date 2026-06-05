import { FiCheck } from "react-icons/fi";

export default function LanguageComponent() {
  const languages = [
    "English",
    "हिन्दी",
    "मराठी",
    "ગુજરાતી",
  ];

  return (
    <div className="language-wrapper">
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
  );
}