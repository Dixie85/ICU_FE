
import '../App.css'

function SearchBar({ searchBarCountry, setFilteredData, searchByName, setSearchByName }) {

  const handleSearchFilter = e => {
    const searchResult = e.currentTarget.value;
    setSearchByName(searchResult);
    const newFilter = searchBarCountry.filter(coun => {
      return coun.toLowerCase().includes(searchByName.toLowerCase());
    });

    if (searchResult === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = e => {
    e.preventDefault()
    setFilteredData([]);
    setSearchByName('');
  };

  return (
    <div className="searchImputContainer">
      <input
        type="text"
        placeholder='🔍  Search'
        onChange={handleSearchFilter}
        value={searchByName}
        className="" />
      {!searchByName ? '' : <button onClick={clearInput} >x</button>}
    </div>
  );
}

export default SearchBar;