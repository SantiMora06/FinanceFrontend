import classes from "../styles/marketEvolution.module.css"

const MarketEvolutionSquare = () => {

    return (<>
        <div className={classes.marketEvolutionBox}>
            <h2 className={classes.Subtitle}> Market Evolution </h2>
            <div className={classes.smallContainer1}>
                <p> Name</p> <p> Interval</p> <p>Unit </p><p>Date </p><p>Price </p>
            </div>
            <div className={classes.smallContainer}>
                <p> /*Name, lastprice, volume, ceva*/ </p>
            </div>
            <div className={classes.smallContainer}>
                <p> /*Name, lastprice, volume, ceva*/ </p>
            </div>
            <div className={classes.smallContainer}>
                <p> /*Name, lastprice, volume, ceva*/ </p>
            </div>

        </div></>);
}

export default MarketEvolutionSquare;