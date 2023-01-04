import PropTypes from 'prop-types';
import { Title, Text, Article, Wrapper } from './Publication.styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Publication = ({ title, text, isRigthSwipe }) => {
  const className = isRigthSwipe === 1 ? 'swiper-right' : 'swiper-left';
  const timeOut = isRigthSwipe ? 300 : 0;

  return (
    <TransitionGroup component={Wrapper}>
      <CSSTransition key={title} timeout={timeOut} classNames={className}>
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
