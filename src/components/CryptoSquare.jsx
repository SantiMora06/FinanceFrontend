// src/components/CryptoSquare.jsx
import { useEffect, useState } from "react";
import classes from "../styles/cryptoSquare.module.css";

const VITE_URL = import.meta.env.VITE_URL;

const CryptoSquare = () => {
    const [cryptos, setCryptos] = useState([]); // Array de criptomonedas
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCryptos = async () => {
        try {
            console.log("Fetching cryptos...");
            const response = await fetch(`${VITE_URL}/crypto/random-cryptos`); // Asegúrate de que el endpoint sea correcto
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            console.log("Fetched crypto data:", data); // Verifica la estructura de los datos
            setCryptos(data); // Establece los datos
        } catch (error) {
            console.error("Error fetching cryptos:", error);
            setError("Failed to fetch cryptos");
        } finally {
            setLoading(false); // Termina el estado de carga
        }
    };

    useEffect(() => {
        fetchCryptos();
    }, []);

    if (loading) return <p>Loading cryptos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={classes.CryptoBox}>
            <h2 className={classes.Subtitle}>Cryptos</h2>
            {cryptos.length > 0 ? (
                <table className={classes.CryptosTable}>
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
                        {cryptos.map((crypto, index) => {
                            const { name, interval, unit, data } = crypto.data;

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
                <p>No crypto data available.</p>
            )}
        </div>
    );
};

export default CryptoSquare;
