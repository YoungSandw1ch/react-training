import { Reader } from 'Components/Reader/Reader';
import { Box } from 'Components/Common';
import publication from 'data/publications.json';

export const App = () => {
  return (
    <Box>
      <Reader item={publication} />
    </Box>
  );
};
