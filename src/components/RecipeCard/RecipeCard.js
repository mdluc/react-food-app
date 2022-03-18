import CustomImage from "../CustomImage/CustomImage";
import "./styles.scss"
const RecipeCard = ({ recipe }) => {
  const { title, image, authorImg } = recipe;
  return (
    <div className="recipe-card">
      <CustomImage imageSrc={image} pt="65%" />
      <div className="recipe-card-info">
        <img src={authorImg} alt="" className="author-image" />
        <p className="recipe-title">{title}</p>
        <p className="recipe-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <a href="#!" className="view-btn">
          view more
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
