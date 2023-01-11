import { MaterialItem } from '../MaterialItem';
import { List, Item } from './MaterialsList.styled';

export const MaterialsList = ({ materials, onDelete, onEdit }) => {
  return (
    <List>
      {materials.map(material => (
        <Item key={material.id}>
          <MaterialItem
            key={material.id}
            material={material}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </Item>
      ))}
    </List>
  );
};
