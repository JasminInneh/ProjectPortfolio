import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";

const ArrowAnimationTest = () => {
  // Arrow animation: moves the arrow 10px to the right and back
  const arrowAnimation = useSpring({
    from: { transform: "translateX(0px)" },
    to: { transform: "translateX(10px)" },
    config: { tension: 200, friction: 10 },
    loop: { reverse: true }, // Loop animation back and forth
  });

  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <p>
        Test Arrow Animation:{" "}
        <animated.span style={arrowAnimation}>
          <FontAwesomeIcon icon={faArrowRight} />
        </animated.span>
      </p>
    </div>
  );
};

export default ArrowAnimationTest;
