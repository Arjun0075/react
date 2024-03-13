import ResCardJS from "./Rescard";
import data from "../../utils/data";
import { useEffect, useState, useParams } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";

const Body = () => {

  const [restaurantList, setRestaurantList] = useState([]);
  const [inputText , setInputText] = useState("")
  const [filteredList , setFilteredList] = useState([])
  const isOnline = useOnline()



  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.537122&lng=73.6771662&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json()
    //  console.log(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    setRestaurantList(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredList(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  
  };
  // console.log(restaurantList)
  useEffect(() => {
    // console.log("UseEffect Called");
    fetchData();
  }, []);

  const updateResList = () => {
    const filtered = restaurantList.filter((res) => res.info.avgRating > 4);
    setFilteredList(filtered);
  };

  const handleSearch = (e) => {
    // console.log(e)
    const searchList = restaurantList.filter((res) => (
      // console.log(res.info.name)
      res.info.name.toLowerCase().includes(inputText.toLowerCase()))
      
    )
    setFilteredList(searchList)
  }
  if(!isOnline){
    return (
      <h1>Looks like you are offline</h1>
    )
  }

  return (
    <div className="body">
      {/* <h1> Search Bar </h1> */}
      <div className="search">
        <input className="search-bar" value={inputText} onChange={(e) => {
          setInputText(e.target.value)
        }}></input>
        <button onClick={(e) => {handleSearch(e)}}>Search</button>
        <button onClick={() => updateResList()}>Filter Above 4 rating</button>
      </div>
      
     
      <div>
        <div className="card">
          <ul className="res-card">
            {filteredList.map((item, index) => (
              <Link key={item.info.id} to={"restaurant/"+item.info.id}> <ResCardJS  resName={item} /></Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Body;
