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
    const [countriesPerPage, setCountriesPerPage] = useState(9)
    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFisrtCountry = indexOfLastCountry - countriesPerPage
    const currentCountry = allCountries.slice(indexOfFisrtCountry, indexOfLastCountry)

    const pagin = (pageNumber) => {
        setCurrentPage(pageNumber)
        currentPage === 1 ? setCountriesPerPage(9) : setCountriesPerPage(10)
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
                    <option value='All'>Cultural</option>
                    <option value='Antarctica'>Ecologico</option>
                    <option value='Asia'>Rural</option>
                    <option value='North America'>Agrario</option>
                    <option value='Africa'>Aventura</option>
                    <option value='Europe'>Deportivo</option>
                    <option value='South America'>Nieve</option>
                    <option value='Oceania'>Golf</option>
                    <option value='Oceania'>Ciclismo</option>
                    <option value='Oceania'>Sol y Playa</option>
                    <option value='Oceania'>Salud</option>
                    <option value='Oceania'>Medico</option>
                    <option value='Oceania'>Cirugia Estetica</option>
                    <option value='Oceania'>Negocios</option>
                    <option value='Oceania'>Gastronomico</option>
                    <option value='Oceania'>Enoturismo</option>
                    <option value='Oceania'>Costero</option>
                    <option value='Oceania'>Cruceros</option>
                    <option value='Oceania'>Aguas Interiores</option>
                    <option value='Oceania'>Urbano</option>
                    <option value='Oceania'>Montaña</option>
                    <option value='Oceania'>Caza</option>
                    <option value='Oceania'>Educativo</option>
                    <option value='Oceania'>Solidario</option>
                    <option value='Oceania'>Social</option>
                    <option value='Oceania'>Cinematografico</option>
                    <option value='Oceania'>Religioso</option>
                    <option value='Oceania'>Industrial</option>
                    <option value='Oceania'>Compras</option>
                    <option value='Oceania'>Ludico-Festivo</option>
                    <option value='Oceania'>Eventos y Acontesimientos</option>
                    <option value='Oceania'>Literario</option>
                    <option value='Oceania'>Ornitologico</option>
                    <option value='Oceania'>Solteros</option>
                    <option value='Oceania'>Gay o LGBT</option>
                    <option value='Oceania'>Turismo de Lujo</option>
                    <option value='Oceania'>Turismo Espiritual</option>
                    <option value='Oceania'>Turismo Sostenible</option>
                    <option value='Oceania'>Turismo Tematico</option>
                    <option value='Oceania'>Mochilero</option>
                    <option value='Oceania'>Camping</option>
                    <option value='Oceania'>Cementerios</option>
                    <option value='Oceania'>Turismo de Guerra</option>
                    <option value='Oceania'>Turismo de Idiomas</option>
                    <option value='Oceania'>Turismo de Espacial</option>
                    <option value='Oceania'>Turismo de Ufologico</option>
                    <option value='Oceania'>Turismo de Negro</option>
                    <option value='Oceania'>Turismo de Marihuna</option>
                    <option value='Oceania'>Turismo de Favelas</option>
                    <option value='Oceania'>Turismo Atomico</option>
                    <option value='Oceania'>Turismo de Juegos</option>
                    <option value='Oceania'>Turismo de Pueblos Abandonados</option>
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