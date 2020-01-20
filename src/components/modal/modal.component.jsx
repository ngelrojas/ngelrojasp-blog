import React from 'react';
import './modal.styles.scss';


export const Modal = ({handleClose, show, children })=>{
    const showhiddenClassName = show ? 'modal display-block' : 'mocal display-none';
    
    const handleCopy = e => {
        children.select
        document.execCommand('copy');
        console.log('copied');
    }

    const handleChange = e => {
        let field = e.target.value 
    }

    return(
        <div className={showhiddenClassName}>
            <section className="modal-main"> 
                
                <textarea onChange={handleChange} value={children || ''} cols="30" rows="5">
                </textarea>
                
                <button onClick={handleClose}>close</button>
                <button onClick={handleCopy}>copy</button>

            </section>
        </div>
    );
};
