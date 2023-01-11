import { Layout } from '../utils/Layout';
import { GlobalStyle } from '../utils/GlobalStyle';
import { Component } from 'react';
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
    }
  }

  async componentDidUpdate(pProps, pState) {
    // if (pState.materials === this.state.materials) return;
  }

  addMaterial = async material => {
    try {
      const newMaterial = await API.AddMaterial(material);
      this.setState({ materials: [...this.state.materials, newMaterial] });
    } catch (error) {
      console.log(error.message);
      this.setState({ error });
    }
  };

  deleteMaterial = async id => {
    const filterState = mats => mats.filter(mat => mat.id !== id);
    try {
      await API.DeleteMaterial(id);
      this.setState(state => ({
        materials: filterState(state.materials),
      }));
    } catch (error) {
      console.log(error.message);
      this.setState({ error });
    }
  };

  editMaterial = async (id, values) => {
    try {
      console.log(id, values);
      const changedMaterial = await API.EditMaterial(id, values);
      console.log('changedMaterial: ', changedMaterial);

      const changeMaterials = mats =>
        mats.map(mat => (mat.id !== id ? mat : changedMaterial));

      this.setState(state => ({ materials: changeMaterials(state.materials) }));
      console.log(this.state.materials);
    } catch (error) {
      console.log(error.message);
      this.setState({ error });
    }
  };

  render() {
    const { addMaterial, deleteMaterial, editMaterial } = this;
    const { materials } = this.state;

    return (
      <Layout>
        <GlobalStyle />
        <Box mx="auto" width="container" p={4}>
          <CreateMaterialForm onSubmit={addMaterial} />
          <MaterialsList
            materials={materials}
            onDelete={deleteMaterial}
            onEdit={editMaterial}
          />
        </Box>
      </Layout>
    );
  }
}
