//different types of button props used in the app with different variants
type ButtonProp = {
  type: "button" | "submit";
  title: string;
  variant: "login_btn" | "register_btn" | "create_btn" | "account_btn";
};

//login button component
const Login: React.FC<ButtonProp> = ({ type, title, variant }) => {
  return (
    <button className={`${variant} cursor-pointer`} type={type}>
      <label className="whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Login;
