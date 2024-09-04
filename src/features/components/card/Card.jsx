import React from 'react';
import style from './Card.module.css';

function Card({ title , description  }) {
    return (
        <div className={style.card}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Card;