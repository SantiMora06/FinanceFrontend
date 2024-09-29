import classes from "../styles/indicatorsSquare.module.css"
import { useEffect, useState } from "react";
const VITE_URL = import.meta.env.VITE_URL;


const IndicatorSquare = () => {

    const [indicators, setIndicators] = useState([]); // Array de criptomonedas
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchIndicators = async () => {
        try {
            console.log("Fetching indicators...");
            const response = await fetch(`${VITE_URL}/indicators/random-indicators`); // Asegúrate de que el endpoint sea correcto
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            console.log("Fetched indicators data:", data); // Verifica la estructura de los datos
            setIndicators(data); // Establece los datos
        } catch (error) {
            console.error("Error fetching indicators:", error);
            setError("Failed to fetch indicators");
        } finally {
            setLoading(false); // Termina el estado de carga
        }
    };

    useEffect(() => {
        fetchIndicators();
    }, []);

    if (loading) return <p>Loading indicators...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={classes.IndicatorsBox}>
            <h2 className={classes.Subtitle}>Indicators</h2>
            {indicators.length > 0 ? (
                <table className={classes.IndicatorsTable}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Interval</th>
                            <th>Unit</th>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {indicators.map((indicator, index) => {
                            const { name, interval, unit, data } = indicator.data;

                            // Validar la existencia de los campos
                            if (!name || !interval || !unit || !data || data.length === 0) return null;

                            const { date, value } = data[0]; // Tomar el primer elemento

                            return (
                                <tr key={index}>
                                    <td>{name}</td>
                                    <td>{interval}</td>
                                    <td>{unit}</td>
                                    <td>{date}</td>
                                    <td>{parseFloat(value).toFixed(3)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <p>No indicator data available.</p>
            )}
        </div>
    );
};


export default IndicatorSquare;


