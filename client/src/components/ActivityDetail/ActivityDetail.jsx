import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getActivitiesById } from '../../redux/actions/actions';
import "./ActivityDetail.css"

const ActivityDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const activity = useSelector(state => state.actividad);
    useEffect(() => {
        dispatch(getActivitiesById(id));
    }, [dispatch, id]);

    return (
        <div>
            <h1>Detalles de la Actividad</h1>
            {Array.isArray(activity) ? (
                <div>
                    <h2>Actividades relacionadas:</h2>
                    <ul>
                        {activity.map(activityItem => (
                            <li key={activityItem.id}>
                                <h2>Nombre de la actividad: {activityItem.name}</h2>
                                <p>Dificultad: {activityItem.difficulty}</p>
                                <p>Duracion: {activityItem.duration} horas</p>
                                <p>Temporada: {activityItem.season}</p>
                                <h3>Paises con esta actividad:</h3>
                                <ul>
                                    {activityItem.Countries.map(country => (
                                        <li key={country.id}>
                                            <p>{country.name}</p>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (

                <div className='letter'>
                    <h2>Nombre de la actividad: {activity.name}</h2>
                    <p>Dificultad: {activity.difficulty}</p>
                    <p>Duracion: {activity.duration} horas</p>
                    <p>Temporada: {activity.season}</p>
                    <h3>Paises con esta actividad :</h3>
                    <ul>
                        {activity.Countries.map(country => (
                            <li key={country.id}>
                                <p>{country.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <Link to="/home">
                <button className='btn-back'>Volver a la pagina principal</button>
            </Link>
        </div>
    );

};

export default ActivityDetail;
