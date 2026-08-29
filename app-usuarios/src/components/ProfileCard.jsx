function ProfileCard({ nombre, rol, area, descripcion, tags }) {
  return (
    <div className="profile-card">
      <span className="profile-card-badge">{rol}</span>
      <div className="profile-card-photo" />
      <p className="profile-card-area">{area}</p>
      <h2 className="profile-card-nombre">{nombre}</h2>
      <p className="profile-card-descripcion">{descripcion}</p>
      <div className="profile-card-tags">
        {tags.map((tag, index) => (
          <span key={index} className="profile-card-tag">{tag}</span>
        ))}
      </div>
      <button className="profile-card-boton">Contactar</button>
    </div>
  );
}

export default ProfileCard;