import { Layout } from '../utils/Layout';
import { GlobalStyle } from '../utils/GlobalStyle';
import { SkeletonTheme } from 'react-loading-skeleton';
import { CreateMaterialForm } from '../CreateMaterialForm';
import { Box } from 'Components/Common';
import * as API from 'services/materialAPI';
import { MaterialsList } from '../MaterialsList';
import { SkeletonItems } from '../SkeletonMaterialsItems';
import { useState, useEffect } from 'react';

// const status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   REJECT: 'reject',
//   RESOLVE: 'resolve',
// };

export function App() {
  const [materials, setMaterials] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [allItemsLoading, setAllItemsLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        setAllItemsLoading(true);
        const materials = await API.GetMaterials();
        setMaterials(materials);
      } catch (error) {
        console.log(error.message);
        setError(error);
      } finally {
        setAllItemsLoading(false);
      }
    }
    fetch();
  }, []);

  const addMaterial = async material => {
    try {
      setAllItemsLoading(true);
      const newMaterial = await API.AddMaterial(material);
      setMaterials([...materials, newMaterial]);
    } catch (error) {
      console.log(error.message);
      setError(error);
    } finally {
      setAllItemsLoading(false);
    }
  };

  const deleteMaterial = async id => {
    const filterState = mats => mats.filter(mat => mat.id !== id);
    try {
      setIsLoading(true);
      await API.DeleteMaterial(id);
      setMaterials(filterState);
    } catch (error) {
      console.log(error.message);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const editMaterial = async (id, values) => {
    try {
      setIsLoading(true);
      const changedMaterial = await API.EditMaterial(id, values);
      const changeMaterials = mats =>
        mats.map(mat => (mat.id !== id ? mat : changedMaterial));

      setMaterials(changeMaterials);
    } catch (error) {
      console.log(error.message);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <GlobalStyle />
      <SkeletonTheme color="#313131" highlightColor="#525252">
        <Box mx="auto" width="container" p={4}>
          <CreateMaterialForm onSubmit={addMaterial} />

          {error && (
            <Box as="p">
              Опачки! Что то пошло не так , попробуйте перегрузить страницу.
            </Box>
          )}

          {allItemsLoading ? (
            <SkeletonItems items={8} />
          ) : (
            <MaterialsList
              isLoading={isLoading}
              materials={materials}
              onDelete={deleteMaterial}
              onEdit={editMaterial}
            />
          )}
        </Box>
      </SkeletonTheme>
    </Layout>
  );
}
