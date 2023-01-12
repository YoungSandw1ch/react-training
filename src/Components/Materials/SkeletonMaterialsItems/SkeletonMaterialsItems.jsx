import {
  SkeletonButtonBox,
  SkeletonTextBox,
} from './SkeletonMaterialsItems.styled';
import { SkeletonItem } from './SkeletonMaterialsItems.styled';
import Skeleton from 'react-loading-skeleton';

export const SkeletonItems = ({ items }) => {
  return Array(items)
    .fill(0)
    .map((_, i) => (
      <SkeletonItem key={i}>
        <SkeletonTextBox>
          <Skeleton count={2} height={16} style={{ marginBottom: '8px' }} />
        </SkeletonTextBox>
        <SkeletonButtonBox>
          <Skeleton
            count={2}
            circle
            width={20}
            height={20}
            style={{ marginBottom: '8px' }}
          />
        </SkeletonButtonBox>
      </SkeletonItem>
    ));
};
