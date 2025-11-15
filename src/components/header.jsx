
import CartBox from "./cartbox"
// import Modal from "./modal"

function Header({itemPicked, toggleCart, cartActive}){
    //  const [cartOpen, setCartOpen] = useState(false)
    //  const [cartActive, setCartActive] = useState(true)
    //  const [itemPicked, setItemPicked] = useState(1)
    //  const [thumbNailActive, setThumbNailActive] = useState(null)
    //  const [isOpen, setIsOpen] = useState(false)

    //  function toggleCart(){
    //     setCartOpen((prev) => !prev)
    //  }
    //  function increment (){
    //   setItemPicked((prev) => prev + 1)
    //  }
    //  function decrement (){
    //   setItemPicked((prev) => prev - 1)
    //  }
    //  function addToCart(){
    //   setCartActive(true)
    //  }
    //  function handleClick(index){
    //    if(index === thumbNailActive){
    //     setThumbNailActive(null)
    //    }
    //    else{
    //     setThumbNailActive(index)
    //    }

    //  }
    //  function openModal(){
    //    setIsOpen(true)
    //    console.log(isOpen)
    //  }
    //  function closeModal(){
    //   setIsOpen(false)
    //  }
     

    //  const thumbnailPicture = [
    //    "/images/image-product-1-thumbnail.jpg",   
    //   "./images/image-product-2-thumbnail.jpg", 
    //   "./images/image-product-3-thumbnail.jpg",
    //   "./images/image-product-4-thumbnail.jpg",
    //  ]

    //  const sliderPicture = [
    //   "./images/image-product-1.jpg",
    //   "./images/image-product-2.jpg",
    //   "./images/image-product-3.jpg",
    //   "./images/image-product-4.jpg",
    //  ]




    return (
        <>
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
                    <CartBox/>
                </div>
                <div className="profile_picture">
                    <img src="./images/image-avatar.png" alt="profile_picture" />
                </div>
             </div>
           </div>  
           


{/*            
           <Modal isOpen={isOpen} closeModal={closeModal} thumbnailPicture={thumbnailPicture}/> */}


        </>
    )
}


export default Header