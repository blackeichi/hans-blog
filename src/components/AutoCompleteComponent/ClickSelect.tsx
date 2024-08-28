import { memo, useEffect } from "react";
import { mouseLocaleState } from "$utils/atom";
import { useRecoilState } from "recoil";
import { useDidMountEffect } from "$utils/hooks/useDidMountEffect";
import { Box, Inputbox } from "./style";

export const ClickSelect = memo(
  ({
    id,
    value,
    options,
    isMulti,
    label,
    setIsFocus,
    setPosition,
    disabled,
    fontSize,
    height,
    setFilteredOptions,
    isFocus,
    setIsDown,
    text,
    setText,
  }: any) => {
    const [isOverlay, setIsOverlay] = useRecoilState(mouseLocaleState);
    const handleSearchCompany = () => {
      const filtered = options.filter((item: string) =>
        item.toLowerCase().includes(String(text).toLowerCase())
      );
      setFilteredOptions(filtered);
    };
    useEffect(() => {
      handleSearchCompany();
    }, [text]);
    useDidMountEffect(() => {
      if (!isOverlay) {
        setIsFocus(false);
        setPosition(null);
        if (text !== "" && !isMulti) {
          setText(value);
        }
      }
      if (isOverlay && isOverlay.toString() === id) {
        setIsFocus(true);
      } else {
        setIsFocus(false);
        setPosition(null);
        if (text !== "" && !isMulti) {
          setText(value);
        }
      }
    }, [isOverlay]);
    return (
      <Box
        disabled={disabled}
        fontSize={fontSize}
        height={height}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <Inputbox
          value={text}
          onChange={(event) => setText(String(event.target.value))}
          placeholder={
            value.length === 0
              ? label
              : isMulti
              ? value.map((item: any) => item).join(", ")
              : value
          }
          disabled={disabled}
          onFocus={(event) => {
            if (!disabled) {
              event.stopPropagation();
              if (!isFocus) {
                setIsOverlay(id);
              }
              setPosition({
                x: event.target.getBoundingClientRect().left,
                y: event.target.getBoundingClientRect().top,
              });
              setIsDown(
                event.target.getBoundingClientRect().top < 400 ? true : false
              );
              setIsFocus(true);
            }
          }}
        />
      </Box>
    );
  }
);
