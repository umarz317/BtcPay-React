import tick from "../assets/images/greentick.png"
const CallBack = () => {
    return (
        <div className="pay">
            <div style={{textAlign:"center"}}>
            <img width="50px" src={tick}/>
            <h1 className="font">Thank you for the payment!</h1>
            </div>
        </div>
    );
}

export default CallBack;