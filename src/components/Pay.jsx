const Pay = () => {
    return (
        <div>
            <h1 className="font">Pay in Bitcoin!</h1>
            <h1 className="font green">LIMITED TIME OFFER! <del>$249.99</del> $1</h1>
            <img src="https://rapidpassportco.com/assets/images/image19.png?v=e314f384" width="50px" />
            <form style={{ marginTop: '10px' }} method="POST" action="https://testnet.demo.btcpayserver.org/apps/dLX6vBctkzp15KooezCBpCUNcQ5/pos">
                <input type="hidden" name="email" value="customer@example.com" />
                <input type="hidden" name="orderId" value="CustomOrderId" />
                <input type="hidden" name="notificationUrl" value="https://example.com/callbacks" />
                <input type="hidden" name="redirectUrl" value="https://test-btc-rapid.vercel.app/#/complete" />
                <button className="button" type="submit" name="choiceKey" value="payment">Pay Now!</button>
            </form>
        </div>
    );
}

export default Pay;