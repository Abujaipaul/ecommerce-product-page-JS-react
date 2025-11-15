

function CartBox({isCartOpen, itemPicked, cartActive, setCartActive}){

     function deleteCart(){
       setCartActive(false)
     }


    if(isCartOpen === true)

    return(
        <>
         <div className="cart_box" onClick={(e) => e.stopPropagation()} >
          <p id="cart_header">Cart</p>
            <div className="cart_box_items">
              {cartActive ? (
                <div id="cart_indicator_items">
                <div className="main_cart">
                 <div>
                  <img src="./images/image-product-1-thumbnail.jpg" alt="cart_item" id="cart_item_picture" />
                 </div>
                 <div>
                  <p>Fall Limited Edition Sneakers
                   $125.00 x <span id="item_picked">{itemPicked}</span> <span id="total_sum_picked">$375.00</span>
                  </p>
                </div>
                <div>
                 <img src="./images/icon-delete.svg" alt="dustbin_delete" id="dustbin_delete" onClick={deleteCart} />
                </div>
                </div>                               
                <div className="checkout_button">
                <a href="#">Checkout</a>
                </div>
                </div> ) 
              :
                (
                <p id="cart_indicator_empty">Your cart is empty.</p>
                )
              }
           </div>    
         </div>
        </>
    )
}

export default CartBox

