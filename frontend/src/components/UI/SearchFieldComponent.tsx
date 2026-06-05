import { FiSearch } from "react-icons/fi";

export default function SearchFieldComponent() {
  return (
    <div className="searchfield-box">
      <FiSearch />

      <input
        type="text"
        placeholder="Search"
        readOnly
      />
    </div>
  );
}