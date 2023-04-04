import Navigation from "./Navigation";
import Landing from "./Landing";
import MobileBottomNavigation from "./Navigation/MobileBottomNavigation";

function Main() {
  return (
    <div id="main">

      <MobileBottomNavigation />
      <Navigation />
      <Landing />
    </div>
  );
}

export default Main;
