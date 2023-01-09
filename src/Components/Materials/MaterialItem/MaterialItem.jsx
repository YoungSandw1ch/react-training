import { TitleText, LinkText } from './MaterialItem.styled';

export const MaterialItem = ({ material }) => {
  const { link, title } = material;

  return (
    <>
      <TitleText>{link}</TitleText>
      <LinkText>{title}</LinkText>
    </>
  );
};
