import React, { useState } from 'react';
import './styleComponents.css'
import InputBase from '@material-ui/core/InputBase';

function SearchBar(props) {
    
    const [productName, setProductName] = useState("")
       
    
    function handleChange(event){
        setProductName(event.target.value)
    }

    function productSearch(){
        props.onSearch(productName)
    }
    
    return (
        <div className='searchBar'>
            <InputBase 
                className="inputSearch"
                defaultValue="Naked input"
                type="type" 
                placeholder='Produit' 
                value={productName} 
                onChange={(e)=>handleChange(e)} />
            <button onClick={()=>productSearch()}>Rechercher</button>
        </div> 
    )
}

export default SearchBar; 