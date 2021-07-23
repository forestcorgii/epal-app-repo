import SocksBlack from './imagesProducts/socks black.jpeg';
import ShoesBlack from './imagesProducts/shoes black.jpeg';
import SocksNude from './imagesProducts/socks nude.jpeg';
import TshirtBlack from './imagesProducts/tshirt black.jpeg';
import WatchBlack from './imagesProducts/watch black.jpeg';
import Brownies from './imagesProducts/brownies1.jpeg';
import M1 from './imagesProducts/marijuana1.jpeg';
import M2 from './imagesProducts/marijuana2.jpeg';
import M3 from './imagesProducts/marijuana3.jpeg';
import './Pages.css';

function SellerPage(){
    return (
      <div className="SellerPage-whole-page">
        <section>

    <center> <h1>Seller Page</h1> </center> 
        

        <div className="SellerPage">
          <div className="seller-top-box"> 
              <div className="seller-information">
                  {/* After the login, (After the seller have been verified), the seller's page will display */}
                  {/* Hi (Seller's full name) */}
                  <p className="seller-name">Hi Sean Ivan Celoso!</p>
                  <p className="seller-store-name">The Mafia Store</p>
                  <h5>Description: The only Mafia Store that you can find</h5>
                  Tags: Shabu, Marijuana, Bato <br/><br/>
                
                    &nbsp; 
                  Edit Information
              </div>
              <div className="seller-add-product">
              
                  <form className="form-sellerpage">
                    <div className="product-info">
                      <span>Enter Product's Name</span> <br/>
                      <input type="type" placeholder="Enter product's name"></input>
                    </div >
                    <div className="product-info">
                    <span>Enter Product's Description</span> <br/>
                    <input type="type" placeholder="Enter product's description"></input>
                    </div>
                    <div className="product-info">
                    <span>Enter Category</span> <br/>
                    <input type="type" placeholder="Enter category"></input>
                    </div>
                    <div className="product-info">
                    <span>Enter Quantity</span> <br/>
                    <input type="type" placeholder="Enter quantity"></input>
                    </div>
                    <div className="product-info">
                    <span>Enter Price</span> <br/>
                    <input type="type" placeholder="Enter price"></input>
                    </div>
                    <br/>
                    <input type="button" value="Add Image File"></input> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                    <input type="button" value="Add Product"></input> 
                  </form>
                 
              </div>
        </div>

          

{/* THIS PLAY PRODUCTS HERE! HAHAHA */}

          <div className="seller-product-display">
            <center>
            <div className="layer">
                <div className="catalog-product">
                    <img src={SocksBlack} alt="Brownies" height="200px" width="130px;"></img><br/>
                    <span className="product-name">Black Socks</span><br/>
                    <span className="price">₱100.00</span>
                </div>
                <div className="catalog-product">
                  <img src={SocksNude} alt="Brownies"  height="200px" width="130px;"></img><br/>
                  <span className="product-name">Brown Socks</span><br/>
                    <span className="price">₱100.00</span>
                </div>
                <div className="catalog-product">
                  <img src={M2} alt="marijuana2"  height="200px" width="150px;"></img><br/>
                  <span className="product-name">Green1</span><br/>
                    <span className="price">₱100.00</span>
                </div>
            </div>
            <div className="layer">
                <div className="catalog-product">
                    <img src={WatchBlack} alt="Brownies"  height="200px" width="200px;"></img><br/>
                    <span className="product-name">Black Watch</span><br/>
                    <span className="price">₱100.00</span>
                </div>
                <div className="catalog-product">
                  <img src={ShoesBlack } alt="Brownies"  height="200px" width="250px;"></img><br/>
                  <span className="product-name">Black Shoes</span><br/>
                    <span className="price">₱100.00</span>
                </div>
                <div className="catalog-product">
                    <img src={Brownies} alt="Brownies"  height="200px" width="250px;"></img><br/>
                    <span className="product-name">Brownies</span><br/>
                    <span className="price">₱100.00</span>
                </div>
            </div>
            <div className="layer">
                <div className="catalog-product">
                    <img src={M1} alt="marijuana1"  height="200px" width="250px;"></img><br/>
                    <span className="product-name">Green2</span><br/>
                    <span className="price">₱100.00</span>
                </div>
                
                <div className="catalog-product">
                    <img src={TshirtBlack} alt="Brownies"  height="200px" width="250px;"></img><br/>
                    <span className="product-name">Black Tshirt</span><br/>
                    <span className="price">₱100.00</span>
                </div>
                <div className="catalog-product">
                    <img src={M3} alt="marijuana3"  height="200px" width="250px;"></img><br/>
                    <span className="product-name">Green3</span><br/>
                    <span className="price">₱100.00</span>
                </div>
            </div>
            </center>
         </div>

        </div>  

        {/* <div className="seller-product-add">
          <form className="seller-form-add-product">
            <div className="seller-form-details">
              <span>Product Name</span>
                <input type="type" placeholder="Enter product's name"></input>
            </div>
            <div className="seller-form-details">
              <span>Product Description</span>
                <input type="type" placeholder="Enter product's description"></input>
            </div>
            <div className="seller-form-details">
              <span>Price</span>
                <input type="type" placeholder="Enter price"></input>
            </div>
            <div className="seller-form-details">
              <span>Quantity</span>
                <input type="type" placeholder="Enter quantity"></input>
            </div>
           
          </form>
          </div> */}
          {/* 
          <div className="seller-add-product-image">
                <input type="button" value="Add Image"></input>
            </div> */}



        



        </section>



        </div>
      );

}

export default SellerPage;