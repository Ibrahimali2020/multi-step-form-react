export default function Button({ onClick, className, children }) {
  return <button type='submit' className={className} onClick={onClick}>{children}</button>
}
