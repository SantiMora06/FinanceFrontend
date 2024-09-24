import classes from "../styles/cryptoSquare.module.css"

const CryptoSquare = () => {
    return (<>
        <div className={classes.CryptoBox}>
            <h2 className={classes.Subtitle}> Crypto </h2>
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

export default CryptoSquare;