import React from 'react'

function Paginated({ countriesPerPage, allCountries, pagin }) {
    const pageNumbers = []

    for (let i = 0; i < Math.ceil(allCountries / countriesPerPage); i++) {
        pageNumbers.push(i+1)
    }
    return (
        <div>
            <ul className='paginado'>
                {
                    pageNumbers?.map(number => {
                        return (
                            <li className='number' key={number}>
                                <button onClick={() => pagin(number)}>{number}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Paginated
