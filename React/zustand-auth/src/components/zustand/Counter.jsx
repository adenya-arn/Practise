import useStore from "../../store/zustand/useAuthStore";

function Counter() {
  const count = useStore((state) => state.count);
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease);
  const reset = useStore((state) => state.reset);
  const doubleCount = useStore((state) => state.doubleCount);

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={doubleCount}>Double</button>
    </div>
  );
}

export default Counter;
