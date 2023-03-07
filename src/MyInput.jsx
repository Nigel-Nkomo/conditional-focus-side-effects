import { useEffect, useRef } from "react";

export default function MyInput({ value, onChange, shouldFocus }) {
  const ref = useRef(null);

  //   PROBLEM
  //   useEffect(() => {
  //     ref.current.focus();
  //   }, []);

  // SOLUTION
  useEffect(() => {
    if (shouldFocus) {
      ref.current.focus();
    }
  }, [shouldFocus]);

  return (
    <>
      <input type="text" ref={ref} value={value} onChange={onChange} />
    </>
  );
}
