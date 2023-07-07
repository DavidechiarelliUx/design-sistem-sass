
import React, {useEffect, useState} from "react"
import { FaThemeisle } from "react-icons/fa6";
import styles from "./inputCheckbox.module.scss"

const InputCheckbox = (checked) =>{
    // const{ checked} =props || null
    // console.log(checked)
    const[isChecked,setIsChecked] = useState(checked);
   
    const toggleCheckbox = () =>{
        setIsChecked (!isChecked);
    }
   
    useEffect(()=>{
        setIsChecked(isChecked);
    }, [isChecked])


    return (
        <label className={styles.InputCheckbox}>
            <input  className={`${styles.input} ${isChecked ? styles.activeInput : ""}`} 
            type="checkbox" 
            defaultChecked={isChecked} 
            onClick={()=> toggleCheckbox()}/>
            <span
            className={`${styles.checked} ${isChecked ? styles.activeChecked : ""}`}
            >
            <FaThemeisle/>
            </span>
        </label>
    )
}
export default InputCheckbox


