import Header from "./components/header"
import MainBox from "./components/mainBox"
import CartBox from "./components/cartbox"
import { useState } from "react"
import Modal from "./components/modal"

function App() {

        
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

     const sliderPicture = [
      "./images/image-product-1.jpg",
      "./images/image-product-2.jpg",
      "./images/image-product-3.jpg",
      "./images/image-product-4.jpg",
     ]
    


  return (
    <>
      <div className="container"> 
         <div className="main_container">
        <Header itemPicked={itemPicked} toggleCart={toggleCart} cartActive={cartActive} />
        <MainBox thumbnailPicture={thumbnailPicture} thumbNailActive={thumbNailActive} handleClick={handleClick} increment={increment} decrement={decrement} itemPicked={itemPicked} addToCart={addToCart} openModal={openModal}/>
        <CartBox isCartOpen={cartOpen} itemPicked={itemPicked} cartActive={cartActive} setCartActive={setCartActive}/>
       </div>
       <Modal isOpen={isOpen} closeModal={closeModal} thumbnailPicture={thumbnailPicture} handleClick={handleClick} thumbNailActive={thumbNailActive} sliderPicture={sliderPicture}/>
      </div>
    </>
  )
}

export default App
