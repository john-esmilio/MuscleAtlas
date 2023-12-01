type ButtonProp = {
  type: "button" | "submit",
  title: string,
  variant: "login_btn" | "register_btn" | "create_btn"
}
const Login = ({type, title, variant} :ButtonProp) => {
  return (
    <button className={`${variant} cursor-pointer`} type={type}>

      <label className='whitespace-nowrap'>
        {title}
      </label>
    </button>
  )
}

export default Login