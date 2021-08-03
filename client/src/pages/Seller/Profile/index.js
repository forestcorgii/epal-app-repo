// import HomePageBL from "../HomePageBL";
import "../../../assets/css/seller.css";
import user from "../../../assets/img/user.jpg";

import { useState } from "react";
import Modal from "../../../components/ModalComponents/ModalProfile";
import Backdrop from "../../../components/ModalComponents/Backdrop";
import BL from "./bl";
function SellerProfile(props) {
	const [modalIsOpen, setModalIsOpen] = useState(false); //modal should not be opened first so false
	const { data, loading } = BL();

	function editHandler() {
		setModalIsOpen(true);
		console.log('Clicked!');
		console.log(props.text);
	}
	function closeModalHandler() {
		setModalIsOpen(false);
	}

	// const { loading, error,data } = HomePageBL();
	return (
		<div className="seller-profile">
			{/* After the login, (After the seller have been verified), the seller's page will display */}
			{/* Hi (Seller's full name) */}
			<div className="user-logo">
				<center>
					<img src={user} height="200px" width="200px" />
					<p className="seller-name1">Hi! Naruto!</p>
					<p className="seller-id">Seller ID: M3091437</p>
				</center>
			</div>
			{loading ? (
				<div>Loading Profile..</div>
			) : (
				<div className="seller-info">
					{/* <p className="seller-name2">Naruto Uzamaki </p>
				   <p className="seller-gender"> ex. 28 </p>
				 <p className="seller-age"> ex. 28 </p> */}
					<p className="seller-ID">{data.getSellerPrivateInfo.id}</p>
					<p className="seller-store-name">
						{data.getSellerPrivateInfo.storename}
					</p>
					<p className="seller-address">{data.getSellerPrivateInfo.address}</p>
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					
				
					<div className="card">
						<h2>{props.text}</h2>
						<div className="actions">
							<button className="btn" onClick={editHandler}>
								Edit Information
							</button>
						</div>

						{modalIsOpen && (
							<Modal
								{...data.getSellerPrivateInfo}
								onCancel={closeModalHandler}
								onConfirm={closeModalHandler}
							/>
						)}
						{modalIsOpen && <Backdrop onClick={closeModalHandler} />}
					</div>
				</div>
			)}
		</div>

		//   <div className="seller-top-box">
		//   <div className="seller-information">
		//     {/* After the login, (After the seller have been verified), the seller's page will display */}
		//     {/* Hi (Seller's full name) */}
		//     <p className="seller-name">Hi {data.getSellerInfo.username}!</p>
		//     <p className="seller-store-name">{data.getSellerInfo.store.storename}</p>
		//     <p className="seller-address">{data.getSellerInfo.store.address}</p>
		//     <h5>Description: The only Mafia Store that you can find</h5>
		//     Tags: Shabu, Marijuana, Bato <br />
		//     <br />
		//
		//   </div>

		// </div>
	);
}
export default SellerProfile;
