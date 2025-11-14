
function Modal({isOpen, closeModal, thumbnailPicture}){
    // <!-- modal window -->

  
    if(isOpen === true)
     
     return(
         <div className="modal_window">
            <div className="modal_box">
                <div className="close_modal">
                   <img src="./images/icon-close.svg" alt="close_modal_button" onClick={closeModal} id="close_modal_button" loading="lazy" />
                </div>
                <div className="previous_box">
                     <img src="./images/icon-previous.svg" alt="icon-previous" id="previous_icon_button" />
                </div>
                <div className="next_box">
                     <img src="./images/icon-next.svg" alt="icon-next" id="next_icon_button" />
                </div>
                
                <span className="counter_text">0</span>

               <div className="modal_primary_photo_box">
                 <img src="./images/image-product-1.jpg" loading="lazy" alt="image-product-1" id="modal_primary_photo" />
               </div>
               <div className="modal_secondary_photo_box">
                 {
                    thumbnailPicture.map((picture, index) => (
                       <div className="thumbnail_box thumbnail_box_small" key={index}>
                         <img src={picture} alt={`product ${index}`} />
                      </div>
                    ))
                 }
                 
                
               </div>
            </div>
         </div>
     )
}


export default Modal