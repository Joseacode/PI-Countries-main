const { Router } = require('express')
const axios = require('axios')
const { conn, Country, T_Activity } = require('../db')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.jss();
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
    const apiUrl = await axios.get("https://restcountries.com/v3/all")

    const apiInfo = await apiUrl.data.map(dat => {
        return {
            ID: dat.cca3,
            name: dat.name.common,
            flags: dat.flags[1],
            continente: dat.continents.map(dat => dat),
            capital: dat.capital,
            subregion: dat.subregion,
            area: dat.area,
            poblacion: dat.population
        }
    })
    return apiInfo
}

const getDbInfo = async () => {
    return await Country.findAll({
        include: {
            model: T_Activity,
            atributes: ['name', 'difficulty', 'duration', 'seasons'],
            throw: {
                atributes: []
            }
        }
    })
}

const getAllCountries = async () => {
    const apiInfo = await getApiInfo()
    const dBinfo = await getDbInfo()
    const allInfo = apiInfo.concat(dBinfo)
    console.log(allInfo)
    return allInfo
}

router.get('/countries', async (req, res) => {
    const name = req.query.name
    console.log(name)

    let allCountries = await getAllCountries()

    if (name) {
        let countryName = allCountries.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        console.log(countryName)
        countryName.length ?
            res
                .status(200)
                .send(countryName)
            :
            res
                .status(404)
                .send('Pais Inexistente')
    } else {
        res
            .status(200)
            .send(allCountries)
    }
})

router.get('/countries/:id', async (req, res) => {
    const { id } = req.params

    console.log(id)

    const allCountries = await getAllCountries()
    console.log(allCountries)
    if (id) {
        let countryId = await allCountries.filter((el) => el.ID.toLowerCase().includes(id.toLowerCase()))
        countryId ?
            res
                .status(200)
                .json(countryId)
            :
            res
                .status(404)
                .send('No se encuentra el Pais')
    }
})

router.post('/activity', async (req, res) => {
    const { name, difficulty, duration, seasons,  } = req.body

    if (name && difficulty && duration && seasons) {

    }

})

module.exports = router;