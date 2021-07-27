
import "../../assets/css/seller.css";
function Inventory(){
    return (
            <div className="inventory">
              <br/>
                <div className="table-items">
{/* ADD ANOTHER CELL FOR ITEM IMAGE */}
                    <table>
                        <tr>
                            <th>ItemNo.</th>
                            <th>Item Name</th>
                            <th>Item Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                        <tr>
                            <td>JSSM12345</td>
                            <td>Black Shoes</td>
                            <td>Unique black shoes. Made in China</td>
                            <td>1,200</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>JSSM12355</td>
                            <td>Blue Shoes</td>
                            <td>Color blue shoes made in Italy</td>
                            <td>1,200</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>JSSM12365</td>
                            <td>Black Shoes</td>
                            <td>Unique black shoes. Made in China</td>
                            <td>1,200</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>JSSM12375</td>
                            <td>Black Shoes</td>
                            <td>Unique black shoes. Made in China</td>
                            <td>2,000</td>
                            <td>5</td>
                        </tr>
                    </table>
                    
                </div>
                <div className="side-nav">
                    <p>Add new product here</p>

                    <form>
                        <div className="inventory-input-details">
                            <input type="text" placeholder="Enter ItemNo."></input>
                        </div>
                        <div  className="inventory-input-details">
                          <input type="text"  placeholder="Enter Name"></input>
                        </div>
                        <div  className="inventory-input-details">
                          <input type="text"  placeholder="Enter description"></input>
                        </div>
                        <div  className="inventory-input-details">
                          <input type="text"  placeholder="Enter price"></input>
                        </div>
                        <div  className="inventory-input-details">
                         <input type="text" placeholder="Enter quantity"></input>
                        </div>
                    </form>
                        <div class="btn-add-product">
                            <input type="submit" value="ADD ITEM IMAGE"></input>
                            <input type="submit" value="SAVE"></input>
                        </div>


                </div>

            </div>


    );

}

export default Inventory; 