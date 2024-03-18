const AccordionDropDown = ({data}) => {
    console.log(data)
    return (
        data.itemCards.map((card) => (
          <div key={card.card.info.id} className="my-4">
            <div className="flex justify-between w-[580px] h-24 bg-slate-100 rounded-lg mb-4">
              <div className="flex flex-col w-[450px] m-2">
                    <span className="pl-4 text-[12px] font-bold">{card?.card?.info?.name}</span>
                    <span className="pl-4 text-[12px] font-semibold">Price -{card?.card?.info?.price/100} Rs</span>
                    <span className="px-4 text-[12px] font-thin leading-[14px]">Description - {card?.card?.info?.description}</span>
              </div>
              <div className="w-24 h-20">
                <img className="w-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+card?.card?.info?.imageId}/>
                <button onClick={()=> {
                    console.log("Add button Clicked")
                }} className="relative left-7 bottom-1 bg-orange-400 px-2 rounded-sm">Add</button>
              </div>
            </div>
          </div>
        ))
    )

}

export default AccordionDropDown;