import React from "react";

function Counter(props) {
  return (
    <div>
      <button
        className="btn btn-sm btn-success "
        onClick={() => props.onDecrease(props.counter)}
      >
        -
      </button>
      <span id="counterArea" className="badge badge-sm mx-2 badge-info">
        {props.counter.count}
      </span>
      <button
        className="btn btn-sm btn-success mx-2"
        onClick={() => props.onIncrease(props.counter)}
      >
        +
      </button>
      <button
        className="btn btn-danger btn-sm mx-2 my-2"
        onClick={() => props.onReset(props.counter)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
