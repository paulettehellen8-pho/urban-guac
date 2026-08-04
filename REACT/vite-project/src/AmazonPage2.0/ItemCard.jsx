function ItemCard(props) {
   const { description, amount, img } = props;

   //props-> img,

   //react : primitive datatypes <string,boolean,numbers>
   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            border: "2px solid rgba(0,0,0,0.2)",
            padding: "2px 4px 2px 4px",
            margin: "10px",
         }}
      >
         <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
         >
            <img src={img} width={"200px"} alt={description} />
         </div>

         <div style={{ textAlign: "left", fontSize: "15px" }}>
            {description}
         </div>

         <div style={{ fontSize: "25px" }}>
            <b>{amount}</b>
         </div>
         <div style={{ display: "flex", justifyContent: "center" }}>
            <button
               style={{
                  border: "2px solid rgba(0,0,0,0.1)",
                  padding: "2px 4px 2px 4px",
                  color: "white",
                  backgroundColor: "orange",
               }}
            >
               Add to cart
            </button>
         </div>
      </div>
   );
}

export default ItemCard;
