import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Routes, Route } from "react-router-dom";
import { Home, Restaurants, Chefs, Search } from ".";
import { AnimatePresence } from "framer-motion";

const AnimatedSwitch = () => {
  const location = useLocation();
  return (
    // <TransitionGroup component={null}>
    //   <CSSTransition
    //     key={location.pathname}
    //     classNames="fade"
    //     timeout={{ enter: 600, exit: 600 }}
    //     appear
    //   >
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </AnimatePresence>
    //   </CSSTransition>
    // </TransitionGroup>
  );
};

export default AnimatedSwitch;
