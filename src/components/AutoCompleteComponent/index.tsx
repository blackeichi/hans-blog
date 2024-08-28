import { useState, useEffect } from "react";
import { EachOption } from "./EachOption";
import { ClickSelect } from "./ClickSelect";
import {
  AutoCompleteComponentBox,
  OptionListBox,
  OptionsList,
  SelectBox,
} from "./style";

export const AutoCompleteComponent = ({
  id,
  value,
  onChange,
  options = [],
  label,
  addNewOption = () => {},
  disabled = false,
  isMulti = false,
  width = "200px",
  height = "35px",
  fontSize = "12px",
}: {
  id: string;
  value: string[];
  onChange: (data: string[]) => void;
  addNewOption?: (data: string) => void;
  options: string[];
  label: string;
  disabled?: Boolean;
  isMulti?: Boolean;
  width?: string;
  height?: string;
  fontSize?: string;
}) => {
  const [text, setText] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isDown, setIsDown] = useState(true);
  const [position, setPosition] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  console.log("filteredOptions", text, filteredOptions);
  useEffect(() => {
    if (!isFocus) {
      setText("");
    }
  }, [isFocus]);
  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);
  const handleClickOption = (event: any, item: string) => {
    event.stopPropagation();
    if (isMulti) {
      const newData = new Set([...value, item]);
      onChange(Array.from(newData));
      setText("");
    } else {
      event.stopPropagation();
      onChange([item]);
      setIsFocus(false);
      setText(item);
    }
  };
  return (
    <AutoCompleteComponentBox width={width}>
      <SelectBox>
        <ClickSelect
          id={id}
          value={value}
          options={options}
          isMulti={isMulti}
          label={label}
          setIsFocus={setIsFocus}
          setPosition={setPosition}
          fontSize={fontSize}
          height={height}
          isFocus={isFocus}
          setFilteredOptions={setFilteredOptions}
          setIsDown={setIsDown}
          disabled={disabled}
          text={text}
          setText={setText}
        />
        {isFocus && position && !disabled && (
          <OptionListBox
            style={{
              top: isDown
                ? `calc(${position.y}px + ${height})`
                : `calc(${position.y}px - ${
                    filteredOptions.length * 35 > 350
                      ? 350
                      : filteredOptions.length * 35
                  }px - 10px)`,
              left: position.x,
            }}
          >
            <OptionsList fontSize={fontSize}>
              {text && !options.includes(text) && (
                <EachOption
                  value={value}
                  item={text}
                  isMulti={isMulti}
                  handleClickOption={(event: any, item: string) => {
                    handleClickOption(event, item);
                    addNewOption(item);
                  }}
                />
              )}
              {filteredOptions.map((item, index) => (
                <EachOption
                  key={index}
                  value={value}
                  item={item}
                  isMulti={isMulti}
                  handleClickOption={handleClickOption}
                />
              ))}
            </OptionsList>
          </OptionListBox>
        )}
      </SelectBox>
    </AutoCompleteComponentBox>
  );
};
