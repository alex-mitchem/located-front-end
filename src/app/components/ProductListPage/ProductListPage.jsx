import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const ProductListPageComponent =
({
  className, productList, productEntryPressed, litProduct, device,
}) => (
  <div className={ className }>
    {productList.map((product) => (
      <div
        key={ product.productId }
        className='productRow'
        onClick={ () => productEntryPressed(product.productId, litProduct, device) }
      >
        <h3>{product.productName}</h3>
        <h2>{product.price}</h2>
      </div>))}
  </div>
);

ProductListPageComponent.propTypes = {
  className: PropTypes.string,
  productEntryPressed: PropTypes.func.isRequired,
  litProduct: PropTypes.number.isRequired,
  device: PropTypes.shape({
    url: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  productList: PropTypes.arrayOf(PropTypes.shape({
    productName: PropTypes.string.isRequired,
    productId: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
  })).isRequired,
};

ProductListPageComponent.defaultProps = {
  className: '',
};

export default styled(ProductListPageComponent)`
box-sizing: border-box;
display: flex;
justify-items: center;
flex-direction: column;
align-content: stretch;

h3 {
  text-align: center;
  color: slateGrey;
  flex-basis: auto;
  margin: 0;
}

h2 {
  text-align: center;
  color: darkGrey;
  flex-basis: auto;
  margin: 0;
}

.productRow {
  margin: 0 calc(40vmax - 40vh);
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1vw;
  background-color: white;
  border-style: solid;
  border-width: 1px 2px;
  border-color: darkGrey;
  color: slateGrey;
  flex-basis: auto;
  font-weight: bold;
}
`;
