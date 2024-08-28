import { EachOptionBox } from "./style";

export const EachOption = ({
  value,
  isMulti,
  item,
  handleClickOption,
}: any) => {
  const selected = value === item;
  return (
    <EachOptionBox
      onClick={(event) => {
        handleClickOption(event, item);
      }}
      selected={isMulti ? false : selected}
    >
      {item}
    </EachOptionBox>
  );
};
