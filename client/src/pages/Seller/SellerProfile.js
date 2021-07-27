import HomePageBL from "./HomePageBL";
function SellerProfile(){
  const { loading, error,data } = HomePageBL();
    return (
      <div className="seller-top-box">
      <div className="seller-information">
        {/* After the login, (After the seller have been verified), the seller's page will display */}
        {/* Hi (Seller's full name) */}
        <p className="seller-name">Hi {data.getSellerInfo.username}!</p>
        <p className="seller-store-name">{data.getSellerInfo.store.storename}</p>
        <p className="seller-address">{data.getSellerInfo.store.address}</p>
        <h5>Description: The only Mafia Store that you can find</h5>
        Tags: Shabu, Marijuana, Bato <br />
        <br />
        &nbsp; Edit Information
      </div>
      <div className="seller-add-product">
        <form className="form-sellerpage">
          <div className="product-info">
            <span>Enter Product's Name</span> <br />
            <input
              type="type"
              placeholder="Enter product's name"
            ></input>
          </div>
          <div className="product-info">
            <span>Enter Product's Description</span> <br />
            <input
              type="type"
              placeholder="Enter product's description"
            ></input>
          </div>
          <div className="product-info">
            <span>Enter Category</span> <br />
            <input type="type" placeholder="Enter category"></input>
          </div>
          <div className="product-info">
            <span>Enter Quantity</span> <br />
            <input type="type" placeholder="Enter quantity"></input>
          </div>
          <div className="product-info">
            <span>Enter Price</span> <br />
            <input type="type" placeholder="Enter price"></input>
          </div>
          <br />
          <input type="button" value="Add Image File"></input> &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
          &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
          <input type="button" value="Add Product"></input>
        </form>
      </div>
    </div>
      );

}

export default SellerProfile;