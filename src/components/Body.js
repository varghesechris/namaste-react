import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
//import resObj from "../utils/mock";
import ResturantCard from "./ResturantCard";
import Shimmer from "../shimmer";
//import ResturantMenuCard from "./ResturantMenuCard";







const Body = () => {
    const [oldfilterRes, setoldfilterRes] = useState([])
    const [newfilterRes, setnewfilterRes] = useState([])
    const [search, setSearch] = useState([])
    

    async function fetchData() {


        const apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6885379633785&lng=77.17138353735209&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const respData = await apiData.json()
        const actualData = respData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setoldfilterRes(actualData);
        setnewfilterRes(actualData);
        console.log(respData, 'kkk');

       

    }





    useEffect(() => {
        fetchData()


    }, [])

    const updateSearch = event => {
        setSearch(event.target.value)
       

        console.log("search is :", event.target.value)

    }

    const handleSearch = event => {

        console.log("button click search:", search)



        // if (search === "") {

        //     return setfilterRes(confilterRes)
        // }



        const filterBySearch = oldfilterRes.filter((item) => {
            return item.info.name.toLowerCase()
                .includes(search.toLowerCase())
        })


        setnewfilterRes(filterBySearch);

    }



    //console.log("first loaded");
    // if (filterRes == 0) {
    //     alert('hi');
    //     <div><Shimmer/></div>
    // }
    return (


        <div className="container  " >

            <div className=" flex items-center">
                <div className="filter ">
                    <button className="filter-btn px-4 py-2  rounded-lg bg-yellow-100"
                        onClick={() => {
                            const filterList = oldfilterRes.filter((res) => res.info.avgRating > 4.1)
                            setoldfilterRes(filterList)
                        }

                        }

                    > Top rated resturants </button>

                </div>


                <div className="serach ">

                    <input className="border border-solid border-black" type="text" id="message" label="search" value={search} onChange={updateSearch}></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-green-500" type="submit" onClick={handleSearch} >Search</button>
                </div>
            </div>
            <div className="menu-card flex flex-wrap">


                {



                    newfilterRes?.map((rest) => {
                        //alert(filterRes);

                        return (
                            <Link to = {`/resturant/`+rest.info.id} >
                            <div className="card" key={rest.info.id}>
                                <ResturantCard resData={rest} />
                            </div>
                           </Link>
                        )
                    })
                }



            </div>

        </div>

    )


}

export default Body;