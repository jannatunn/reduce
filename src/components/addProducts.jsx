import React, { useState } from "react";
import { saveProduct } from "../features/ProductSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createProduct = async (e) => {
    e.preventDefauolt();
    await dispatch(saveProduct({ title, price }));
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={createProduct} className="box mt-5">
        <div className="field">
          <label className="label">TItle</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-success">button</button>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;
