import React ,{useState} from 'react'
import ListItem from "../ListItem/Listitem"
import "../TodoForm/TodoForm.css"

const TodoForm = () => {
    const [items, setItems] = useState([])
    const [curritem, setCurritem] = useState({
        key:"",
        text:""
    })
    const handleitem = (e) =>{
        e.preventDefault();
        setCurritem({
            key: Date.now(),
            text: e.target.value,
            
        })
    }
    const Additem = (e) => {
        e.preventDefault();
        console.log(curritem);
        if(curritem.text!== ""){
            setItems((prev)=> ([...prev,curritem]))
            setCurritem({
                        text:"",
                        key:""
                    })
        }
    }
    console.log(items);

    const deleteItem = (key) =>{
        const filteritems = items.filter(item =>item.key!==key)
             setItems(filteritems);
             console.log(filteritems);
    }
    const setEdit = (text,key) =>{
        console.log(text,key);
        
        let x = items.map(item => {
            if(item.key === key){
                item.text = text;  
            }  
            return item;  
        });
        setItems(x)
        console.log(items); 
    } 
    
    return (
        <div className="form_container" onSubmit={Additem}>
            <header>
                <form className="todoform">
                    <input type="text" placeholder="Enter Item" value={curritem.text} onChange={handleitem}/>
                    <button type="submit">ADD</button>

                </form>
            </header>
            <ListItem items={items}
            deleteItem={deleteItem}
            setEdit={setEdit}
            />
        </div>
    )
}

export default TodoForm
