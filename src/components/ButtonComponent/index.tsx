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
  isShadow = true,
  onBlur = () => {},
  disabled = false,
}: {
  content: React.ReactNode;
  action: (props?: any) => void;
  width?: string;
  height?: string;
  type?: "button" | "submit";
  styles?: object;
  isShadow?: boolean;
  disabled?: boolean;
  onBlur?: () => void;
}) => {
  return (
    <ButtonBox
      style={styles}
      width={width}
      height={height}
      type={type}
      disabled={disabled}
      whileTap={
        disabled
          ? {}
          : {
              borderTop: `2px solid ${GLOBAL_COLOR.darkGray}`,
              borderLeft: `2px solid ${GLOBAL_COLOR.darkGray}`,
              borderBottom: `2px solid ${GLOBAL_COLOR.darkGray}`,
              borderRight: `2px solid ${GLOBAL_COLOR.darkGray}`,
            }
      }
      transition={{
        duration: 0,
      }}
      tabIndex={-1}
      isShadow={isShadow}
      onBlur={onBlur}
    >
      <Button
        onClick={() => {
          if (!disabled) {
            action();
          }
        }}
        whileTap={
          disabled
            ? {}
            : {
                padding: "1px",
                border: "1px dashed gray",
                fontSize: "12px",
                width: "95%",
                height: "95%",
              }
        }
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
  isShadow: boolean;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.gray};
  border-top: ${(props) =>
    !props.isShadow ? "none" : `2px solid ${props.theme.lightGray}`};
  border-left: ${(props) =>
    !props.isShadow ? "none" : `2px solid ${props.theme.lightGray}`};
  border-bottom: ${(props) =>
    !props.isShadow ? "none" : `2px solid ${props.theme.shadow}`};
  border-right: ${(props) =>
    !props.isShadow ? "none" : `2px solid ${props.theme.shadow}`};
  text-shadow: 1px 1px gray;
`;
const Button = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
