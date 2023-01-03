import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: 79vh;
  margin-bottom: ${({ theme }) => theme.space[2]}px;
`;

export const Article = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.swiper-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  &.swiper-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 300ms ease-in-out;
  }

  &.swiper-exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.swiper-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 300ms ease-in-out;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  text-align: center;
`;

export const Text = styled.p`
  text-indent: 40px;
  line-height: 1.5;
`;
