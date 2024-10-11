import classes from "../styles/marketLosers.module.css"
import { useEffect, useState } from "react";
const VITE_URL = import.meta.env.VITE_URL;

const MarketEvolutionSquareLosers = () => {
    const [market, setMarket] = useState([]); // Array de criptomonedas
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMarket = async () => {
        try {
            console.log("Fetching market data...");
            const response = await fetch(`${VITE_URL}/market/losers`); // Asegúrate de que el endpoint sea correcto
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            console.log("Fetched market status:", data); // Verifica la estructura de los datos

            if (data && data.quotes) {
                setMarket(data.quotes); // Establece los datos
            } else {
                throw new Error("Invalid data structure")
            }

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
            <h2 className={classes.Subtitle}>Market Losers</h2>
            {market.length > 0 ? (
                <table className={classes.MarketTable}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>change</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {market.map((mark, index) => {
                            const { name, symbol, exchangeRate, price } = mark;

                            // Validar la existencia de los campos
                            if (!name || !symbol || !exchangeRate || !price) return null;

                            return (
                                <tr key={index}>
                                    <td>{name}</td>
                                    <td>{symbol}</td>
                                    <td>{exchangeRate}%</td>
                                    <td>{parseFloat(price).toFixed(3)}</td>
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


export default MarketEvolutionSquareLosers;



