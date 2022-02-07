const initialState = {
    countries: [],
    allCountries :[]
}

function rootReducer(state = initialState, action) {
    console.log(action.payload)
    switch (action.type) {
        case 'GET_COUNTRIES':
            return ({
                ...state,
                countries: action.payload,
                allCountries: action.payload
            })
        case 'FILTER_BY_CONTINENTS':
            const allCountries = state.allCountries
            const continentsFiltered = action.payload === 'All' ? allCountries : allCountries.filter(el => el.continents === action.payload)
            return ({
                ...state,
                countries: continentsFiltered
            })
        case 'FILTER_BY_ORDER':
            console.log('Saludos desde Reducers', state.allCountries)
            let sortCountries = []
            if (action.payload === 'paasc') {
                sortCountries = state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0
                })
            } 
            if (action.payload === 'pades') {
                sortCountries = state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (b.name > a.name) {
                        return 1
                    }
                    return 0
                })
            }
            if (action.payload === 'poasc') {
                
                sortCountries = state.countries.sort(function (a, b) { return a.population - b.population })
                console.log(sortCountries)
            }
            if (action.payload === 'podes') {
                sortCountries = state.countries.sort(function (b, a) { return a.population - b.population })
                
            }
            return ({
                ...state,
                countries: sortCountries
            })
        default:
            return ({
                ...state
                })
    }
    
}
export default rootReducer