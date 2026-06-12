export default function MultiSelectCardsComponent() {
  const selectedIndices = [0, 1, 4, 6];

  const items = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    label: "Broadband",
    selected: selectedIndices.includes(i),
  }));

  return (
    <div className="multi-select-cards-wrapper">
      <div className="multi-select-cards-overlay" />
      <div className="multi-select-cards-sheet">
        <div className="multi-select-cards-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span className="multi-select-cards-search-placeholder">
            Search for the service you need
          </span>
        </div>

        <div className="multi-select-cards-grid">
          {items.map((item) => (
            <div
              key={item.id}
              className={`multi-select-card-item ${
                item.selected ? "selected" : ""
              }`}
            >
              {item.selected ? (
                <div className="multi-select-card-check">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              ) : (
                <div className="multi-select-card-radio" />
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="9" width="20" height="12" rx="2" />
                <path d="M8 9V7a4 4 0 0 1 8 0v2" />
                <line x1="12" y1="13" x2="12" y2="16" />
              </svg>
              <span className="multi-select-card-label">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}