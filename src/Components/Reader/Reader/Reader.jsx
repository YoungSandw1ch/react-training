import { PureComponent } from 'react';
import { Box } from 'Components/Common';
import { Controls } from 'Components/Reader/Controls';
import { Progress } from 'Components/Reader/Progress';
import { Publication } from 'Components/Reader/Publication';

export class Reader extends PureComponent {
  state = {
    index: 0,
  };

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
      <Box>
        <Controls
          onClick={this.handleBtnClick}
          prevBtnDisabled={isFist}
          nextBtnDisabled={isLast}
        />
        <Progress currentPage={currentIndex} totalPages={itemsLength} />
        <Publication title={title} text={text} />
      </Box>
    );
  }
}
