import { AiOutlineSearch } from "react-icons/ai";

const Search = ({setOpenSearchBox, search, handleSearch}) => {
  return (
    <div className="border border-1 border-black flex items-center px-2 gap-2">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        autoComplete="off"
        value={search}
       onChange={handleSearch}
        className="outline-0 py-2 px-2 w-24"
      />
      <AiOutlineSearch size={24} onClick={() => setOpenSearchBox(false)} />
    </div>
  );
};

export default Search;
