import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

const Sidebar = ({ links, close }) => {
  const location = useLocation();
  return (
    <div className="sidebar" onClick={close}>
      {links.map((link, index) => (
        <Link to={link.path} key={index} className={`sidebar-link ${location.pathname === link.path ? "active" : ""}`}>
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
