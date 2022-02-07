import React from 'react'
import style from './Card.module.css'

function countryCard({ img, name, cont, cp, cca3, cap, subr, area, popu }) {
    console.log(cont)
    return (
        <div className={style.card}>
            <div className={style.pic}>
                <img src={img} alt='img' width='110px' height='50px'/>
            </div>
            <div className={style.text}>
                <h2>{name}</h2>
                <h3>{cont}</h3>
            </div>

        </div>
        )
}
export default countryCard