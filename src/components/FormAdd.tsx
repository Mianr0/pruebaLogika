import "./FormAdd.css";
import { useState } from "react";
import { apiClient } from "../api/request";

export function FormAdd() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [color, setColor] = useState("#000000");
  const [status, setStatus] = useState<number>(0);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("icon", file as File);
    formData.append("color", color);
    formData.append("status", status);

    apiClient
      .post(
        "https://dev.api.bekindnetwork.com/api/v1/actions/admin-add",
        formData
      )
      .then((response) => {
        console.log(response.data);
        setOpen(false);
        document.getElementById("form")?.reset();
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  };

  return (
    <div id="myModal" className="formAdd">
      <button
        id="myBtn"
        onClick={() => setOpen(true)}
        data-cy="buttonOpenModal"
      >
        Crear tipo de categoria
      </button>
      <div
        id="myModal"
        className="modal"
        style={{ display: open ? "block" : "none" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setOpen(false);
          }
        }}
      >
        <div className="modal-content" data-cy="modalContent">
          <form onSubmit={handleSubmit} className="close" id="form">
            <h2>Crear categoria</h2>
            <label htmlFor="">Nombre de la categoria*</label>
            <input
              type="text"
              data-cy="nameAdd"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Descripcion de la buena accion*</label>
            <input
              type="text-area"
              data-cy="descriptionAdd"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="">Logo*</label>
            <input
              type="file"
              data-cy="fileAdd"
              onChange={(e) => setFile(e.target.files?.[0])}
            />
            <label htmlFor="">Color*</label>
            <input
              type="color"
              data-cy="colorAdd"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <label className="switch">
              <input
                type="checkbox"
                data-cy="statusAdd"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.checked ? 1 : 0);
                }}
              />
              <span className="slider round"></span>
            </label>
            {isError && (
              <label style={{ color: "red" }}>Error en la solicitud</label>
            )}
            <button type="submit" data-cy="saveButton">
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
