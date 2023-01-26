const Button = ({children}) => {
    return (<button 
        className='bg-black text-lg text-teal-200 rounded-lg px-5 dark:bg-white dark:text-teal-700'
        onClick={() => {alert( children )}}>
        
        {children}
      </button>
    )
  }

  export default Button;