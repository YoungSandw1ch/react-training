import PropTypes from 'prop-types';
import { Box } from 'Components/Common';
import { Title, Text } from './Publication.styled';

export const Publication = ({ title, text }) => {
  return (
    <Box as="article">
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Box>
  );
};

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
