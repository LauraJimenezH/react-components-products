import React from 'react';
import PropTypes from 'prop-types';

import FilterableProductTable from '../FilterableProductTable/components';

const Main = ({ products }) => {
  return (
    <div>
      <FilterableProductTable products={products} />
    </div>
  )
}

Main.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default Main;
