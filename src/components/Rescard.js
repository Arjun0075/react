import {IMG} from "../../utils/constant"

const ResCard = (props) => {
    const {resName} = props
  return (
    <li>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+props.resName.info.cloudinaryImageId}/>
      <h2>{resName.info.name}</h2>
      <h3>Rating - {resName.info.avgRating}</h3>
    </li>
  );
};

export default ResCard