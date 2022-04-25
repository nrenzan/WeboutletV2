import React from 'react';

function AddProduct() {
  return (
    <div>
      <form>
        <input
          type="text"
          className="form-control"
          id="product-name"
          placeholder="Name"
        />
      </form>
    </div>
  );
}
export default AddProduct;
