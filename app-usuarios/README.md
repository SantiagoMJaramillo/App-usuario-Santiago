# App Usuarios - React

Aplicación web construida con **React + Vite** que muestra un directorio
de usuarios (perfiles tipo tarjeta), maquetada mediante componentes
reutilizables y datos estáticos manejados con estado local.

## Requisito - Momento 1: Web II

Este proyecto fue desarrollado como entrega del Momento 1, evidenciando:

- Proyecto React inicializado con **Vite**, con estructura de carpetas
  separada (`components`, `assets`, `views`), siguiendo buenas prácticas.
- Interfaz dividida lógicamente en **componentes reutilizables**
  (`<Navbar />`, `<Footer />`, `<ProfileCard />`, `<ListaUsuarios />`),
  en vez de un solo archivo gigante.
- Componente `<ListaUsuarios />` con **20 usuarios quemados en código**,
  manejados mediante **estado local** (`useState`) y renderizados
  dinámicamente con `.map()`.
- Control de versiones con Git (ramas `main`, `dev`,
  `feature/navbar-footer`, `feature/lista-usuarios`).

## Componentes

- **Navbar**: barra de navegación superior con el nombre de la app y enlaces.
- **Footer**: pie de página con derechos reservados.
- **ProfileCard**: tarjeta individual de perfil (foto, nombre, rol,
  descripción, tags y botón de contacto).
- **ListaUsuarios**: contiene el arreglo de 20 usuarios de ejemplo y
  renderiza un `<ProfileCard />` por cada uno.

## Cómo instalar y ejecutar el proyecto (desde Visual Studio Code)

Requisitos: tener instalados Visual Studio Code, Node.js y Git.

1. **Clona el repositorio**: `Ctrl+Shift+P` → `Git: Clone` → pega la URL
   del repositorio → elige carpeta destino → abre el proyecto.

2. **Instala las dependencias**: abre la terminal integrada
   (`Ctrl+ñ`) y ejecuta:
```bash
   npm install
```
   Esto crea la carpeta `node_modules` (no se sube al repositorio,
   está excluida en el `.gitignore`).

3. **Corre el proyecto en modo desarrollo**:
```bash
   npm run dev
```
   Abre en el navegador la URL que aparece en la terminal
   (normalmente `http://localhost:5173`).

