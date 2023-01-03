import { PureComponent } from 'react';
import { Box } from 'Components/Common';
import { Controls } from 'Components/Reader/Controls';
import { Progress } from 'Components/Reader/Progress';
import { Publication } from 'Components/Reader/Publication';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

export class Reader extends PureComponent {
  state = {
    index: 0,
  };

  componentDidMount() {
    // console.log('mount');
    const savedIndex = Number(localStorage.getItem('currentPublication'));
    if (savedIndex) {
      this.setState({ index: savedIndex });
    }
  }

  componentDidUpdate(_, pS) {
    // console.log('update');
    if (this.state.index !== pS.index) {
      localStorage.setItem('currentPublication', this.state.index);
    }
  }

  handleBtnClick = value => {
    this.setState(pS => ({ index: pS.index + value }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const currentItem = items[index];
    const { title, text } = currentItem;
    const currentIndex = index + 1;
    const itemsLength = items.length;
    const isFist = index === 0;
    const isLast = index === itemsLength - 1;

    return (
      <Box width="card" mx="auto" p={4}>
        <Controls
          onClick={this.handleBtnClick}
          prevBtnDisabled={isFist}
          nextBtnDisabled={isLast}
        />
        {/* <TransitionGroup>
          <CSSTransition key={title} timeout={250}> */}
        <Publication title={title} text={text} />
        {/* </CSSTransition>
        </TransitionGroup> */}
        <Progress currentPage={currentIndex} totalPages={itemsLength} />
      </Box>
    );
  }
}
