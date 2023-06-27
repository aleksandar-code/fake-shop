import { useRef } from "react"

export default function CheckoutCard({ updateCard, card, name, price, img, qty }) {
  const inputValue = useRef<HTMLInputElement>(null)
  return <>
    <div className="checkout-card">
      <img src={img}></img>
      <div className="user-interaction">
        <h6>{name}</h6>
        <h6>Quantity:</h6>
        <button className="decrement" onClick={() => {
          if (inputValue) {
            if (inputValue.current && Number(inputValue.current.value) - 1 !== -1) {
              inputValue.current.value = String((Number(inputValue.current.value) - 1))
              const newCard = { id: card.id, name: name, price: price, img: img, qty: Number(inputValue.current.value) }
              updateCard(newCard)
            }
          }
        }}>
          <span className="icon-wrapper">
            <svg className="svg-minus" width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1C0 0.867392 0.0526785 0.740215 0.146447 0.646447C0.240215 0.552679 0.367392 0.5 0.5 0.5H7.5C7.63261 0.5 7.75979 0.552679 7.85355 0.646447C7.94732 0.740215 8 0.867392 8 1C8 1.13261 7.94732 1.25979 7.85355 1.35355C7.75979 1.44732 7.63261 1.5 7.5 1.5H0.5C0.367392 1.5 0.240215 1.44732 0.146447 1.35355C0.0526785 1.25979 0 1.13261 0 1Z" fill="black" />
            </svg>
          </span>
        </button>
        <input type="number" ref={inputValue} value={qty} min={0} max={100} onChange={(e) => {
          const newCard = { id: card.id, name: name, price: price, img: img, qty: Number(e.currentTarget.value) }
          updateCard(newCard)
        }}></input>
        <button className="increment" onClick={() => {
          if (inputValue) {
            if (inputValue.current && Number(inputValue.current.value) + 1 !== 101) {
              inputValue.current.value = String((Number(inputValue.current.value) + 1))
              const newCard = { id: card.id, name: name, price: price, img: img, qty: Number(inputValue.current.value) }
              updateCard(newCard)
            }
          }
        }}>
          <span className="icon-wrapper">
            <svg className="svg-plus" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6 0C6.13261 0 6.25979 0.0526785 6.35355 0.146447C6.44732 0.240215 6.5 0.367392 6.5 0.5V5.5H11.5C11.6326 5.5 11.7598 5.55268 11.8536 5.64645C11.9473 5.74021 12 5.86739 12 6C12 6.13261 11.9473 6.25979 11.8536 6.35355C11.7598 6.44732 11.6326 6.5 11.5 6.5H6.5V11.5C6.5 11.6326 6.44732 11.7598 6.35355 11.8536C6.25979 11.9473 6.13261 12 6 12C5.86739 12 5.74021 11.9473 5.64645 11.8536C5.55268 11.7598 5.5 11.6326 5.5 11.5V6.5H0.5C0.367392 6.5 0.240215 6.44732 0.146447 6.35355C0.0526785 6.25979 0 6.13261 0 6C0 5.86739 0.0526785 5.74021 0.146447 5.64645C0.240215 5.55268 0.367392 5.5 0.5 5.5H5.5V0.5C5.5 0.367392 5.55268 0.240215 5.64645 0.146447C5.74021 0.0526785 5.86739 0 6 0Z" fill="black" />
            </svg>
          </span>
        </button>
        <button className="checkout-delete">Delete</button>
      </div>
      <h6>{price}$</h6>
    </div>

  </>
}
