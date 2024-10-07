import { useEffect, useState } from "react";
import classes from "../styles/cryptoSquare.module.css";
import { useNavigate } from "react-router-dom"
const VITE_URL = import.meta.env.VITE_URL;

const CryptoSquare = () => {
    const [cryptos, setCryptos] = useState([]); // CryptoArray
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const fetchCryptos = async () => {
        try {
            console.log("Fetching cryptos...");
            const response = await fetch(`${VITE_URL}/crypto/random-cryptos`); // Check that the endpoint is right
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            console.log("Fetched crypto data:", data); // Verify data structure

            // Verify if you have the quotes and combine them with the crypto info

            if (data && data.quotes) {
                setCryptos(data.quotes)
            } else {
                throw new Error("Invalid Data structure")
            }

        } catch (error) {
            console.error("Error fetching cryptos:", error);
            setError("Failed to fetch cryptos");
        } finally {
            setLoading(false); // End the load state
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
                            <th>Symbol</th>
                            <th>Price</th>
                            <th>Exchange Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cryptos.map((crypto, index) => {
                            const { name, symbol, price, exchangeRate } = crypto;

                            // Validate the fields
                            if (!name && !symbol && !exchangeRate && (price === undefined || price === null)) return null;

                            return (
                                <tr key={index}>
                                    <td>{name.slice(0, -4)}</td>
                                    <td>{symbol.slice(0, -3)}</td>
                                    <td>{price.toFixed(8)}</td> {/* Show the price on 5 decimals*/}
                                    <td>{exchangeRate.toFixed(2)}%</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <p>No crypto data available.</p>
            )}
            <button onClick={() => navigate("/all-cryptos")} className={classes.TableButton}>See all cryptos</button>
        </div>
    );
};

export default CryptoSquare;
