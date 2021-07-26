import React,{useState} from "react";
import "../ListItem/Listitem.css";
const Listitem = (props) => {
  // const [newitems, setNewitems] = useState(props.items)
  // const handelChange = (e,k) => {
  //   console.log(e,k);

  // }
  const newitems = props.items;
  console.log(newitems);
  const listItems = newitems.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input type="text" 
          id={item.key} 
          value={item.text} 
          // onChange={(e) => handelChange(e.target.value , item.key)}
          onChange={
            (e) => {
            // console.log(e.target.value);
             props.setEdit(e.target.value , item.key);
          }}
          />

          <span>
            <button
              type="submit"
              className="delbtn"
              onClick={() => props.deleteItem(item.key)}
            >
              Delete
            </button>
          </span>
        </p>
      </div>
    );
  });
  return <div>{listItems}</div>;
};

export default Listitem;
