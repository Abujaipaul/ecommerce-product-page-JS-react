import { useState } from "react"
import CartBox from "./cartbox"
import Modal from "./modal"

function Header(){
     const [cartOpen, setCartOpen] = useState(false)
     const [cartActive, setCartActive] = useState(true)
     const [itemPicked, setItemPicked] = useState(1)
     const [thumbNailActive, setThumbNailActive] = useState(null)
     const [isOpen, setIsOpen] = useState(false)

     function toggleCart(){
        setCartOpen((prev) => !prev)
     }
     function increment (){
      setItemPicked((prev) => prev + 1)
     }
     function decrement (){
      setItemPicked((prev) => prev - 1)
     }
     function addToCart(){
      setCartActive(true)
     }
     function handleClick(index){
       if(index === thumbNailActive){
        setThumbNailActive(null)
       }
       else{
        setThumbNailActive(index)
       }

     }
     function openModal(){
       setIsOpen(true)
       console.log(isOpen)
     }
     function closeModal(){
      setIsOpen(false)
     }
     




     const thumbnailPicture = [
       "/images/image-product-1-thumbnail.jpg",   
      "./images/image-product-2-thumbnail.jpg", 
      "./images/image-product-3-thumbnail.jpg",
      "./images/image-product-4-thumbnail.jpg",
     ]




    return (
        <>
         <div className="container">
          <div className="main_container">
           {/* header-content */}
           <div className="header">
               <div className="hamburger_menu">
                     <img src="./images/icon-menu.svg" alt="menu" id="hamburger_menu_icon" />
                     <div className="main_menu_box">
                        <div className="hamburger_menu_page">
                          <img src="./images/icon-close.svg" alt="close_menu" id="close_menu_icon" />
                          <div className="hamburger_menu_page_nav">
                            <div className="hamburger_nav">
                             <ul>
                               <li><a href="#">Collections</a></li>
                               <li><a href="#">Men</a></li>
                               <li><a href="#">Women</a></li>
                               <li><a href="#">About</a></li>
                               <li><a href="#">Contact</a></li>
                             </ul>
                            </div>
                          </div>
                        </div>
                      </div>    
               </div>
              <div className="header_main">
                <div className="header_logo">
                    <img src="./images/logo.svg" alt="logo" />
                </div>
                <div className="header_nav">
                 <ul>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                 </ul>
                </div>
              </div>
             <div className="header_tabs">
                <div className="cart_icon" onClick={toggleCart}>
                    <img src="./images/icon-cart.svg" alt="cart_icon" id="cart_icon_toggle" />
                     {cartActive ? <span className="cart_number" id="item_picked">{itemPicked}</span> : null}
                    {/* {cart box} */}
                    <CartBox isCartOpen={cartOpen} itemPicked={itemPicked} cartActive={cartActive} setCartActive={setCartActive}/>
                </div>
                <div className="profile_picture">
                    <img src="./images/image-avatar.png" alt="profile_picture" />
                </div>
             </div>
           </div>  
           
             {/* main content  */}
           <div className="main_box">
            <div className="mobile_photo_box">
               <div className="mobile_photo_holder">
                  <img src="./images/image-product-1.jpg" alt="mobile_photo" id="mobile_photo" />
               </div>
               <div className="mobile_photo_buttons">
                <div className="previous_box_mobile">
                     <img src="./images/icon-previous.svg" alt="icon-previous_mobile" id="previous_icon_button_mobile" />
                </div>
                <div className="next_box_mobile">
                     <img src="./images/icon-next.svg" alt="icon-next_mobile" id="next_icon_button_mobile" />
                </div>
               </div>

            </div>
            <div className="photo_box">
               <div className="primary_photo_box">
                 <img src="./images/image-product-1.jpg" alt="image-product-1" id="primary_photo" />
               </div>
               <div className="secondary_photo_box">
                   {
                    thumbnailPicture.map((picture, index) => (
                       <div className="thumbnail_box" key={index}>
                      <img src={picture} alt={`thumbnail ${index}`} onDoubleClick={openModal} onClick={() => handleClick(index)} className={index === thumbNailActive ? "thumbnail_focus" : " "} />
                        </div>
                    ))
                   }  
               </div>
            </div>
            <div className="order_box">
                <div className="order_box_header_text">
                  <h1>SNEAKER COMPANY</h1>
                  <h2>Fall Limited Edition Sneakers</h2>
                </div>
                <div className="order_box_info_text">
                  <p className="info_main_text">These low-profile sneakers are your perfect casual wear
                   companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                   <div className="price_info">
                    <p id="main_price">$125.00 <span id="price_percentage">50%</span></p>
                    <p id="discount_price">$250.00</p>
                   </div>
                </div>
                <div className="order_box_controls">
                 <div className="arithmetic_controls">
                    <div className="substract_box">
                         <img src="./images/icon-minus.svg" alt="substract_button" id="substract_button" onClick={decrement}/>
                    </div>
                     <span id="item_picked">{itemPicked}</span>
                    <div className="addition_box">
                        <img src="./images/icon-plus.svg" alt="addition_button" id="addition_button" onClick={increment}/>
                    </div>   
                 </div>

                 <div className="add_to_cart_box">
                    <img src="./images/shopping-cart-thin-svgrepo-com.svg" alt="cart_icon" id="add_to_cart_icon" />
                    <span id="add_to_cart_text" onClick={addToCart}>Add to cart</span>
                 </div>
                </div>
            </div>
           </div>

           </div>
           
           <Modal isOpen={isOpen} closeModal={closeModal} thumbnailPicture={thumbnailPicture}/>


         </div>
        </>
    )
}


export default Header