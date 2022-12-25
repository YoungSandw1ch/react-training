import { PureComponent } from 'react';
import { Box } from 'Components/Common';

export class Reader extends PureComponent {
  state = {
    publicationIndex: 0,
  };

  handleBtnClick = () => {};

  render() {
    return (
      <Box>
        <section>
          <button type="button" onClick={this.handleBtnClick}>
            Назад
          </button>
          <button type="button" onClick={this.handleBtnClick}>
            Вперед
          </button>
        </section>

        <p>1/10</p>

        <article>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            molestiae dolore ipsa sed similique necessitatibus. Aut qui porro
            quibusdam esse libero est eius, repellendus unde nihil, sequi
            voluptate eaque officiis aliquam impedit laborum adipisci cumque
            sit.
          </p>
        </article>
      </Box>
    );
  }
}
