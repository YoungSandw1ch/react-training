import PropTypes from 'prop-types';
import { Title, Text, Article, Wrapper } from './Publication.styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Publication = ({ title, text }) => {
  return (
    <TransitionGroup component={Wrapper}>
      <CSSTransition key={title} timeout={300} classNames="swiper">
        <Article>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </Article>
      </CSSTransition>
    </TransitionGroup>
  );
};

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
