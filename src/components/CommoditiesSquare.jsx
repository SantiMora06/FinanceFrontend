import classes from "../styles/commoditySquare.module.css"


const CommoditiesSquare = () => {
    return (<>

        <div className={classes.CommodityBox}>
            <h2 className={classes.Subtitle}> Commodities </h2>
            <div className={classes.smallContainer}>
                <p> /*Name, lastprice, volume, ceva*/ </p>
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

export default CommoditiesSquare;