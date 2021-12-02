import React, { useState } from "react";
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

interface IValue {
  id: number;
  name: string;
  position: string;
}

export default function ModalEdit({ item, open, close, data, setData }) {
  const handleClose = () => close(false);
  const [newValue, setNewValue] = useState({
    id: item?.id,
    name: item?.name,
    position: item?.position,
  });
  const [error, setError] = useState("");

  const handleChange = ({ target }) => {
    setNewValue({ ...newValue, name: target.value });
  };

  const handleSave = () => {
    let flagEror = 0;
    if (!newValue) {
      flagEror++;
      setError("Digite uma pergunta");
    }
    if (flagEror === 0) {
      let list = [...data];
      let index = list.indexOf(item);
      list.splice(index, 1, newValue);
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
              Edição
            </Typography>
            <TextField
              style={{
                width: 600,
                marginTop: 10,
                fontSize: 13,
              }}
              size="small"
              value={newValue?.name}
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
