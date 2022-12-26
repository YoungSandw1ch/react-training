import { Reader } from 'Components/Reader/Reader';
import { Box } from 'Components/Common';
import publication from 'data/publications.json';

export const App = () => {
  return (
    <Box mx="auto" width="container" px="15px" py="50px">
      <Reader items={publication} />
    </Box>
  );
};
