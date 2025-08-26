import { React, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";




const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };
const notify = () =>  query=="" ? toast.error("Boş olamaz")  :  toast.success("Aranıyor... ");
  return (
    <div className="w-full flex justify-center items-center py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <header className="w-full max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-white rounded-2xl shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500"
        >
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos..."
            className="flex-grow px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            onClick={notify}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 font-medium transition-colors"
          >
            <FaSearch className="size-7"/>
        
          </button>
        </form>
        <Toaster
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </header>
    </div>
  );
};

export default SearchBar;
