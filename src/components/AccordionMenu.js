import { useState } from "react";
import AccordionDropDown from "./AccordionDropDown";

const AccordionMenu = ({data}) => {
    const [accordion, setAccordion] = useState(false);

    const handleAccordionClick = () => {
        accordion ? setAccordion(false) : setAccordion(true)
    }

  return (
    <div className="flex items-center flex-col">
      <div onClick={(e)=> {
       handleAccordionClick()
      }} className="flex justify-between items-center mt-2 w-[600px] h-20 bg-gray-100 rounded-lg shadow-md">
        <h2
        className="text-center pl-4 font-bold"
        >
          {data.title} ({data.itemCards.length})
        </h2>
         {accordion ? <span className="pr-4">⬆️</span> : <span className="pr-4">⬇️</span>} 
      </div>
      <div>
        {accordion &&  <AccordionDropDown data = {data}/>}
      </div>
    </div>
  );
};

export default AccordionMenu;
