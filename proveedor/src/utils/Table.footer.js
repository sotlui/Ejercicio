import { useEffect } from "react";

const TableFooter = ({range, setPage, page, slice}) =>{
  useEffect(()=>{
    if(slice.length < 1 && page !== 1){
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return(
    <div className='tableFooter'>
      {range.map((element, index)=>(
        <button 
        key={index}
        className='btnpaginacion'
        onClick={()=>setPage(element)}
        >
          {element}
        </button>
      ))}
    </div>
  )
}

export default TableFooter