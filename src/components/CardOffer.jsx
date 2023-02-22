import React from 'react'
import btc from '../assets/images/btc.webp'
import light from '../assets/images/light.svg'

export const CardOffer = (props) => {
  return (
    <div className="card">
      <h1 className="font">{props.heading}</h1>
      <h1 className="font"><text className='green'>$</text> {props.price}</h1>
      <h2 className="font">{props.package}</h2>
      <hr/>
      <h2 className="font">{props.package1}</h2>
      <hr/>
      <h1 className="font green">LIMITED TIME OFFER!</h1>
      <img src="https://rapidpassportco.com/assets/images/image19.png?v=e314f384" width="50px" />
      <form style={{ marginTop: '10px' }} method="POST" action="https://btcpay0.voltageapp.io/apps/3mpnxnDcDQH3YBw8wETeavfSQvAN/pos">

      {/* <form style={{ marginTop: '10px' }} method="POST" action="https://testnet.demo.btcpayserver.org/apps/dLX6vBctkzp15KooezCBpCUNcQ5/pos">
        */}
        <input type="hidden" name="email" value="hello@example.com" />
        <input type="hidden" name="orderId" value="CustomOrderId" />
        <input type="hidden" name="redirectUrl" value="https://example.com/thanksyou" />
        <input type="hidden" name="notificationUrl" value="https://example.com/callbacks" />
        <button className="button" type="submit" name="choiceKey" value={props.value}>
          Pay With:
        <img width='20px'src={btc} style={{marginLeft:'4px'}}/>
        <img width='20px'src={light}/>
        </button>
      </form>
    </div>
  )
}
