import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

const Search = ({ onSearch }) => { 
   const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (city.trim() === "") {
      alert("Please enter a city name");
      return;
    }

onSearch(city);
  };

  return (
    <div className="mt-5">
      <form
        onSubmit={handleSearch}
        className="flex justify-between gap-4"
      >
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 text-white rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700 active:scale-95"
        >
          <SearchIcon size={20} />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Search;