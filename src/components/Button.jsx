const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="p-2 text-lg bg-blue-500 text-white rounded cursor-pointer">
      {children}
    </button>
  )
}

export default Button
