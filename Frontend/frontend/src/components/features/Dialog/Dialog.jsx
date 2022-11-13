import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from "./Dialog.module.css"

 const Dialog = ({timer,dialogText,setDialogText,cancelText,confirmText,onConfirm}) => {
    
    useEffect(()=>{
        if(dialogText?.length>0 && timer){
            setTimeout(()=>{setDialogText("")},5000)
        }
    },[dialogText])
    return (
    <div onClick={(e)=>{
        e.target.classList.forEach(className => {
        if(className =="parent"){
            setDialogText("");
        }
        });
        }} style={dialogText?.length>0?{display:"block",zIndex:"100"}:{display:"none",position:"absolute",zIndex:"100"}} className={styles.dialogContainer}>
        <div  className={`${styles.dialog} parent`}>
            <div className={styles.dialogForm}>
            {dialogText && <p>{dialogText}</p>}
                <div className={styles.flex__buttons}>
                {confirmText && confirmText.length>0 && onConfirm && <button className={styles.confirm} onClick={
                    ()=>{
                        onConfirm();
                        setDialogText("")
                    }
                }>{confirmText}</button>}
                {cancelText && <button className={styles.cancel} onClick={()=>{setDialogText("")}}>{cancelText}</button>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dialog;
