import { apiClient } from "../api/request";
import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import dayjs from "dayjs";
import "./Hero.css";
import { FormAdd } from "./FormAdd";

interface ApiResponse {
  data: {
    data: any[];
    totalElements: number;
  };
}

export function Hero() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);

  const columns: any = [
    { field: "name", headerName: "Nombre de categoria", width: 90 },
    {
      field: "icon",
      renderCell: (params: any) => (
        <img src={params.value} alt="Icon" width={20} height={20} />
      ),
      headerName: "Icono de la categoria",
      width: 150,
    },
    {
      field: "status",
      renderCell: (params: any) => (
        <span
          style={{
            backgroundColor: params.value ? "#D2E5D0" : "#FFD2D2",
            color: params.value ? "#0B8A00" : "#C0392B",
            borderColor: params.value ? "#0B8A00" : "#C0392B",
            margin: "15px",
            border: "1px solid",
            borderRadius: "4px",
            fontWeight: "bold",
            display: "flex",
            width: "80px",
            height: "20px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          {params.value ? "Activo" : "Inactivo"}
        </span>
      ),
      headerName: "Estado",
      width: 150,
    },
    {
      field: "description",
      headerName: "Descripcion",
      type: "number",
      width: 110,
    },
    {
      field: "createdAt",
      renderCell: (params: any) => (
        <span>{dayjs(params.value).format("MMM DD, YYYY")}</span>
      ),
      headerName: "Fecha de creacion",
      sortable: false,
      width: 160,
    },
    {
      field: "actions",
      headerName: "Acciones",
      sortable: false,
      width: 160,
      renderCell: (params: any) => (
        <>
          <a href="">
            <img src="src/assets/edit.svg" alt="edit" />
          </a>
          <a href="">
            <img src="src/assets/delete.svg" alt="delete" />
          </a>
          <a href="">
            <img src="src/assets/join.svg" alt="join" />
          </a>
        </>
      ),
    },
  ];

  useEffect(() => {
    setLoading(true);
    // Hacer la petición cuando el componente se monta o cuando cambia la paginación
    apiClient
      .get(`/actions/admin-list?pageNumber=${page + 1}&pageSize=${pageSize}`)
      .then((response) => {
        setData(response.data);
        setTotalCount(response.data.data.totalElements);
        setLoading(false);
        console.log("Data:", response.data);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        console.error("Error:", err);
      });
  }, [page, pageSize]); // ← Dependencias agregadas

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="table" data-cy="loadingTable">
      <div className="title-header">
        <h1>Categorias</h1>
      </div>
      <div className="button-header">
        <FormAdd data-cy="formAdd" />
      </div>
      <Paper sx={{ height: 350, width: "80%" }} className="paper">
        <DataGrid
          paginationMode="server"
          paginationModel={{ pageSize: pageSize, page: page }}
          onPaginationModelChange={(model) => {
            setPage(model.page);
            setPageSize(model.pageSize);
          }}
          rowCount={totalCount}
          rows={data?.data?.data || []}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 10, page: 0 } },
          }}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection={false}
          sx={{ border: 0 }}
          localeText={{
            paginationRowsPerPage: "Resultados por página:",
            paginationDisplayedRows(params) {
              return `${params.from}-${params.to} de ${params.count}`;
            },
          }}
        />
      </Paper>
    </div>
  );
}
