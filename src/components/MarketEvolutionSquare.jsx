import classes from "../styles/marketEvolution.module.css"
import { useEffect, useState } from "react";
const VITE_URL = import.meta.env.VITE_URL;

const MarketEvolutionSquare = () => {
    const [market, setMarket] = useState([]); // Array de criptomonedas
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMarket = async () => {
        try {
            console.log("Fetching market data...");
            const response = await fetch(`${VITE_URL}/stock/market-status`); // Asegúrate de que el endpoint sea correcto
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            console.log("Fetched market status:", data); // Verifica la estructura de los datos
            setMarket(data); // Establece los datos
        } catch (error) {
            console.error("Error fetching market status:", error);
            setError("Failed to fetch market status");
        } finally {
            setLoading(false); // Termina el estado de carga
        }
    };

    useEffect(() => {
        fetchMarket();
    }, []);

    if (loading) return <p>Loading Market...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={classes.MarketsBox}>
            <h2 className={classes.Subtitle}>Market</h2>
            {market.length > 0 ? (
                <table className={classes.MarketTable}>
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
                        {market.map((mark, index) => {
                            const { name, interval, unit, data } = mark.data;

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
                <p>No Market status available.</p>
            )}
        </div>
    );
};


export default MarketEvolutionSquare;



