import {
  FiSearch,
  FiWifi,
  FiCheck,
} from "react-icons/fi";

export default function MultiSelectCardsComponent() {
  const cards = Array.from(
    { length: 12 },
    (_, index) => ({
      id: index + 1,
      selected: [1, 2, 5, 7].includes(index + 1),
      error: index + 1 === 5,
    })
  );

  return (
    <div className="multi-select-cards-screen">
      <div className="multi-select-cards-overlay"></div>

      <div className="multi-select-cards-sheet">
        <div className="multi-select-search">
          <FiSearch />
          <input
            type="text"
            placeholder="Search for the service you need"
            readOnly
          />
        </div>

        <div className="multi-select-card-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`multi-select-card ${
                card.selected ? "selected" : ""
              } ${card.error ? "error" : ""}`}
            >
              <span
                className={`multi-select-check ${
                  card.selected ? "active" : ""
                }`}
              >
                {card.selected && <FiCheck />}
              </span>

              <FiWifi className="multi-select-icon" />

              <p>Broadband</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}