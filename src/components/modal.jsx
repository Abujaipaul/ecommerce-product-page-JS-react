import { useState } from "react"

function Modal({isOpen, handleClick, closeModal, thumbnailPicture, thumbNailActive, sliderPicture}){
   const [num, setNum] = useState(0)
    const totalPicture = sliderPicture.length
    // <!-- modal window -->
    function handleClickOutside(){
      closeModal()
    }


    function nextButton(){
      setNum((prev) => prev + 1)
    }
    function previousButton(){
      setNum((prev) => prev - 1)
      console.log(totalPicture)
    }
    
    function stopNext(){
      if(num === totalPicture){
       setNum(0)
      }
    }

    stopNext()

    function stopPrevious(){
      if (num < 0){
         setNum(totalPicture - 1)
      }
    }

    stopPrevious()


    if(isOpen === true)
     
     return(
         <div className="modal_window" onClick={handleClickOutside}>
            <div className="modal_box" onClick={(e) => e.stopPropagation()}>
                <div className="close_modal">
                   <img src="./images/icon-close.svg" alt="close_modal_button" onClick={closeModal} id="close_modal_button" loading="lazy" />
                </div>
                <div className="previous_box" onClick={previousButton}>
                     <img src="./images/icon-previous.svg" alt="icon-previous" id="previous_icon_button" />
                </div>
                <div className="next_box" onClick={nextButton}>
                     <img src="./images/icon-next.svg" alt="icon-next" id="next_icon_button" />
                </div>
                
                <span className="counter_text">0</span>

               <div className="modal_primary_photo_box">
                 <img src={sliderPicture[num]} loading="lazy" alt="image-product-1" id="modal_primary_photo" />
               </div>
               <div className="modal_secondary_photo_box">
                 {
                    thumbnailPicture.map((picture, index) => (
                       <div className="thumbnail_box thumbnail_box_small" key={index}>
                         <img src={picture} alt={`product ${index}`} onClick={() => handleClick(index)} className={index === thumbNailActive ? "thumbnail_focus" : " "}/>
                      </div>
                    ))
                 }
                 
                
               </div>
            </div>
         </div>
     )
}


export default Modal