import { useEffect, useState } from "react";

const RandomCommodity = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [randomCommodities, setRandomCommodities] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filteredCommodities, setFilteredCommodities] = useState([])


    const fetchRandomCommodities = async () => {
        try {
            const response = await fetch("http://localhost:5005/api/commodities/random-commodity")
            const data = await response.json()
            setRandomCommodities(data)
            setLoading(false)
        } catch (error) {
            console.log("Error fetching commodities:", error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchRandomCommodities()
    }, [])

    const handleSearch = async (event) => {
        event.preventDefault();
        if (!searchQuery) return;

        try {
            const response = await fetch(`http://localhost:5005/api/commodities/search?query=${searchQuery}`)
            const data = await response.json()
            if (response.ok) {
                setFilteredCommodities(data)
            } else {
                setError(data.error)
            }
        } catch (error) {
            setError("Failed to fetch commodities")
        }
    }

    if (loading) return <p> Loading commodities...</p>
    if (error) return <p>{error}</p>

    return (<>
        <div>
            <p>{randomCommodities.comodity}</p>
            <pre>{JSON.stringify(randomCommodities.data, null, 2)}</pre>

            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for commodities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>

            <h3>Search Results:</h3>
            <ul>
                {filteredCommodities.map((commodity, index) => (
                    <li key={index}>{commodity}</li>
                ))}
            </ul>
        </div>
    </>);
}

export default RandomCommodity;