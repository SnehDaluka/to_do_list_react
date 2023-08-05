import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import Edit from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";

const List = (props) => {
  const [line, setLine] = useState(false);
  const doneItem = () => {
    setLine(!line);
  };

  return (
    <>
      <div className="list">
        <div className="list_detail">
          <div>
            <IconButton
              className="button1"
              aria-label="delete"
              size="small"
              onClick={doneItem}
              sx={{
                ":hover": {
                  bgcolor: "#f6980c",
                },
              }}
            >
              <DoneIcon fontSize="inherit" style={{ color: "white" }} />
            </IconButton>
          </div>
          <p style={{ textDecoration: line ? "line-through" : "none" }}>
            {props.text}
          </p>
        </div>
        <div>
          <Stack spacing={1} direction="row">
            <IconButton
              className="button1"
              aria-label="delete"
              size="small"
              onClick={() => {
                props.onSelect(props.id);
              }}
              sx={{
                ":hover": {
                  bgcolor: "#f6980c",
                },
              }}
            >
              <DeleteIcon fontSize="inherit" sx={{ color: "white" }} />
            </IconButton>

            <IconButton
              className="button1"
              aria-label="edit"
              size="small"
              onClick={() => {
                props.edit(props.id);
              }}
              sx={{
                ":hover": {
                  bgcolor: "#f6980c",
                },
              }}
            >
              <Edit fontSize="inherit" sx={{ color: "white" }} />
            </IconButton>
          </Stack>
        </div>
      </div>
    </>
  );
};
export default List;
