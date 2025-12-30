import "./FormAdd.css";
import { useState } from "react";
import { apiClient } from "../api/request";

export function FormAdd() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [color, setColor] = useState("");
  const [status, setStatus] = useState<number>(0);

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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div id="myModal" className="formAdd">
      <button id="myBtn" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <div
        id="myModal"
        className="modal"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="modal-content">
          <form onSubmit={handleSubmit} className="close">
            <h2>Crear categoria</h2>
            <label htmlFor="">Nombre de la categoria*</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Descripcion de la buena accion*</label>
            <input
              type="text-area"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="">Logo*</label>
            <input type="file" onChange={(e) => setFile(e.target.files?.[0])} />
            <label htmlFor="">Color*</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <label className="switch">
              <input
                type="checkbox"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.checked ? 1 : 0);
                  console.log(status);
                }}
              />
              <span className="slider round"></span>
            </label>
            <button type="submit">Crear</button>
          </form>
        </div>
      </div>
    </div>
  );
}
