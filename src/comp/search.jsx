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
    <div className="mt-8">
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-center gap-4"
      >
        <input
          type="text"
          placeholder="🔍 Search any city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full flex-1 rounded-2xl border border-white/30 bg-white/20 backdrop-blur-lg px-5 py-4 text-lg text-white placeholder:text-white/70 outline-none transition-all duration-300 focus:border-white focus:bg-white/30"
        />

        <button
          type="submit"
          className="w-full md:w-auto flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-cyan-600 hover:scale-105 active:scale-95"
        >
          <SearchIcon size={22} />
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;