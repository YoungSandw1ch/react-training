import { PureComponent } from 'react';
import { Box } from 'Components/Common';

export class Reader extends PureComponent {
  state = {
    index: 0,
  };

  handleBtnClick = value => {
    this.setState(pS => ({ index: pS.index + value }));
  };

  render() {
    const { index } = this.state;
    const currentIndex = index + 1;
    const { items } = this.props;
    const itemsLength = items.length;
    const currentItem = items[index];
    const { title, text } = currentItem;

    return (
      <Box>
        <section>
          <button type="button" onClick={() => this.handleBtnClick(-1)}>
            Назад
          </button>
          <button type="button" onClick={() => this.handleBtnClick(1)}>
            Вперед
          </button>
        </section>

        <p>
          {currentIndex}/{itemsLength}
        </p>

        <article>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      </Box>
    );
  }
}
