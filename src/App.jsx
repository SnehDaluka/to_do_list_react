import React, { useEffect, useState } from "react";
import List from "./List";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [editId, setEditId] = useState(null);

  const inputItem = (event) => {
    setInputList(event.target.value);
  };

  const addItem = () => {
    const allInputItems = {
      id: new Date().getTime().toString(),
      name: inputList,
    };
    if (inputList && toggleBtn) {
      setItems(
        items.map((elem) => {
          if (elem.id === editId) {
            return { ...elem, name: inputList };
          }
          return elem;
        })
      );
      setToggleBtn(false);
      setEditId(null);
    } else if (inputList) setItems([...items, allInputItems]);
    setInputList("");
  };

  const deleteItems = (id) => {
    // console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((element) => {
        return element.id !== id;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  const editItem = (id) => {
    const newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    setToggleBtn(true);
    setInputList(newEditItem.name);
    setEditId(id);
  };

  return (
    <>
      <div className="box">
        <div className="container">
          <h1>To-Do List</h1>
          <div className="additems">
            <input
              type="text"
              placeholder="Add Item"
              onChange={inputItem}
              value={inputList}
            />
            <div>
              <IconButton
                aria-label="delete"
                size="large"
                sx={{ fontSize: 8, mr: 3, padding: 2 }}
                onClick={addItem}
              >
                {!toggleBtn ? (
                  <NoteAddIcon style={{ color: "white" }} />
                ) : (
                  <DoneIcon style={{ color: "white" }} />
                )}
              </IconButton>
            </div>
          </div>
          <div className="items">
            {/* <li>{inputList}</li> */}
            {items.map((item) => {
              return (
                <List
                  text={item.name}
                  key={item.id}
                  id={item.id}
                  onSelect={deleteItems}
                  edit={editItem}
                />
              );
            })}
          </div>
        </div>
        <div className="clear">
          <Button
            style={{ color: "#f6980c" }}
            onClick={() => {
              setItems([]);
            }}
          >
            Clear All
          </Button>
        </div>
      </div>
    </>
  );
};

export default App;
