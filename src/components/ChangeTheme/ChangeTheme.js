import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ChangeTheme = ({ colorOption, theme, changeTheme, option, type}) => {
  return (
    <>
      {type ? (
        <div
          className={`option ${colorOption}`}
          style={{ backgroundColor: colorOption }}
          onClick={changeTheme}
        >
          {theme === option && (
            <div className="check">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          )}
        </div>
      ) : (
        <div onClick={changeTheme}>
          <button className="btn">
            {colorOption.title}
            {theme === option && (
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default ChangeTheme;
