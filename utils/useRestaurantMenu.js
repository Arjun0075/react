import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [response , setResponse] = useState(null)
    const handleFetch = async () => {
        const res = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.537122&lng=73.6771662&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
        );
        const response = await res.json();
        setResponse(response)
        // console.log(response)
      };
      useEffect(() => {
        handleFetch();
      }, []);

    return response;
}

export default useRestaurantMenu