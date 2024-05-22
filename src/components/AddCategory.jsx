import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setinputValue ] = useState('');

    const OnInputChange = (e) => {
        setinputValue(e.target.value);
     }


     
    const onSubmit = (e) => {
       e.preventDefault();
       if( inputValue.trim().length <=1 ) return;
      //  setcategories(categories => [inputValue, ...categories]);
      onNewCategory( inputValue.trim() );
       setinputValue('');
     }
     

  return (
    <form onSubmit={onSubmit }>
    <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ OnInputChange } 
    />
    </form>
  )
}





