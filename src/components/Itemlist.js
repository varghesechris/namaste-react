const Itemlist = (props) => {

    const {menuList }=props;
    console.log(menuList);

    return (
        <div >
            {menuList.map((item)=>{
                return (
                    <div className=" p-2 m-2 flex border-gray-200 border-b-2" key ={item.card.info.id}>
 
                    <div className=" w-9/12 ">
                    <spam>{item.card.info.name}</spam>
                    <spam> - ₹ {item.card.info.price/100}</spam>
                    <p className=" text-sm">{item.card.info.description}</p>
                    </div>
                    
                    <div className=" w-3/12  ">
                        <div>
                            <button className="  absolute text-white bg-black rounded-md">Add+</button>
                        </div>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + item.card.info.imageId} className=" w-full"></img>
                 </div>
        </div>
                )
            })}
        </div>




    )


}

export default Itemlist;