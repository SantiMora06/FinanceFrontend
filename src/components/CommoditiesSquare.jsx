import { useEffect, useState } from "react";
import classes from "../styles/commoditySquare.module.css";
const VITE_URL = import.meta.env.VITE_URL;

const CommoditiesSquare = () => {
    const [commodities, setCommodities] = useState([]); // Keep as an array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCommodities = async () => {
        try {
            console.log("Fetching commodities...");
            const response = await fetch(`${VITE_URL}/commodities/random-commodities`); // Ensure endpoint matches your backend
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            console.log("Fetched commodity data:", data); // Log the data

            if (data && data.quotes) {
                setCommodities(data.quotes)
            } else {
                throw new Error("Invalid data structure")
            }

        } catch (error) {
            console.log("Error fetching commodities", error);
            setError("Failed to fetch commodities");
        } finally {
            setLoading(false); // Ensure loading state is set in both success and error cases
        }
    };

    useEffect(() => {
        fetchCommodities();
    }, []);

    console.log("Loading:", loading);
    console.log("Error:", error);
    console.log("Commodity Data:", commodities); // Update log to reflect array

    if (loading) return <p>Loading commodities...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={classes.CommodityBox}>
            <h2 className={classes.Subtitle}>Commodities</h2>
            {commodities.length > 0 ? (
                <table className={classes.CommodityTable}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Price</th>
                            <th>Exchange Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {commodities.map((commodity, index) => {
                            const { name, symbol, price, exchangeRate } = commodity;


                            // Check if any value is not null before rendering
                            if (!name && !symbol && !price && !exchangeRate) return null;

                            return (
                                <tr key={index}>
                                    {name && <td>{name}</td>}
                                    {symbol && <td>{symbol.slice(0, -3)}</td>}
                                    {price && <td>{price.toFixed(4)}</td>}
                                    {exchangeRate && <td>{exchangeRate.toFixed(2)}%</td>}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <p>No commodity data available.</p>
            )}
        </div>
    );
};

export default CommoditiesSquare;
