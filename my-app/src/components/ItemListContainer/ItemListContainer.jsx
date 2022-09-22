import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
/*import Counter from '../ItemCount/ItemCount'*/
import ItemList from '../ItemList/ItemList'
/*import arrayProductos from '../Data/Data';*/
import db from '../../services/firebase';
import { getDocs, collection, query, where } from "firebase/firestore";
/*import { async } from '@firebase/util';*/



/*function consultarPromesa(confirmacion) {
    return new Promise ((res,rej) => {
        if (categoria) {
            res(arrayProductos.filter(item => item.category === category))
        } else if(confirmacion){
            res(arrayProductos)
        }
        else {
            rej("Accesso denegado")
        }
    }) 
}*/


const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([]);

    const {id} = useParams()

    
    const getData = async(idCategory) =>{
        
        try {
            
        const document = idCategory ? query(collection(db, "Items"), where("category", "==", idCategory))
                            : collection(db, "Items")
        const col = await getDocs(document)
        console.log("col.docs", col.docs)
        const result = col.docs.map((doc) => doc = {id:doc.id,...doc.data()})
        setProductos(result)
            
        
    } catch (error) {
        console.log(error)
            
        }
    }

    useEffect(() => {
        getData(id)

    }, [id]);




    

    /*const getProducts = () => new Promise ((resolve, reject) => {
        if (id) {
            resolve(arrayProductos.filter(item => item.category === id))
        } else {
            resolve(arrayProductos)
        }
    }) */
   


    
   /* useEffect(() => {
        getProducts()
    .then(productos=> 

        setProductos(productos)
    )
    .catch(error => 
        console.error(error)        
    )
    }, [id]);*/
    
    
    
    
   
    /*function onAdd (count){
        alert(`Te estas llevando ${count} Manchas`)

    }*/


    return (
        <div>
            <h1 className='d-flex justify-content-center'>{greeting}</h1>
            <div className="container">
                <ItemList list= {productos}/>
            </div>
        </div>
        
    )
}

export default ItemListContainer