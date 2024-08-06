import { GLOBAL_COLOR } from "$utils/constans";
import { motion } from "framer-motion";
import React from "react";
import { styled } from "styled-components";

export const ButtonComponent = ({
  content,
  action,
  width = "100%",
  height = "100%",
  type = "button",
  styles = {},
}: {
  content: React.ReactNode;
  action: (props?: any) => void;
  width?: string;
  height?: string;
  type?: "button" | "submit";
  styles?: object;
}) => {
  return (
    <ButtonBox
      style={styles}
      width={width}
      height={height}
      type={type}
      whileTap={{
        borderTop: `2px solid ${GLOBAL_COLOR.darkGray}`,
        borderLeft: `2px solid ${GLOBAL_COLOR.darkGray}`,
        borderBottom: `2px solid ${GLOBAL_COLOR.darkGray}`,
        borderRight: `2px solid ${GLOBAL_COLOR.darkGray}`,
      }}
      transition={{
        duration: 0,
      }}
      tabIndex={-1}
    >
      <Button
        onClick={() => {
          action();
        }}
        whileTap={{
          padding: "1px",
          border: "1px dashed gray",
          fontSize: "12px",
          width: "95%",
          height: "95%",
        }}
        transition={{
          duration: 0,
        }}
      >
        {content}
      </Button>
    </ButtonBox>
  );
};
export const ButtonBox = styled(motion.button)<{
  width: string;
  height: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.gray};
  border-top: 2px solid ${(props) => props.theme.lightGray};
  border-left: 2px solid ${(props) => props.theme.lightGray};
  border-bottom: 2px solid ${(props) => props.theme.shadow};
  border-right: 2px solid ${(props) => props.theme.shadow};
`;
const Button = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
