import { GiBookshelf } from "react-icons/gi"; 

const Logo = () => {
  return (
    <span className="rl-logo">
      <GiBookshelf className="rl-icon" />
      <span className="rl-icon-text">SNRL</span>
      <span className="rl-logo-normal">Save Now </span>
      <span className="rl-logo-ital">Read Later</span>
    </span>
  );
};

export default Logo;
