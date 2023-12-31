import { useNavigate } from "react-router-dom";

const NavButton = ({ link, text }) => {
  const navigate = useNavigate();

  return (
    <div className="navbar_button_container">
      <span className="navbar_button" onClick={() => navigate(`/${link}`)}>
        {text}
      </span>
    </div>
  );
};

export default NavButton;
