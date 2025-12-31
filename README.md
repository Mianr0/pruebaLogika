# Prueba Logika - React Application

Este proyecto es una aplicación web construida con React, TypeScript y Vite, diseñada para gestionar acciones y categorías.

## 🚀 Instrucciones para correr el proyecto localmente

Sigue estos pasos para levantar el entorno de desarrollo en tu máquina local.

### Prerrequisitos

- Node.js (v18 o superior recomendado)
- npm, pnpm o yarn

### 1. Clonar e Instalar Dependencias

Abre una terminal en la carpeta del proyecto y ejecuta uno de los siguientes comandos para instalar las librerías necesarias:

```bash
# Usando pnpm (Recomendado porque es lo que se ha usado en el desarrollo)
pnpm install

# O usando npm
npm install
```

### 2. Ejecutar el Servidor de Desarrollo

Una vez instaladas las dependencias, inicia el servidor local:

```bash
# Usando pnpm
pnpm run dev

# O usando npm
npm run dev
```

- **Construir para producción**: `npm run build` o `pnpm build`

Esto levantará la aplicación, generalmente en `http://localhost:5173`. Abre esa URL en tu navegador.

### 3. Comandos para test

- **Correr pruebas E2E (Cypress)**: `npx cypress open` o `pnpx cypress open`

Actualmente, el proyecto cuenta con las siguientes pruebas automatizadas bajo `cypress/e2e`:

- `specLoginError.cy.ts`: Test negativo de autenticación para validar manejo de errores.
- `specLoginCorrect.cy.ts`: Test positivo de autenticación con credenciales válidas.
- `specLoadingTable.cy.ts`: Comprueba que la tabla de datos muestra el estado de carga correctamente.
- `specFormAction.cy.ts`: Verifica la funcionalidad y validación de los campos del formulario.
- `specCreateAction.cy.ts`: Valida el flujo completo de creación de una nueva acción.

---

## 🛠️ Decisiones Técnicas y Librerías Usadas

Para el desarrollo de esta prueba técnica, se tomaron las siguientes decisiones basadas en rendimiento, mantenibilidad y rapidez de desarrollo:

### Librerías Principales

- **[React](https://react.dev/) + [Vite](https://vitejs.dev/)**: Se eligió Vite por su velocidad en el Hot Module Replacement (HMR) y su configuración mínima para TypeScript, lo que acelera significativamente el flujo de desarrollo comparado con CRA.
- **[Material UI (MUI)](https://mui.com/)**: Utilizado para componentes de UI pre-construidos y accesibles (Botones, Grids, Layouts), permitiendo un diseño consistente y profesional con un esfuerzo razonable.
- **[@mui/x-data-grid](https://mui.com/x/react-data-grid/)**: Se implementó para el manejo de tablas complejas, ya que ofrece funcionalidades avanzadas de paginación y ordenamiento "out of the box".
- **[Zustand](https://github.com/pmndrs/zustand)**: Elegido para el manejo del estado global (como la autenticación y tokens). Es mucho más ligero y menos "boilerplate" que Redux, ideal para el alcance de este proyecto.
- **[React Router DOM](https://reactrouter.com/)**: Para el manejo de rutas y navegación en la SPA (Single Page Application).
- **[Axios](https://axios-http.com/)**: Cliente HTTP basado en promesas para realizar peticiones a la API. Facilita la configuración de interceptores y manejo de errores.
- **[Cypress](https://www.cypress.io/)**: Para pruebas End-to-End (E2E), asegurando que los flujos críticos (Login, Creación de categorías) funcionen como se espera desde la perspectiva del usuario.

### Supuestos Tomados

1. **Entorno de Node**: Se asume que el usuario tiene acceso a un entorno compatible con Node.js y gestión de paquetes.
2. **API Externa**: La aplicación depende de una API externa (`https://dev.api.bekindnetwork.com` / `https://dev.apinetbo.bekindnetwork.com`). Se asume que estos endpoints son estables y accesibles públicamente o con las credenciales provistas.
3. **Autenticación**: El flujo de autenticación devuelve un token que debe persistirse para sesiones subsecuentes. Se usa `localStorage` (a través de la persistencia de Zustand) para mantener al usuario logueado.
4. **Diseño Híbrido**: Aunque se usa Material UI, se complementó con CSS vainilla (`.css`) para personalizaciones específicas y ajustes de layout rápidos sin sobrecargar el tema de MUI.
