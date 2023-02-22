import { CardOffer } from "./CardOffer";

const Pay = (props) => {
    return (
        <div className="pay">
            <h1 style={{position:'absolute',top:'25px'}} className="font">Packages</h1>
            <CardOffer key="package1" heading="Package 1" price="1" package='Lorem ipsum odor amet' package1='consectetuer adipiscing elit'/>
            <CardOffer key="package2" heading="Package 2" price="2" package='Lorem ipsum odor amet' package1='consectetuer adipiscing elit'/>
            <CardOffer key="package3" heading="Package 3" price="3" package='Lorem ipsum odor amet' package1='consectetuer adipiscing elit'/>
        </div>
    );
}

export default Pay;