import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div>Login Page <br /> <Link to={`/chat`}>login</Link></div>
  )
}