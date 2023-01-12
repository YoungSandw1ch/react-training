import { SkeletonButtonBox, SkeletonTextBox } from '../SkeletonMaterialsItems';
import Skeleton from 'react-loading-skeleton';

export const SkeletonMaterialItem = () => {
  return (
    <>
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
    </>
  );
};
