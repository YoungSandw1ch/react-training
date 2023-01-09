import { MaterialItem } from '../MaterialItem';
import { List, Item } from './MaterialsList.styled';

export const MaterialsList = ({ materials }) => {
  console.log('materials: ', materials);
  return (
    <List>
      {materials.map(material => (
        <Item key={material.id}>
          <MaterialItem material={material} />
        </Item>
      ))}
    </List>
  );
};
