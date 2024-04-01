import ResCardJS from "./Rescard";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const isOnline = useOnline();
  // const {loggedInUser,setUserInfo} = useContext(UserContext)
  // console.log(restaurantList);
  // console.log(filteredList);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5781729&lng=73.6835432&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setRestaurantList(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredList(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  const updateResList = () => {
    const filtered = restaurantList.filter((res) => res.info.avgRating > 4);
    setFilteredList(filtered);
  };

  const handleSearch = (e) => {
    const searchList = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(inputText.toLowerCase())
    );
    setFilteredList(searchList);
  };
  if (!isOnline) {
    return <h1>Looks like you are offline</h1>;
  }

  return (
    <div className="body px-10">
      {/* <h1> Search Bar </h1> */}
      <div className="search m-4 flex justify-center gap-3">
        <input
          className="search-bar border border-width: 1px; border-solid border-black rounded-lg p-2 w-80"
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        ></input>
        <button
          className="bg-blue-300 p-2 rounded-lg text-zinc-50"
          onClick={(e) => {
            handleSearch(e);
          }}
        >
          Search
        </button>
        <button
          className="bg-blue-300 p-2 rounded-lg text-zinc-50"
          onClick={() => updateResList()}
        >
          Filter above 4 rating
        </button>
        {/* <input className="border border-black p-2" onChange={(e)=> setUserInfo(e.target.value)} value={loggedInUser}/> */}
      </div>

      <div>
        <div className="card">
          <ul className="res-card flex flex-wrap flex-row justify-start gap-6 p-4 m-4">
            {filteredList.map((item, index) => (
              <Link key={item.info.id} to={"restaurant/" + item.info.id}>
                {" "}
                <ResCardJS resName={item} />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Body;
