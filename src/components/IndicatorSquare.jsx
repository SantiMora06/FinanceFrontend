import classes from "../styles/indicatorsSquare.module.css"


const IndicatorSquare = () => {


    return (<>
        <div className={classes.indicatorsBox}>
            <h2 className={classes.Subtitle}> Indicators</h2>
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
            <div className={classes.smallContainer}>
                <p> /*Name, lastprice, volume, ceva*/ </p>
            </div>

        </div></>);
}


export default IndicatorSquare;