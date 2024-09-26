import { useEffect, useState } from "react";
import classes from "../styles/cryptoSquare.module.css";
const VITE_URL = import.meta.env.VITE_URL;

const CryptoSquare = () => {
    const [cryptos, setCryptos] = useState([]); // Keep as an array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCryptos = async () => {
        try {
            console.log("Fetching cryptos...");
            const response = await fetch(`${VITE_URL}/crypto/random-cryptos`); // Ensure endpoint matches your backend
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            console.log("Fetched crypto data:", data); // Log the data
            setCryptos(data); // Set the fetched data directly
        } catch (error) {
            console.log("Error fetching cryptos", error);
            setError("Failed to fetch cryptos");
        } finally {
            setLoading(false); // Ensure loading state is set in both success and error cases
        }
    };

    useEffect(() => {
        fetchCryptos();
    }, []);

    console.log("Loading:", loading);
    console.log("Error:", error);
    console.log("Crypto Data:", cryptos); // Update log to reflect array

    if (loading) return <p>Loading cryptos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={classes.CryptoBox}>
            <h2 className={classes.Subtitle}>cryptos</h2>
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
                            const name = crypto.data?.name ? crypto.data.name.split(" ").pop() : null;
                            const interval = crypto.data?.interval || null;
                            const unit = crypto.data?.unit ? crypto.data.unit.split(" ").pop() : null;
                            const date = (crypto.data?.data && crypto.data.data.length > 0) ? crypto.data.data[0].date : null;
                            const price = (crypto.data?.data && crypto.data.data.length > 0 && crypto.data.data[0].value)
                                ? parseFloat(crypto.data.data[0].value).toFixed(3)
                                : null;

                            // Check if any value is not null before rendering
                            if (!name && !interval && !unit && !date && !price) return null;

                            return (
                                <tr key={index}>
                                    {name && <td>{name}</td>}
                                    {interval && <td>{interval}</td>}
                                    {unit && <td>{unit}</td>}
                                    {date && <td>{date}</td>}
                                    {price && <td>{price}</td>}
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
