import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import style from './AddCard.module.css';

function AddCard() {
    return (
        <div className={style.card}>
            <AiOutlinePlus size="50px" color='#ddd'/>
        </div>
    );
}

export default AddCard;