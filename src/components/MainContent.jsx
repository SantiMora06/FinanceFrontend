import classes from "../styles/mainContent.module.css"
import CommoditiesSquare from "./CommoditiesSquare";
import CryptoSquare from "./CryptoSquare";
import MarketEvolutionSquare from "./MarketEvolutionSquare";
import MarketEvolutionSquareLosers from "./MarketEvolutionSquareLosers";

const MainContent = () => {
    return (<>
        <section className={classes.MainSection}>
            <h1 className={classes.MainTitle}>Welcome to SmartFinance!</h1>
            <p className={classes.MainParagraph}>Keep yourself updated from the last economic trends, statistics and also create your own portfolio, add your favourite
                assets to your wishlist and check the transactions you have performed!
            </p>
            <div className={classes.ContentGrid}>
                <MarketEvolutionSquare />
                <CommoditiesSquare />
                <CryptoSquare />
                <MarketEvolutionSquareLosers />
            </div>
        </section>
    </>);
}

export default MainContent;