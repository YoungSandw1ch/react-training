import { Layout } from '../utils/Layout';
import { GlobalStyle } from '../utils/GlobalStyle';
import { Component } from 'react';
import { CreateMaterialForm } from '../CreateMaterialForm';
import { Box } from 'Components/Common';
import * as API from 'services/materialAPI';
import { MaterialsList } from '../MaterialsList';

export class App extends Component {
  state = {
    materials: [],
  };

  async componentDidMount() {
    const materials = await API.GetMaterials();
    console.log('get materials: ', materials);
    this.setState({ materials });
  }

  async componentDidUpdate(pProps, pState) {
    // if (pState.materials === this.state.materials) return;
  }

  addMaterial = material => {
    console.log('material: ', material);
    API.AddMaterial(material);
    this.setState({ materials: [...this.state.materials, material] });
  };

  render() {
    const { addMaterial } = this;
    const { materials } = this.state;

    return (
      <Layout>
        <GlobalStyle />
        <Box mx="auto" width="container" p={4}>
          <CreateMaterialForm onSubmit={addMaterial} />
          <MaterialsList materials={materials} />
        </Box>
      </Layout>
    );
  }
}
