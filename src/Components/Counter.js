import { useState } from "react"
export default function Counter (props) {
    const [number, setNumber] = useState(props.count)

  
    return (
      <div>
        <h4>
          {props.name === '' ? 'Counter' : props.name + "'s Counter"} :{' '}
          {number}
        </h4>
        <button className='btn btn-success' onClick={() => setNumber(number+1)}>
          +
        </button>
        <button className='btn btn-danger' onClick={props.decrement}>
          -
        </button>
        <button className='btn btn-secondary' onClick={props.deleteCounter}>
          Delete Me
        </button>
      </div>
    )
  }