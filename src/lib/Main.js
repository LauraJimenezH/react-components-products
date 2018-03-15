import { connect } from 'react-redux';
import MainComponent from './components/Main';

const MainWithRedux = connect(
  function mapStateToProps(state) {
    const {
      filteredProducts
    } = state.AppReducer;

    return {
      products: filteredProducts
    };
  }
)(MainComponent);

export default MainWithRedux;
