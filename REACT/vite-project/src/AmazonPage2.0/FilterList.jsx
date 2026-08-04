function FilterList(props) {
   const { title, options } = props;
   return (
      <div>
         <b>{title}</b>
         <div>
            {options.map((option, index)=>{
               return (
                  <div key={index}>
                     <input type="checkbox" />
                     <span>{option}</span>
                  </div>
               );
            })}
            
         </div>
       
      </div>
   );
}

export default FilterList;
