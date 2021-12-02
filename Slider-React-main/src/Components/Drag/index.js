import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

import "./styles.css";

function DraggingAndDropTable({
  title,
  data,
  titleButton,
  iconbutton,
  className,
  emptyMessage,
  columns,
  ModalEdit,
  ModalCadastro,
  onDelete,
  onEdit,
}) {
  const [characters, updateCharacters] = useState(data);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalCad, setOpenModalCad] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    // const items = [...characters];
    // const [reorderedItem] = items.splice(result.source.index, 1);
    // items.splice(result.destination.index, 0, reorderedItem);

    // for (let i = 0; i < items.length; i++) {
    //   items[i].position = i + 1;
    // }
    // updateCharacters(items);

    const items = [...data];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    for (let i = 0; i < items.length; i++) {
      items[i].position = i + 1;
    }
    data = items;
  }

  const handleDelete = (index) => {
    // let list = [...characters];
    // list.splice(index, 1);
    // for (let i = 0; i < list.length; i++) {
    //   list[i].position = i + 1;
    // }
    // updateCharacters(list);

    let list = [...data];
    list.splice(index, 1);
    for (let i = 0; i < list.length; i++) {
      list[i].position = i + 1;
    }
    data = list;
    //updateCharacters(list);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setOpenModalEdit(true);
  };

  const renderTabe = (item, index) => {
    return (
      <Draggable key={item.id} draggableId={String(item.id)} index={index}>
        {(provided) => (
          <li
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            {columns.map(({ field, title }) => {
              return (
                <p>
                  {title ? `${title}: ` : ""} {item[field]}
                </p>
              );
            })}

            <div className="actions">
              <EditIcon
                htmlColor="#1976D2"
                fontSize="small"
                onClick={() => handleEdit(item)}
              />
              <DeleteIcon
                id={JSON.stringify(item)}
                htmlColor="#DC004E"
                fontSize="small"
                onClick={onDelete}
              />
            </div>
          </li>
        )}
      </Draggable>
    );
  };

  const emptyList = () => {
    return (
      <p>{emptyMessage ? emptyMessage : "Nenhum mapa mental cadastrado"}</p>
    );
  };

  return (
    <>
      <div className={`container ${className}`}>
        <div className="head-card">
          <p className="title">{title}</p>
          <Button
            size="small"
            variant="contained"
            title="eita"
            disableElevation
            onClick={() => setOpenModalCad(true)}
            style={{ textTransform: "capitalize", width: 100 }}
            startIcon={iconbutton}>
            {titleButton}
          </Button>
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}>
                {characters.length > 0
                  ? characters.map((item, index) => {
                      return renderTabe(item, index);
                    })
                  : emptyList()}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
}

export default DraggingAndDropTable;
