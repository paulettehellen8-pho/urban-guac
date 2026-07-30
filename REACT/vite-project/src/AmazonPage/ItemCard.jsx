function ItemCard() {
   const description =
      "Its ergonomic design and grippy rubber material ensure a good grip on the handle. The adjuster allows you to adapt the length of the rope to the user.";
   const amount = "KES 2,000";

   //react : primitive datatypes <string,boolean,numbers>
   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            border: "2px solid rgba(0,0,0,0.2)",
            padding: "2px 4px 2px 4px",
            margin: "10px",
         }}
      >
         <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
         >
            <img
               width={"100px"}
               src="https://m.media-amazon.com/images/I/71wm42EtoNL._AC_UL320_.jpg"
            />
         </div>
         <div style={{ textAlign: "left", fontSize: "10px" }}>
            {description}
         </div>
         <div style={{ fontSize: "20px" }}>{amount}</div>
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
