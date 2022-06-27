import { useCallback } from "react";

function CounterComponent({ counterValue, isLoggedIn, incrementAction, decrementAction, resetAction }) {
  const increment = useCallback(() => {
    incrementAction();
    // TODO call incrementAction
  }, [incrementAction]);
  const decrement = useCallback(() => {
    decrementAction();
    // TODO call decrementAction
  }, [decrementAction]);
  const reset = useCallback(() => {
    resetAction();
    // TODO call resetAction
  }, [resetAction]);

  const disabled = !isLoggedIn;
  return (
    <div className="App">
      <h3>Value: {counterValue}</h3>
      {!isLoggedIn && <div>Please login first</div>}
      <br />
      <button onClick={increment} disabled={disabled}>
        Increase
      </button>
      <button onClick={decrement} disabled={disabled}>
        Decrease
      </button>
      <button onClick={reset} disabled={disabled}>
        Reset
      </button>
    </div>
  );
}

export default CounterComponent;
