import React from 'react'

function countryCard({ img, name, cont, cp, cca3, cap, subr, area, popu }){
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt='img' width='200px' height='250px' />
            <h3>{cont}</h3>
            <h3>{cp}</h3>
            <h3>{cca3}</h3>
            <h3>{cap}</h3>
            <h3>{subr}</h3>
            <h3>{area}</h3>
            <h3>{popu}</h3>
        </div>
        )
}
export default countryCard