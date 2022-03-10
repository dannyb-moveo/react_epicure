import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Routes, Route } from "react-router-dom";
import { Home, Restaurants, Chefs } from ".";

const AnimatedSwitch = () => {
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={{ enter: 600, exit: 600 }}
        appear
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/chefs" element={<Chefs />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AnimatedSwitch;
