import { useState } from "react";
import {  AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);

    const onAddCategory = (NewCategory) => {
        if (categories.includes(NewCategory)) return;
        setcategories([NewCategory, ...categories] );
    }

    return (
        <>
            <h1> GifExpertApp </h1>
            
            <AddCategory 
            onNewCategory = {onAddCategory}
             />


                {
                    categories.map(category => (
                        <GifGrid 
                        key={category}
                        category={category} /> 
                          
                    ))
                  
                }
        </>
    )
}



