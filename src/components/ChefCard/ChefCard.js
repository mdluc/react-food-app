import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
const ChefCard = ({chef}) => {
 const {name, img, recipesCount, cuisine} = chef;
  return(
    <div className="chef-card">
      <div className="chef-card-image">
      <img src={img} alt="" />
      </div>
      <div className="chef-card-info">
        <h3 className="chef-card-name">{name}</h3>
        <p className="chef-card-recipes-count">Recipes: <b>{recipesCount}</b></p>
        <p className="chef-cuisine">Cuisine: <b>{cuisine}</b></p>
        <p className="chef-icons">
          <FontAwesomeIcon icon={faFacebook}/>
          <FontAwesomeIcon icon={faTwitter}/>
          <FontAwesomeIcon icon={faInstagram}/>
        </p>
      </div>
    </div>
  )
}

export default ChefCard;