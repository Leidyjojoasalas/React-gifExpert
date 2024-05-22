
import { GifItem } from "./GifItem";
import { useFechGifs } from "../hooks/useFechGifs";

 
 export const GifGrid = ( {category} ) => {

const { images, isLoading} = useFechGifs( category );


    

   return (
     <>
        <h3>{ category }</h3>

        {
            isLoading && ( <h2>Cargando...</h2> )
        }

        <div className="card-grid">
          {
            images.map( ( image )=> (
              <GifItem
              key={ image.id }
              { ...image} //es otra forma de recibir todas las propiedades es decir title, url, id en vez de hacerlo 
              // title={ image.title}
              // url={ image.url}}
              />
             
            ))
          }
        </div>
     </>
   )
 }
