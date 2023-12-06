type ButtonProp = {
  type: "button" | "submit";
  title: string;
  variant: "login_btn" | "register_btn" | "create_btn" | "account_btn";
  onClick: () => "/login";
};
const Login: React.FC<ButtonProp> = ({ type, title, variant, onClick }) => {
  return (
    <button
      className={`${variant} cursor-pointer`}
      type={type}
      onClick={onClick}
    >
      <label className="whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Login;
