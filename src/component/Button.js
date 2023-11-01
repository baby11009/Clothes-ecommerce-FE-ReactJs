
function Button({handleClick,value,title}) {
  return (
    <button 
      className="btns"
      onClick={handleClick} 
      value={value} 
    >
      {title}
    </button>
  )
}

export default Button;