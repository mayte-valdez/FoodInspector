import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/searchBar';
import axios from 'axios';
import './stylePages.css';
import logoFI from '../images/logoFoodInspector.svg'
import Footer from '../components/Footer'

function Accueil(){
    //Pour stoquer les donnes recuperez par l'api :
    const [products, setProducts] = useState([]);

    // prodcutNameSearch c'est les donnes tapez dans la search ba, transmis par props
   //recuperles donnes de l'api et les stoque (uniquement le tableau 'products') dans le hook'products'
    function getProducts(productNameSearch){
        console.log(productNameSearch)
        axios.get('https://world.openfoodfacts.org/cgi/search.pl?search_terms='+productNameSearch+'&search_simple=1&action=process&json=1')
            .then(response => response.data)
            .then(data => {
                setProducts(data.products) 
                }
            )
    };
    
    return (
        <>
            <div className='header'>
               <img src={logoFI}/>
               <SearchBar onSearch={(p)=>getProducts(p)}/>    
            </div>
            <div className='content'>
                {
                    // écran avant lancer la recherche 
                    products.length == 0 ? 
                    <div className="noProducts">
                        <h3>Regardez les detail des produits pour mieux choisir</h3>
                        <p>Commencez par taper le nombre du produit</p>
                    </div> :
                    // map pour imprimer les resultats dans la page
                    products.map((product)=>
                        
                        <Link to={'/Product/'+ product.id} >
                            <div key="" className="cardProduit">
                                <img src={product.image_front_small_url} alt={product.generic_name}/>
                                <p>{product.generic_name_fr}</p>
                                <small><p>{product.brands}</p></small>
                                

                            </div>
                            
                        </Link> 
                    )   
                }

            </div>
            <Footer />

            
            
        </>
    );
    
}

export default Accueil; 