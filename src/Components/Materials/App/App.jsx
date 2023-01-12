import { Layout } from '../utils/Layout';
import { GlobalStyle } from '../utils/GlobalStyle';
import { Component } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { CreateMaterialForm } from '../CreateMaterialForm';
import { Box } from 'Components/Common';
import * as API from 'services/materialAPI';
import { MaterialsList } from '../MaterialsList';

// const status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   REJECT: 'reject',
//   RESOLVE: 'resolve',
// };

export class App extends Component {
  state = {
    materials: [],
    error: null,
    isLoading: false,
    // status: status.IDLE,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.GetMaterials();
      this.setState({ materials });
    } catch (error) {
      console.log(error.message);
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidUpdate(pProps, pState) {
    // if (pState.materials === this.state.materials) return;
  }

  addMaterial = async material => {
    try {
      this.setState({ isLoading: true });
      const newMaterial = await API.AddMaterial(material);
      this.setState({ materials: [...this.state.materials, newMaterial] });
    } catch (error) {
      console.log(error.message);
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  deleteMaterial = async id => {
    const filterState = mats => mats.filter(mat => mat.id !== id);
    try {
      this.setState({ isLoading: true });
      await API.DeleteMaterial(id);
      this.setState(state => ({
        materials: filterState(state.materials),
      }));
    } catch (error) {
      console.log(error.message);
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  editMaterial = async (id, values) => {
    try {
      this.setState({ isLoading: true });
      // console.log(id, values);

      const changedMaterial = await API.EditMaterial(id, values);
      console.log('changedMaterial: ', changedMaterial);

      const changeMaterials = mats =>
        mats.map(mat => (mat.id !== id ? mat : changedMaterial));

      this.setState(state => ({ materials: changeMaterials(state.materials) }));
      console.log(this.state.materials);
    } catch (error) {
      console.log(error.message);
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { addMaterial, deleteMaterial, editMaterial } = this;
    const { materials, isLoading, error } = this.state;

    return (
      <Layout>
        <GlobalStyle />
        <SkeletonTheme color="#313131" highlightColor="#525252">
          <Box mx="auto" width="container" p={4}>
            <CreateMaterialForm onSubmit={addMaterial} />
            {/* {isLoading && <Box>Loading...</Box>} */}
            {!error ? (
              <MaterialsList
                isLoading={isLoading}
                materials={materials}
                onDelete={deleteMaterial}
                onEdit={editMaterial}
              />
            ) : (
              <Box as="p">
                Опачки! Что то пошло не так , попробуйте перегрузить страницу.
              </Box>
            )}
          </Box>
        </SkeletonTheme>
      </Layout>
    );
  }
}
