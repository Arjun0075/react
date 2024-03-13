import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = (props) => {
  const {resId } = useParams();
  const response = useRestaurantMenu(resId);

  const resName = response?.data?.cards[0].card.card.info.name
  const restaurantMenu = response?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards


  if(restaurantMenu === null){
    return(
      <h1>Loading</h1>
    )
  }else{
    return (
      <div>
        <h1>{resName}</h1>
        <ul>
          {restaurantMenu && restaurantMenu.map((resMenu) => (
            <li key={resMenu.card.info.id}>
              {resMenu.card.info.name} - Price {resMenu.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    );
  }
 
};

export default RestaurantMenu;
