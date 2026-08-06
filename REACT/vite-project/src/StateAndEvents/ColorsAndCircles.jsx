import { useState } from "react";

function ColorsCircles() {
   const [colors, setColors] = useState([]);

   // const [radius, setRadius] = useState("");

   console.log("ColorsCircle render", new Date());

   return (
      <div>
         <ColorForm colors={colors} setColors={setColors} />
         <ColorList colors={colors} setColors={setColors} />
      </div>
   );
}

function ColorForm(props) {
   const { colors, setColors } = props;
   const [color, setColor] = useState("");

   console.log("ColorForm render", new Date());

   const onSubmit = () => {
      const clonedColors = structuredClone(colors);
      clonedColors.push(color);
      setColors(clonedColors);
      // setColor("");
   };

   return (
      <div>
         <label>Enter color</label>
         <input value={color} onChange={(e) => setColor(e.target.value)} />
         <button onClick={onSubmit}>Save</button>
      </div>
   );
}

function ColorList(props) {
   const { colors, setColors } = props;

   const onRemove = (index) => {
      console.log("Remove color", colors[index], "Index", index);

      //filter -> inbuilt array method
      //@param1 -> cb function(item,index)=> truthy:[all items]
      //@param1 = (item,index)=> falsey:[no items]

      // const newArray = [];
      // for (let i = 0; i < colors.length; i++) {
      //    if (i === index) {
      //       continue;
      //    } else{
      //       newArray.push(colors[i]);
      //    }
      // }

      setColors(colors.filter((c, i) => i !== index));

      // const filteredArray = colors.filter((c, i)=>{
      //    if(i===index){
      //       return false;
      //    }
      //    return true;
      // })
      // setColors(filteredArray);
   };

   console.log("ColorList render", new Date());

   return (
      <div style={{ marginTop: "30px" }}>
         {colors.map((color, index) => (
            <div
               key={index}
               style={{
                  display: "flex",
                  justifyContent: "space-between", // pushes children to opposite ends
                  alignItems: "center",
                  margin: "10px",
                  width: "100%",
                  height: "30px",
                  backgroundColor: color,
                  color: "white",
                  padding: "10px",
               }}
            >
               {color}
               <button onClick={() => onRemove(index)}>Remove</button>
            </div>
         ))}
      </div>
   );
}
export default ColorsCircles;
