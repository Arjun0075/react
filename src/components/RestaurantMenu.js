import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import AccordionMenu from "./AccordionMenu";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const response = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  // console.log(response)

  const resName = response?.data?.cards[0]?.card?.card?.text;
  // const restaurantMenu =
  //   response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //     .itemCards;
  const cuisines = response?.data?.cards[2]?.card?.card?.info?.cuisines;
  const itemCategory =
    response?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  if (itemCategory === null) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div>
        <h1 className="text-center m-3 font-bold text-xl">{resName}</h1>
        {cuisines && (
          <h2 className="text-center m-3 font-bold text-base">
            Cuisines - {cuisines.join(" ,")}
          </h2>
        )}
        <div>
          {itemCategory &&
            itemCategory.map((category, index) => {
              return (
                <AccordionMenu
                  key={category?.card?.card.title}
                  data={category?.card?.card}
                  accordion={index === showIndex ? true : false}
                  setShowIndex={() => {
                    if (index === showIndex) {
                      setShowIndex(null);
                    } else {
                      setShowIndex(index);
                    }
                  }}
                />
              );
            })}
        </div>
      </div>
    );
  }
};

export default RestaurantMenu;
