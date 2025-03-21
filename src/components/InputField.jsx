const InputField = ({ value, onChange, onKeyDown }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="Enter GitHub username"
      className="p-2 text-lg mr-2 flex-1 max-w-xs border rounded bg-white"
    />
  )
}

export default InputField
