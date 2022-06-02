import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCountries, filterContinents, filterByOrder } from '../actions'
import CARDS from './Card'
import Paginated from './Paginated'
import style from './Home.module.css'


const Home = () => {

    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)

    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFisrtCountry = indexOfLastCountry - countriesPerPage
    const currentCountry = allCountries.slice(indexOfFisrtCountry, indexOfLastCountry)

    const pagin = (pageNumber) => {
        setCurrentPage(pageNumber)
        
    }

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    function handdleClick(e) {
        e.preventDefault()
        dispatch(getCountries())
    }

    function handdleFilterCointinents(e) {
       
        e.preventDefault()
        dispatch(filterContinents(e.target.value))
    }

    function handdleOrder(e) {
        console.log(e.target.value)
        e.preventDefault(e)
        
        dispatch(filterByOrder(e.target.value))
        setCurrentPage(1)
        setOrder(`Organized ${e.target.value}`)
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
                <select onChange={(e) => handdleOrder(e)}>
                    <option value=''>Paises --- </option>
                    <option value='paasc'>Paises A-Z</option>
                    <option value='pades'>Paises Z-A</option>
                    <option value='poasc'>Poblacon{' <'}</option>
                    <option value='podes'>Poblacon {' >'}</option>
                </select>
                <select onChange={(e) => handdleFilterCointinents(e)}>
                    <option value='All'>Todos</option>
                    <option value='Antarctica'>Antartida</option>
                    <option value='Asia'>Asia</option>
                    <option value='North America'>America del Norte</option>
                    <option value='Africa'>Africa</option>
                    <option value='Europe'>Europa</option>
                    <option value='South America'>America del Sur</option>
                    <option value='Oceania'>Oceania</option>
                </select>
                <select >
                    <option value='All'>Todos</option>
                    
                </select>
               
                <Paginated 
                    countriesPerPage={countriesPerPage}
                    allCountries={allCountries.length}
                    pagin={pagin}
                />
                <div className={style.container}>
                {
                    currentCountry?.map(el => {
                        
                        return (

                            <div key={el.ID} >

                                    <CARDS

                                        name={el.name}
                                        img={el.flags}
                                        cont={el.continents}
                                        cp={el.capital}
                                        cca3={el.ID}
                                        subr={el.subregion}
                                        area={el.area}
                                        popu={el.population}
                                />
                            </div>
                        )
                    })
                    }
                    </div>
            </div>
        </div>
        )
}
export default Home;