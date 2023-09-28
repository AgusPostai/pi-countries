import { useState } from "react";
import { postActivity, getCountries } from "../../redux/actions/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import validation from "./validations"
import "./FormPage.css"


const Form = () => {

    const dispatch = useDispatch();
    const countries = useSelector(state => state.countriesSelected);

    const [errors, setErrors] = useState({});
    const [selected, setSelected] = useState("");

    const countriesList = countries.map(country => {
        return ({
            name: country.name,
            flag: country.flags?.png
        })
    }).sort((a, b) => a.name.localeCompare(b.name));;

    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],

    })

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...form,
            [event.target.name]: event.target.value
        }))

    }

    const handleCountries = (event) => {
        if (event.target.value !== 'Select Country' && !form.countries.includes(event.target.value)) {
            setForm({
                ...form,
                countries: [...form.countries, event.target.value]
            })
            setErrors(validation({
                ...form,
                countries: [...form.countries, event.target.value]
            }))
        }
    }
    const handleDuration = (event)=>{
        setForm({
            ...form,
            duration: event.target.value
        })
    }

    const handleSeasons = (event) => {
        if (event.target.value !== 'Select season' && !form.season.includes(event.target.value)) {
            setForm({
                ...form,
                season: event.target.value
            })
            setErrors(validation({
                ...form,
                season: event.target.value
            }))
        }
    }

    const handleDifficulty = (event) => {
        if (event.target.value !== 'Select difficulty' && !form.difficulty.includes(event.target.value)) {
            setForm({
                ...form,
                difficulty: event.target.value
            })
            setErrors(validation({
                ...form,
                difficulty: event.target.value
            }))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (form.name === '' && form.duration === '' && form.difficulty === '' && form.season === '' && form.countries === '') return alert('Incomplete fields, please complete all fields')
        dispatch(postActivity(form))
        setForm({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: [],
        })
    }

    const deleteCountry = (event) => {
        setForm({
            ...form,
            countries: form.countries.filter((country) => country !== event.target.value)
        })
        setErrors(validation({
            ...form,
            countries: form.countries.filter((country) => country !== event.target.value)
        }))
    }

    const handleErrors = (event) => {
        event.preventDefault();
        setErrors(validation({
            ...form,
            countries: [...form.countries, event.target.value]
        }))
        handleSubmit(event)
    }

    const disabled = (form.name === "" || form.difficulty === "" || form.duration === "" || form.season === "" || form.countries.length === 0)


    useEffect(() => {
        dispatch(getCountries())

    }, [dispatch])

    return (
        <div className='div-container'>
            <form className='form-container' onSubmit={handleSubmit}>

                <h1 className='label'>Crea tu actividad turistica</h1>

                <div className='input-container'>
                    <div className='label'>
                        <label >Nombre </label>
                    </div>
                    <input className='input' type="text" onChange={handleChange} value={form.name} name="name" placeholder="Nombre de la actividad" />
                    {errors.name && <p className='errors'>{errors.name}</p>}
                </div>

                <div className='input-container'>
                    <div className='label'>
                        <label>Dificultad </label>
                    </div>
                    <select className='select-div' onChange={handleDifficulty}>
                        <option className='' value="empty">Selecciona la dificultad</option>
                        <option value="1">⭐️</option>
                        <option value="2">⭐️⭐️</option>
                        <option value="3">⭐️⭐️⭐️</option>
                        <option value="4">⭐️⭐️⭐️⭐️</option>
                        <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
                    </select>


                    {errors.difficulty && <p className='errors'>{errors.difficulty}</p>}
                </div>
                <div className='input-container'>
                    <div className='label'>
                        <label >Duracion en horas </label>
                    </div>
                   <input  className="input" type="text" onChange={handleDuration} value={form.duration} name="Duracion" placeholder="Ingrese la duracion en horas (1hs)" />                    {errors.duration && <p className='errors'>{errors.duration}</p>}
                </div>

                <div className='input-container'>
                    <div className='label'>
                        <label>Estacion</label>
                    </div>
                    <select className='select-div' onChange={handleSeasons}>
                        <option value="empty">Selecciona la estacion del año</option>
                        <option value="Summer">Verano</option>
                        <option value="Autumn">Otoño</option>
                        <option value="Winter">Invierno</option>
                        <option value="Spring">Primavera</option>
                    </select>
                    {errors.season && <p className='errors'>{errors.season}</p>}
                </div>

                <div className='input-container'>
                    <div className='label'>
                        <label >Pais</label>
                    </div>
                    <select className='select-div' value={selected} onChange={event => [handleCountries(event), setSelected(event)]}>
                        <option>Selecciona el pais</option>
                        {countriesList?.map(country => {
                            return (
                                <option key={country.name}>
                                    {country.name}
                                    

                                </option>
                            )
                        })}
                    </select>
                </div>
                {errors.countries && <p className='errors'>{errors.countries}</p>}
                <div>
                    {form.countries.map((country) => {
                        return (
                            <div className='country-selector' key={country}>
                                <p>{country}</p>
                                <img src={country.flag} className="flag"/>
                                <button className='btn-country-selector' onClick={deleteCountry} value={country}> X </button>
                            </div>
                        )
                    })}
                </div>

                <div>
                    <button className='button-submit' type="submit" disabled={disabled ||
                        errors.name ||
                        errors.difficulty ||
                        errors.duration ||
                        errors.countries ||
                        errors.season} onClick={handleErrors}>Crear actividad</button>
                </div>
            </form>
        </div>
    )
}

export default Form;