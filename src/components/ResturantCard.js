
const ResturantCard = (props) => {
console.log(props)

    const { resData } = props;
    const { info } = resData;

    


    return (
        <div className="restrauntcard m-4 p-4 w-[200px] border-solid  rounded-lg bg-green-100 hover:bg-green-500">
            <div className="restrauntcardimage ">
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + info.cloudinaryImageId}></img>
            </div>


            <h4 className=" font-bold text-lg">{info.name}</h4>
            <h4> {info.id} </h4>
            <h4> {info.avgRating} </h4>
            <h4> {info.costForTwo} </h4>
            <h4> {info.sla.slaString} </h4>


        </div>
    )
}

export default ResturantCard;