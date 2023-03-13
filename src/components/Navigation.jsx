import Picture from "./Navigation/Picture";
import Tabs from "./Navigation/Tabs";
import Social from "./Navigation/Social";
import Logo from "./Navigation/Logo";

// CSS
import "../assets/css/navigation.css";

function Navigation() {
  return (
    <div id="navigation">
      <Logo />
      <Tabs />
      <Social />
    </div>
  );
}

export default Navigation;
