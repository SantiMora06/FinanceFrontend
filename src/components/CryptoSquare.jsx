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
            const response = await fetch(`${VITE_URL}/crypto/random-cryptos`); // Asegúrate de que el endpoint es correcto
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            console.log("Fetched crypto data:", data); // Verifica la estructura de datos

            // Verifica si tienes quotes y combínalos con la información de crypto

            setCryptos(response); // Establece los datos combinados
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
                            <th>Symbol</th>
                            <th>Price</th> {/* Nueva columna para el precio */}
                        </tr>
                    </thead>
                    <tbody>
                        {cryptos.map((crypto, index) => {
                            const name = crypto.name;
                            const symbol = crypto.symbol;
                            const price = crypto.price;

                            // Validar los campos
                            if (!name && !symbol && price === undefined) return null;

                            return (
                                <tr key={index}>
                                    <td>{name}</td>
                                    <td>{symbol}</td>
                                    <td>{price.toFixed(2)}</td> {/* Mostrar precio con 2 decimales */}
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

/*quotes 

[
    [
        {
            "symbol": "API3USD",
            "name": "API3 USD",
            "price": 1.597,
            "changesPercentage": -1.52418,
            "change": -0.0247179,
            "dayLow": 1.565,
            "dayHigh": 1.63,
            "yearHigh": 4.89945,
            "yearLow": 0.99294,
            "marketCap": 138015895.672,
            "priceAvg50": 1.47626,
            "priceAvg200": 2.28459,
            "exchange": "CRYPTO",
            "volume": 12935899.98717595,
            "avgVolume": 9906535,
            "open": 1.62172,
            "previousClose": 1.62172,
            "eps": null,
            "pe": null,
            "earningsAnnouncement": null,
            "sharesOutstanding": 86421976,
            "timestamp": 1727697547
        }
    ],
    [
        {
            "symbol": "EMTUSD",
            "name": "Emanate USD",
            "price": 0.00677982,
            "changesPercentage": -0.00269322,
            "change": -1.826e-7,
            "dayLow": 0,
            "dayHigh": 0,
            "yearHigh": 0.048834,
            "yearLow": 0.005772,
            "marketCap": 0,
            "priceAvg50": 0.0088183,
            "priceAvg200": 0.00944063,
            "exchange": "CRYPTO",
            "volume": 535,
            "avgVolume": 1025,
            "open": 0.00678,
            "previousClose": 0.00678,
            "eps": null,
            "pe": null,
            "earningsAnnouncement": null,
            "sharesOutstanding": null,
            "timestamp": 1669401000
        }
    ],
    [
        {
            "symbol": "DQQQUSD",
            "name": "Invesco QQQ Trust Defichain USD",
            "price": 10.09099,
            "changesPercentage": 4.84631,
            "change": 0.46644,
            "dayLow": 9.57763,
            "dayHigh": 48.97686,
            "yearHigh": 326.22226,
            "yearLow": 7.66661,
            "marketCap": 0,
            "priceAvg50": 11.65314,
            "priceAvg200": 85.92036,
            "exchange": "CRYPTO",
            "volume": null,
            "avgVolume": 68,
            "open": 9.62456,
            "previousClose": 9.62456,
            "eps": null,
            "pe": null,
            "earningsAnnouncement": null,
            "sharesOutstanding": 0,
            "timestamp": 1727685720
        }
    ],
    [
        {
            "symbol": "ASKUSD",
            "name": "Permission Coin USD",
            "price": 0.00017538,
            "changesPercentage": -0.9336,
            "change": -0.00000165278,
            "dayLow": 0.00017423,
            "dayHigh": 0.00017844036,
            "yearHigh": 0.000525,
            "yearLow": 0.000171,
            "marketCap": 2835301.66407,
            "priceAvg50": 0.00019942,
            "priceAvg200": 0.000345955,
            "exchange": "CRYPTO",
            "volume": 369460.0195675696,
            "avgVolume": 327527,
            "open": 0.00017703278,
            "previousClose": 0.00017703278,
            "eps": null,
            "pe": null,
            "earningsAnnouncement": null,
            "sharesOutstanding": 16166619136,
            "timestamp": 1727697380
        }
    ],
    [
        {
            "symbol": "GRIM EVOUSD",
            "name": "Grim EVO USD",
            "price": 0.0616659,
            "changesPercentage": -1.85797,
            "change": -0.00116742,
            "dayLow": 0,
            "dayHigh": 0,
            "yearHigh": 3.53398,
            "yearLow": 0.049129,
            "marketCap": 0,
            "priceAvg50": 0.08064156,
            "priceAvg200": 0.17368,
            "exchange": "CRYPTO",
            "volume": 10,
            "avgVolume": 186,
            "open": 0.06283332,
            "previousClose": 0.06283332,
            "eps": null,
            "pe": null,
            "earningsAnnouncement": null,
            "sharesOutstanding": null,
            "timestamp": 1665454980
        }
    ]
]*/