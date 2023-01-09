import errorImg from 'images/error-img.jpeg';
import { Box } from 'Components/Common';
import { ErrorImg, ErrorMessage } from './PokemonErrorView.styled';

export const PokemonErrorView = ({ error }) => {
  return (
    <Box width="240px">
      <ErrorImg src={errorImg} alt="sad error image" />
      <ErrorMessage>{error.message}</ErrorMessage>
    </Box>
  );
};
