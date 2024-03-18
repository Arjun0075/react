import {IMG} from "../../utils/constant"

const ResCard = (props) => {
    const {resName} = props
    const {name , avgRating , costForTwo , cuisines ,cloudinaryImageId} = resName.info
  return (
    <li className="flex flex-col bg-slate-200 hover:bg-slate-300 w-60 p-3 h-[400px] gap-3 rounded-xl">
      <img className="rounded-xl w-56 h-52 mt-2" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId}/>
      <h2 className="font-bold truncate">{name}</h2>
      <h3>Rating - {avgRating}</h3>
      <p className="truncate">{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
    </li>
  );
};

export default ResCard