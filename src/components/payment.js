import React, { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

// import React from "react";

const Payment = () => {
    const [isActive, setIsActive] = useState(true);
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
        setIsActive(current => !current);
    }

    const [phone, setPhone] = useState("");
    let handleSubmit = async (e) => {
        
        e.preventDefault();
        try {
          await fetch("https://clic.world/fedapi/v4/v1/get_mm_name", {
            
            method: "POST",
            body: JSON.stringify({
              phone: phone,
              currency: "UGX",
            }),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(results => results.json())
          .then((response) => {
            console.log(response)
          })
        } catch (err) {
          console.log(err);
        }
      };
    return(
        <div>
            <div className="main">
            <h1><img src="assets/images/logo.png" width="121" height="60" alt="CLIC" /><hr /> Payment Form </h1>
            <div className="content">
            
            <script src="assets/js/easyResponsiveTabs.js" type="text/javascript"></script>
                        {/* <script type="text/javascript">
                            $(document).ready(function () {
                                $('#horizontalTab').easyResponsiveTabs({
                                    type: 'default', //Types: default, vertical, accordion           
                                    width: 'auto', //auto or any width like 600px
                                    fit: true   // 100% fit in a container
                                })
                            });
                            
                        </script> */}
                            <div className="sap_tabs">
                                <div id="horizontalTab"  style={{ display: "block", width: "100%", margin: "0px" }}>
                                    <div className="pay-tabs">
                                        <h2>Select Payment Method</h2>
                                        <div className="row">
                                            <ul className="resp-tabs-list text-center">
                                                <li className={toggleState === 1 ? "resp-tab-item" : "resp-tab-item"} aria-controls="tab_item-1" style={{ width: "40%", color: isActive ? '' : '', }} role="tab" onClick={() => toggleTab(1)}><span> <i className="fa fa-money" style={{ fontSize: "48px" }}></i><br />Mobile Money</span></li>
                                                <li className={toggleState === 2 ? "resp-tab-item" : "resp-tab-item"} aria-controls="tab_item-2" style={{ width: "40%", color: isActive ? '#B3E03F' : '', }} role="tab" onClick={() => toggleTab(2)}><span> <i className="fa fa-qrcode" style={{ fontSize: "48px" }}></i><br />CLIC Pay</span></li>
                                                <div className="clear"></div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="resp-tabs-container">
                                        
                                        <div className={toggleState === 1 ? "tab_item-1" : "tab-1 resp-tab-content"} aria-labelledby="tab_item-1">
                                            <div className="payment-info text-center">
                                                <h3>Pay with Mobile Money</h3>
                                                <form method="POST" onSubmit={handleSubmit}>
                                                    <div className="transaction">	
                                                        <div className="tab-form user-form">		
                                                            <h5>Phone Number</h5>
                                                            <div className="text_box">
                                                            <PhoneInput
                                                            international
                                                            defaultCountry="UG"
                                                            value={phone}
                                                            onChange={setPhone}/>
                                                            {/* <input className="text_box" type="telephone" name="telephone_number" placeholder="070123456789" required="required" value={phone} onChange={(e) => setPhone(e.target.value)} /> */}
                                                            </div>
                                                        </div>
                                                        <div className="clear"></div>
                                                    </div>
                                                    <br />
                                                    <input type="submit" value="Pay 500 UGX" />
                                                </form>
                                            </div>
                                        </div>
                                        <div className={toggleState === 2 ? "tab_item-2" : "tab-1 resp-tab-content"} aria-labelledby="tab_item-2">
                                            <div className="payment-info text-center">
                                                <h3>Scan QRCODE</h3>
                                                <div className="login-tab">
                                                    <div className="user-login"><img src='https://chart.googleapis.com/chart?chs=350x350&cht=qr&chl=$code&choe=UTF-8' />
                                                    </div>
                                                </div>
                                                <div className="single-bottom">
                                                    <ul>
                                                        <li>
                                                            <input type="checkbox"  id="brand" value="" />
                                                            <label htmlFor="brand"><span></span>By checking this box, I agree to the Terms & Conditions & Privacy Policy.</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                </div>
                            </div>	

            </div>
            <p className="footer">Copyright © 2022 clic.world | Payment Form. All Rights Reserved</p>
        </div>
        </div>
    )
}
export default Payment