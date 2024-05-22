import { useEffect, useState } from "react";
import { getGifs } from "../components/helpers/getGifts";



export const useFechGifs = (category) => {

    const  [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

  const getImage = async() =>{
    const newImages = await getGifs( category );
    setImages(newImages);
    setIsLoading(false)
  }

    useEffect( ()=>{
      getImage();
    }, [])


  return {
    // se puede dejar de esta forma images,
    images: images,
    isLoading
  }
}
