import { useState } from "react";
import ProfileCard from "./ProfileCard";

function ListaUsuarios() {
  // Estado local con 20 usuarios "quemados" en código (datos estáticos)
  const [usuarios] = useState([
    { id: 1, nombre: "Santiago Gómez", rol: "Docente", area: "Desarrollo Web", descripcion: "Especialista en React, diseño web y metodologías de aprendizaje práctico.", tags: ["React", "UI/UX", "Proyectos"] },
    { id: 2, nombre: "Laura Martínez", rol: "Docente", area: "Backend", descripcion: "Enseña Node.js y bases de datos relacionales con enfoque práctico.", tags: ["Node.js", "SQL", "APIs"] },
    { id: 3, nombre: "Carlos Ramírez", rol: "Estudiante", area: "Frontend", descripcion: "Aprendiendo React y JavaScript moderno, apasionado por el diseño.", tags: ["React", "CSS", "Figma"] },
    { id: 4, nombre: "Valentina Torres", rol: "Estudiante", area: "Desarrollo Web", descripcion: "Enfocada en construir proyectos full stack con buenas prácticas.", tags: ["JavaScript", "Git", "Vite"] },
    { id: 5, nombre: "Andrés Ortiz", rol: "Docente", area: "Bases de Datos", descripcion: "Experto en modelado de datos y optimización de consultas SQL.", tags: ["SQL", "PostgreSQL", "Modelado"] },
    { id: 6, nombre: "Camila Rojas", rol: "Estudiante", area: "UX/UI", descripcion: "Interesada en accesibilidad web y experiencia de usuario.", tags: ["Figma", "Accesibilidad", "UX"] },
    { id: 7, nombre: "Juan Pablo Díaz", rol: "Estudiante", area: "Frontend", descripcion: "Construyendo su primer proyecto con componentes reutilizables.", tags: ["React", "JSX", "Vite"] },
    { id: 8, nombre: "Daniela Castro", rol: "Docente", area: "Seguridad Web", descripcion: "Enseña buenas prácticas de seguridad y OWASP Top 10.", tags: ["OWASP", "Seguridad", "Web"] },
    { id: 9, nombre: "Felipe Herrera", rol: "Estudiante", area: "Desarrollo Web", descripcion: "Explorando el ecosistema de React y manejo de estados.", tags: ["React", "Hooks", "State"] },
    { id: 10, nombre: "Mariana López", rol: "Estudiante", area: "Frontend", descripcion: "Aprendiendo a estructurar proyectos con buenas prácticas.", tags: ["Vite", "Componentes", "CSS"] },
    { id: 11, nombre: "Sebastián Vargas", rol: "Docente", area: "Performance Web", descripcion: "Se enfoca en optimización de rendimiento y carga de sitios web.", tags: ["Performance", "Web Vitals", "Optimización"] },
    { id: 12, nombre: "Isabella Moreno", rol: "Estudiante", area: "UX/UI", descripcion: "Diseñando interfaces centradas en el usuario para proyectos reales.", tags: ["Figma", "Diseño", "UX"] },
    { id: 13, nombre: "Nicolás Suárez", rol: "Estudiante", area: "Backend", descripcion: "Practicando la creación de APIs y conexión con bases de datos.", tags: ["Node.js", "APIs", "Backend"] },
    { id: 14, nombre: "Paula Jiménez", rol: "Docente", area: "SEO", descripcion: "Especialista en posicionamiento web y buenas prácticas de contenido.", tags: ["SEO", "Contenido", "Analytics"] },
    { id: 15, nombre: "Diego Fernández", rol: "Estudiante", area: "Frontend", descripcion: "Aprendiendo a dividir interfaces en componentes reutilizables.", tags: ["React", "Componentes", "Props"] },
    { id: 16, nombre: "Gabriela Peña", rol: "Estudiante", area: "Desarrollo Web", descripcion: "Practicando control de versiones y flujo de trabajo con Git.", tags: ["Git", "GitHub", "Versionamiento"] },
    { id: 17, nombre: "Alejandro Ríos", rol: "Docente", area: "Accesibilidad", descripcion: "Enseña a construir interfaces accesibles para todos los usuarios.", tags: ["Accesibilidad", "HTML", "ARIA"] },
    { id: 18, nombre: "Sofía Guzmán", rol: "Estudiante", area: "Frontend", descripcion: "Construyendo su primer proyecto con Vite y React.", tags: ["Vite", "React", "JSX"] },
    { id: 19, nombre: "Tomás Aguirre", rol: "Estudiante", area: "UX/UI", descripcion: "Explorando principios de diseño de interfaces modernas.", tags: ["UI", "Prototipado", "Figma"] },
    { id: 20, nombre: "Antonia Salazar", rol: "Docente", area: "Desarrollo Web", descripcion: "Guía proyectos integradores con enfoque en buenas prácticas de código.", tags: ["Buenas Prácticas", "Mentoría", "Proyectos"] },
  ]);

  return (
    <section className="lista-usuarios">
      <h2 className="lista-usuarios-titulo">Nuestro Equipo</h2>
      <div className="lista-usuarios-grid">
        {usuarios.map((usuario) => (
          <ProfileCard
            key={usuario.id}
            nombre={usuario.nombre}
            rol={usuario.rol}
            area={usuario.area}
            descripcion={usuario.descripcion}
            tags={usuario.tags}
          />
        ))}
      </div>
    </section>
  );
}

export default ListaUsuarios;