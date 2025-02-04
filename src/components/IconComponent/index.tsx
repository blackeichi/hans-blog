import { styled } from "styled-components";

export const IconComponent = ({
  onClick,
  onContextMenu,
  onDoubleClick,
  isSelected = false,
  icon,
  title,
  width = "35px",
  height = "40px",
  color = "white",
  size = "11px",
}: {
  onClick?: any;
  onContextMenu?: any;
  onDoubleClick?: any;
  isSelected?: boolean;
  icon: string;
  title?: string;
  width?: string;
  height?: string;
  color?: string;
  size?: string;
}) => {
  return (
    <IconWrapper
      onMouseDown={onClick}
      onContextMenu={onContextMenu}
      onDoubleClick={onDoubleClick}
    >
      <Icon width={width} height={height} isSelected={isSelected} src={icon} />
      {title && (
        <IconName isSelected={isSelected} color={color} size={size}>
          {title}
        </IconName>
      )}
    </IconWrapper>
  );
};
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70px;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  gap: 2px;
`;
const Icon = styled.div<{
  isSelected: boolean;
  src: string;
  width: string;
  height: string;
}>`
  background-image: ${(props) =>
    props.isSelected
      ? `linear-gradient(to bottom, rgba(1, 1, 122,0.4), rgba(1, 1, 122,0.4)), url(${props.src})`
      : `url(${props.src})`};
  background-size: contain;
  background-position: center;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
const IconName = styled.div<{
  isSelected: boolean;
  color: string;
  size: string;
}>`
  color: ${(props) => props.color};
  background-color: ${(props) =>
    props.isSelected ? "rgba(1, 1, 122, 0.4)" : "transparent"};
  border: ${(props) =>
    props.isSelected ? "2px dotted darkgray" : `2px solid transparent`};
  font-size: ${(props) => props.size};
  padding: 2px;
  text-align: center;
  word-wrap: break-word;
`;
