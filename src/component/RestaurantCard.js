import { IMG_CDN_URL } from "./constant";
// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  name,
  cuisines,
  areaName,
  cloudinaryImageId,
  sla,
  lastMileTravelString,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="card">
      <img alt="logo_res" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <span>
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
        <h4>{sla?.slaString}</h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
