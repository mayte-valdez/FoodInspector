import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoFI from '../images/logoFoodInspector.svg';
import axios from 'axios';
import './stylePages.css';
import Footer from '../components/Footer';
import Loader from '../images/loader.svg'

function Product(props){
    
    const [product, setProduct] = useState([]);
    const productId = props.match.params.slug;

    useEffect(() => {
        axios.get('https://world.openfoodfacts.org/api/v0/product/'+productId+'.json')
        .then(response => response.data)
        .then(data => {
            setProduct(data.product)
            }
        )
    },[]);
   
    const productName = product.generic_name_fr;
    const imgSrc = product.image_front_url;
    const ingredients = product.ingredients;
    const nutriScoreGrade = 'https://static.openfoodfacts.org/images/misc/nutriscore-'+product.nutriscore_grade+'.png';
    

    return (
        <>
            <div className='headerProduit'>
                <Link to='/' >
                    <img src={logoFI}/>
                </Link>   
            </div>
            <div className='detailProduit'>
                <img src={imgSrc} alt={productName} />
                <div>
                  <h2>{productName}</h2>
                <img src={nutriScoreGrade} alt={`Nutriscore : ${nutriScoreGrade}`} />  
                </div>
            </div>

            <table>
                 <tr>
                    <th className='thLeft'>Ingredients</th>
                    <th className='thRigth'>Pourcentage</th>
                </tr> 
                {   product.length == 0 ? 
                    <p>Chargement en cours ...</p>:
                    ingredients.map((ingredient, i)=> 
                    <tr key={i}>
                        <td>{ingredient.text.replaceAll('_',' ')}</td>
                        <td>{Math.round(ingredient.percent_estimate)}%</td>
                    </tr> 

                    )
                }
            
            </table>
            <Footer/>
    
        </>
    )
    
}

export default Product;