
export function Button({ children, size }) {
  return <button className={`rounded-xl bg-black text-white px-4 py-2 text-${size}`}>{children}</button>;
}
