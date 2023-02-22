import tick from "../assets/images/greentick.png"
const CallBack = () => {
    return (
        <div className="pay">
            <div style={{textAlign:"center"}}>
            <img width="50px" src={tick}/>
            <h1 className="font">Thank you for the payment!</h1>
            <p className="font">NHL Singles<br/>
🏒 Jets ML<br/>
🏒 Jets vs Islanders U6<br/>

Parlay 1<br/>
🏒 Stars ML<br/>
🏀 Cincinnati ML<br/>

College Basketball Singles<br/>
🏀 Florida +3<br/>
YOLO<br/>
🏀 LSU +3</p>
            </div>
        </div>
    );
}

export default CallBack;