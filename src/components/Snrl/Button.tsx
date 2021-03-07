interface IButtonProps {
  label: string;
  handleClick: Function;
}

const Button = (props: IButtonProps) => {
  const { label, handleClick } = props;

  return (
    <span 
      className="rl-btn-block" 
      onClick={() => handleClick()}
    >
      {label}
    </span>
  );
};

export default Button;
