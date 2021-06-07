import expandIcon from '../../assets/icons/expand-icon.png'


function EmailForm (){
    return (
        <section class="email-form-container">
        <div class="avatar"></div>
        <form id="email-form">
          <header class="form-header">
            <div>
            <img class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABEElEQVR42mNgGLyAnzLtGQx5lGn/x1BAvvZ0hn8M/8k3IA2snWwDYNrJNCAVrp0sA5C1/2doY2AhTXsKinYQ/MZwiKGTwY+BnTztCPiSoZlBCr/2ZDzaIfAXwwIGEVzakwhqh8BXDGGUaIfA5ZghMocE7SC4m4EL1QAmhnkkGnGEgY9SI9aie4N0I7IoNeI7gw4hI2YzxDOUMnQzLGTYznARS0ztwoxQVCNQM5MEQzrDDoafKEY44jeiAGs5GcVwDa7iBLZkhTACV3ZmY6iHu0QTnxH4ygMNhkNgNVXYpSFG4C9QGBmaGP4znMIlDTKCcIk0heEfgwxuI9QIGsDEsIohm7Lqh42hktIKkGPg62AActUwumHce/0AAAAASUVORK5CYII=" alt="reply button"/>
            <span class="sender-email">Freepik Company (no-reply@freepik.com)</span>
          </div>
          <div><img className="icon" src={expandIcon} alt="expandIcon" /></div>
          </header>
          <textarea name="email-reply" form="email-form" rows="5"></textarea>
          <img class="icon" src="https://www.gstatic.com/images/icons/material/system/1x/more_horiz_black_20dp.png"></img>
        <div class="action-bar">
            <div class="left-bar">
            <button class="button">Send</button>
          <img class="icon button" src="https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_white_20dp.png"></img>
          <img class="icon" src="https://www.gstatic.com/images/icons/material/system/1x/text_format_black_20dp.png"></img>
          <img class="icon" src="https://www.gstatic.com/images/icons/material/system/1x/attach_file_black_20dp.png"></img>
          <img class="icon" src="https://www.gstatic.com/images/icons/material/system/1x/insert_link_black_20dp.png"></img>
          <img class="icon" src="https://www.gstatic.com/images/icons/material/system/1x/insert_emoticon_black_20dp.png"></img>
          <img class="icon" src="https://www.gstatic.com/images/icons/material/system/1x/drive_black_20dp.png"></img>
          <img class="icon" src="https://www.gstatic.com/images/icons/material/system/1x/insert_photo_black_20dp.png"></img>
          <img class="icon" src="https://www.gstatic.com/images/icons/material/system/1x/lock_clock_black_20dp.png"></img>
          <img class="icon" src="https://www.gstatic.com/images/icons/material/system/1x/ink_pen_black_20dp.png"></img>
          </div>

          <div class="right-bar">
          <img class="icon" src="https://www.gstatic.com/images/icons/material/system/1x/more_vert_black_20dp.png"></img>
          <img class="icon" src="https://www.gstatic.com/images/icons/material/system/1x/delete_black_20dp.png"></img> 
          </div>

        </div>
        </form>
      </section>
    )
}

export default EmailForm