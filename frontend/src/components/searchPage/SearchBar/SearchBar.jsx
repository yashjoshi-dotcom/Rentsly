import {useState} from 'react'
//import housesData from '../HouseData/Data/data'
const SearchBar = () => {
  const [query,setQuery]=useState("");
  console.log(query);
  return (
    <>
    <div className="search">
    <input
    type="text"
    placeholder='Search Your Query Here'
    onChange={(ip)=>setQuery(ip.target.value)}
    />
  </div>

    </>
)
}

export default SearchBar