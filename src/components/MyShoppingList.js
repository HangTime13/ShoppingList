import React, { useState } from 'react'

// const groceries = [
//     {name : "milk", id:1}
// ]

const MyShoppingList = () => {

    const [groceries, setGroceries]=useState(["" ])

    const [newItem, setNewItem] =useState("");

    const addItem = () => {
        if(newItem !== ""){
            const newId = Date.now()
            const newGrocery ={
                name: newItem,
                id: newId
            }
            console.log("New ID generated: ", newId)
            setGroceries([...groceries, newGrocery]);
            setNewItem("")
        }

    }

 


  return (
    <div>
        <ul>
            {groceries.map(grocery => (
                <div>
                    {grocery.name}
                </div>
        
            ))
        }
        </ul>
        <input 
        value={newItem}
        placeholder='Add a new item'
        onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
    </div>
  )
}

export default MyShoppingList