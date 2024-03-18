import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import AccordionMenu from "./AccordionMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const response = useRestaurantMenu(resId);

  const resName = response?.data?.cards[0].card.card.info.name;
  const restaurantMenu =
    response?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;
  const cuisines = response?.data?.cards[0]?.card?.card?.info.cuisines;
  const itemCategory =
    response?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(itemCategory);

  if (restaurantMenu === null) {
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
              return <AccordionMenu key={index} data={category?.card?.card} />;
            })}
        </div>
      </div>
    );
  }
};

export default RestaurantMenu;
