import { EachOptionBox } from "./style";

export const EachOption = ({
  value,
  isMulti,
  item,
  handleClickOption,
}: any) => {
  const selected = isMulti
    ? value.map((val: string) => val).includes(item)
    : value === item;
  return (
    <EachOptionBox
      onClick={(event) => {
        handleClickOption(event, selected, item);
      }}
      selected={isMulti ? false : selected}
    >
      {item}
    </EachOptionBox>
  );
};
