import Skeleton from 'react-loading-skeleton';
import { MaterialItem } from '../MaterialItem';
import { List, Item } from './MaterialsList.styled';

export const MaterialsList = ({ materials, onDelete, onEdit, isLoading }) => {
  return (
    <List>
      {materials.map(material => (
        <Item key={material.id}>
          <MaterialItem
            isLoading={isLoading}
            key={material.id}
            material={material}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </Item>
      )) || <Skeleton />}
    </List>
  );
};
