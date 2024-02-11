import logo from "../assets/Logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo showing money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
