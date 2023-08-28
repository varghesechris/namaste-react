import { useState } from 'react';
import Itemlist from './Itemlist';


const Resturantcategory = (props) => {
    const { resData } = props;
    const title = resData.card.card.title;
    const menu = resData.card.card.itemCards;
//console.log(restcatindex, "rick");
  //  const stateindex = stateindex;
   

    const [showitems, setshowitems] = useState(0);

     handleClick= () =>{
        //console.log(restcatindex);
        setshowitems(setshowitems);
     }


    return (
        <div className=" w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4  ">
            
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className=' font-bold'>{title} ({menu.length})</span> 
        <span>Down</span>
        </div >
           

        { true &&  <Itemlist menuList={menu} />}


        </div>
        


    )

}

export default Resturantcategory;