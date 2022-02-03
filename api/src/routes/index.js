const { Router } = require('express')
const axios = require('axios')
const { conn, Country, T_Activity } = require('../db')
const { Op } = require('sequelize')

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
            flags: dat.flags[0] || ["Not Flags"],
            continents: dat.continents[0],
            capital: dat.capital,
            subregion: dat.subregion,
            area: dat.area,
            population: dat.population
        }
    })
    return apiInfo
}

router.get("/countries", async (req, res, next) => {
    const { name } = req.query;
    let allCountries = await getApiInfo();
    const dbCountries = await Country.count();
    let countries;

    if (dbCountries === 0) {
        countries = await Country.bulkCreate(allCountries);
    }
    countries = await getApiInfo();
    try {
        if (name) {
            let countryName = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`, // se filtran los paises que contengan el string que llega por query
                    },
                },
            });
            countryName.length
                ? res.status(200).send(countryName)
                : res.status(404).send("No se existe el pais buscado");
        } else {
            res.status(201).send(countries);
        }
    } catch (error) {
        next(error);
    }
});

router.get('/countries/:id', async (req, res, next) => {
    const { id } = req.params
   try {
        if (id) {
            let countryName = await Country.findByPk(id,{
                
                                include: [
                    {
                        model: T_Activity,
                        attributes: ["name"], // se relacionan las actividades de cada país
                        through: {
                            attributes: [],
                        },
                    },
                ],
            });
            
            countryName
                ? res.status(200).send(countryName)
                : res.status(404).send("No se existe el pais buscado");
        } else {
            res.status(201).send(countries);
        }
    } catch (error) {
        next(error);
    }
})

router.post('/activity', async (req, res, next) => {
    
    const { name, difficulty, duration, seasons, country } = req.body
    
    try {
        if (name && difficulty && duration && seasons) {
            const [nActivity, created] = await T_Activity.findOrCreate({
                where: {
                    name: name,
                    difficulty: difficulty,
                    duration: duration,
                    seasons: seasons
                }
            })
            if (country) {
                let countryA = await Country.findAll({ where: { name: country } })
                await nActivity.addCountry(countryA)
                console.log('Actividad', nActivity, 'Pais', countryA, 'body',country)
            }
            res
                .status(200)
                .send(`La actividad ${nActivity.name} se agrego  correctamente`)
        }
    } 
    catch (error) {
        next(error)
    }
})
module.exports = router;