import Slider from "./Components/Slider/Slider";
import DraggindAndDropTable from "./Components/Drag";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ModalEdit from "./Components/Modal/editar";
import ModalCadastro from "./Components/Modal/cadastrar";
import "./App.css";

import { fakeData } from "./fakeData";
import { useState } from "react";

const App = () => {
  const columns = [{ field: "name" }];
  const [characters, updateCharacters] = useState(fakeData);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalCad, setOpenModalCad] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const onDelete = (e) => {
    console.log(JSON.parse(e.target.farthestViewportElement?.id));
  };

  return (
    <>
      {openModalEdit && (
        <ModalEdit
          item={selectedItem}
          open={openModalEdit}
          close={setOpenModalEdit}
          data={characters}
          setData={updateCharacters}
        />
      )}

      {openModalCad && (
        <ModalCadastro
          open={openModalCad}
          close={setOpenModalCad}
          data={characters}
          setData={updateCharacters}
        />
      )}
      {/* <Slider /> */}
      <DraggindAndDropTable
        data={characters}
        columns={columns}
        title="Resultado Mapa mental"
        titleButton="Inserir"
        iconbutton={<AddCircleOutlineIcon />}
        ModalEdit={<ModalEdit />}
        ModalCadastro={<ModalCadastro />}
        onDelete={onDelete}
      />
    </>
  );
};

export default App;
