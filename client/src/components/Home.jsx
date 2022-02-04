import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCountries } from '../actions'
import CARDS from './Card'

const Home = () => {

    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)

    useEffect(() => {
        dispatch(getCountries())
    },[])

    function handdleClick(e) {
        e.preventDefault()
        dispatch(getCountries())
    }

    return (
        <div>
            <Link to='/countries'>
                <h1>Crear Actividad</h1>
            </Link>
            <button onClick={(e) => { handdleClick(e) }}>
                Volver a Cargar Todos Los Paises
            </button>
            <div>
                <select>
                    <option value='asc'>Ascedente</option>
                    <option value='des'>Descedente</option>
                </select>
                <select>
                    <option value='ce'>Continente</option>
                    <option value='act'>Actividad</option>
                    <option value='pobl'>Población</option>
                </select>
                {          
                    allCountries?.map(el => {
                        
                        return (
                            <Fragment key={el.ID}>
                                {console.log(allCountries)}
                                <CARDS
                                    
                                    name={el.name}
                                    img={el.flags}
                                    cont={el.continent}
                                    cp={el.capital}
                                    cca3={el.ID}
                                    subr={el.subregion}
                                    area={el.area}
                                    popu={el.population}
                                />
                            </Fragment>
                        )
                    })
                }
            </div>
        </div>
        )
}
export default Home;