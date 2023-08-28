import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Resturantcategory from './Resturantcategory';

const ResturantMenuCard = () => {

    const [restdata, setrestdata] = useState([]);
    const [restdataitem, setrestdataitem] = useState([]);

   // const [showindex, setshowindex] = useState(0);


    const { resId } = useParams();

    // console.log(resId.resId);



    async function fetchrestData() {

        const restaurantcardapiData = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7187247&lng=77.15624559999999&restaurantId=' + resId + '&catalog_qa=undefined&submitAction=ENTER');
        const restcardapiData = await restaurantcardapiData.json();


        const actualrestcardapiData = restcardapiData?.data?.cards[0]?.card?.card?.info;
        const actualrestcardapiDatafilter = restcardapiData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        // const actualrestcardapidataDish = restcardapiData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards[0]?.card?.info.name;
        const { cards } = restcardapiData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

        setrestdata(actualrestcardapiData);
        setrestdataitem(cards);






    }



    useEffect(() => {
        fetchrestData()


    }, []);

    const filterrecomded = restdataitem.filter(i => i.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(filterrecomded)
    return (

        <div className="Menu content-center ">

            <h4 className="font-bold text-lg bg-slate-400 "> {restdata.name} -- Cuisines: {restdata.cuisines} -- {restdata.avgRatingString}</h4>

            <h3>Menu</h3>

            {

                filterrecomded?.map((item) => {
                    return (

                        <div className="category  "  >
                            <Resturantcategory
                                resData={item}

                                //restcatindex={index}
                             //   categoryindex={index}
                                //state={true}
                           // stateindex = {()=>setshowindex(index) ==e}

                            />
                        </div>

                    )

                })


            }





        </div>

    )
}

export default ResturantMenuCard;