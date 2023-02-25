function useStates(initialValue) {
  return [initialValue, "world"];
}

const [a, b] = useStates("hello");
