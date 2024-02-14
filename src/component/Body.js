import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Restau_Api_URL } from "./constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerUI";

function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredrestaurant] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getApiData();
  }, []);

  async function getApiData() {
    try {
      const data = await fetch(Restau_Api_URL);
      const jsonData = await data.json();
      console.log(jsonData);
      setAllRestaurants(jsonData.data?.cards[2]?.data?.data?.cards);
      setFilteredrestaurant(jsonData.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error.message);
    }
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search your rastaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            //filter the data
            const data = filterData(searchText, allRestaurants);
            //update the state
            setFilteredrestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="rastaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/rastaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;


// this is 