import { motion } from "framer-motion";
import React, { useState } from "react";
import { styled } from "styled-components";

export const ClickButtonEvent = ({ icon }: { icon: React.ReactNode }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <ClickButtonEventBox
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      isPressed={isPressed}
      whileTap={{
        padding: "1px",
        border: "1px dashed gray",
        fontSize: "8px",
      }}
      transition={{
        duration: 0,
      }}
    >
      {icon}
    </ClickButtonEventBox>
  );
};

const ClickButtonEventBox = styled(motion.div)<{ isPressed: boolean }>`
  width: 100%;
  height: 100%;
`;
