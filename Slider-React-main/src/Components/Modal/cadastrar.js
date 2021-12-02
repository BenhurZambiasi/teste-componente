import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
const style = {
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: 1,
};

export default function ModalCadastro({ open, close, data, setData }) {
  const handleClose = () => close(false);
  const [newValue, setNewValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = ({ target }) => {
    setNewValue(target.value);
  };

  const handleSave = () => {
    let flagEror = 0;
    if (!newValue) {
      flagEror++;
      setError("Digite uma pergunta");
    }
    if (flagEror === 0) {
      let list = [...data];

      let pos = list[list.length - 1] ? list[list.length - 1].position + 1 : 1;

      let body = {
        id: uuidv4(),
        name: newValue,
        position: pos,
      };
      list.push(body);
      setData(list);
      handleClose();
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Cadastro
            </Typography>
            <TextField
              style={{
                width: 600,
                marginTop: 10,
                fontSize: 13,
              }}
              size="small"
              value={newValue}
              multiline
              label="Pergunta"
              onChange={handleChange}
              onFocus={() => setError("")}
              error={error ? true : false}
              helperText={error}
            />
            <div className="actions-modal">
              <Button
                variant="contained"
                disableElevation
                color="success"
                onClick={handleSave}>
                Salvar
              </Button>
              <Button
                onClick={handleClose}
                variant="contained"
                disableElevation
                color="error">
                Cancelar
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
