import BL from "./bl";
export default function AddProductForm(props) {
  const { formik } = BL();

  return (
    <div className="side-nav">
      <p>Add new product here</p>
      {JSON.stringify(formik.errors)}
      <form onSubmit={formik.handleSubmit}>
        <div className="inventory-input-details">
          <input
            type="text"
            name="productName"
            placeholder="Enter Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.productName}
          ></input>
        </div>
        <div className="inventory-input-details">
          <input
            type="text"
            name="description"
            placeholder="Enter description"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.description}
          ></input>
        </div>
        <div className="inventory-input-details">
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.price}
          ></input>
        </div>
        <div className="inventory-input-details">
          <input
            type="number"
            name="quantity"
            placeholder="Enter quantity"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.quantity}
          ></input>
        </div>
        <div className="inventory-input-details">
          <input
		  	
            type="file"
            name="image"
            onChange={(e) => {
              formik.setFieldValue("image", e.target.files[0]);
            }}
          />
        </div>
        <div class="btn-add-product">
          <input type="submit" value="SAVE" />
		
        </div>
      </form>
    </div>
  );
}
