import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const PreviousSearches = () => {
  const searchData = [
    "pizza",
    "burger",
    "cookies",
    "juice",
    "salad",
    "ice cream",
    "lasagna",
    "pudding",
    "soup",
  ];
  return (
    <div className="previous-searches section">
      <h2>Previous Searches</h2>
      <div className="previous-searches-container">
        {searchData.map((item, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-item"
          >
            {item}
          </div>
        ))}
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button className="btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviousSearches;
