import classes from "../styles/allCrypto.module.css"
import { useEffect, useState } from "react";
const VITE_URL = import.meta.env.VITE_URL;

const AllCryptosData = () => {
    const [allCryptos, setAllCryptos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAllCryptos = async () => {
        try {
            console.log("Fetching all the cryptos...");
            const response = await fetch(`${VITE_URL}/crypto/all-cryptos`);
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            console.log("Fetched crypto data:", data);
            setAllCryptos(data);  // Directly set the response data

        } catch (error) {
            console.log("Error fetching all the cryptos", error);
            setError("Failed to fetch all the cryptos");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllCryptos();
    }, []);

    if (loading) return <p>Loading cryptos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={classes.AllCryptoBox}>
            <h2 className={classes.Subtitle}>Cryptos</h2>
            {allCryptos.length > 0 ? (

                allCryptos.map((crypto, index) => {
                    const { name, symbol, currency } = crypto;
                    if (!name || !symbol || !currency) return null;
                    return (
                        <tr key={index}>
                            <td>{name}</td>
                            <td>{symbol}</td>
                            <td>{currency}</td>
                        </tr>
                    );
                })

            ) : (
                <p>No crypto data available.</p>
            )}
        </div>
    );
}

export default AllCryptosData;
