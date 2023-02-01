import { useState, useEffect, useRef } from 'react';
import { Box } from 'Components/Common';
import { Controls } from 'Components/Reader/Controls';
import { Progress } from 'Components/Reader/Progress';
import { Publication } from 'Components/Reader/Publication';

export function Reader({ items }) {
  const [index, setIndex] = useState(0);
  const [swiperSide, setSwiperSide] = useState(0);
  const fistRender = useRef(true);

  useEffect(() => {
    const savedIndex = Number(localStorage.getItem('currentPublication'));
    if (fistRender.current && savedIndex) {
      console.log('fist render');
      fistRender.current = false;
      setIndex(savedIndex);
    }

    console.log('render');
    localStorage.setItem('currentPublication', index);
  }, [index]);

  const handleBtnClick = value => {
    setIndex(pI => pI + value);
    setSwiperSide(value);
  };

  const currentItem = items[index];
  const { title, text } = currentItem;
  const currentIndex = index + 1;
  const itemsLength = items.length;
  const isFist = index === 0;
  const isLast = index === itemsLength - 1;

  return (
    <Box width="card" mx="auto" p={4}>
      <Controls
        onClick={handleBtnClick}
        prevBtnDisabled={isFist}
        nextBtnDisabled={isLast}
      />
      <Publication title={title} text={text} isRigthSwipe={swiperSide} />
      <Progress currentPage={currentIndex} totalPages={itemsLength} />
    </Box>
  );
}
