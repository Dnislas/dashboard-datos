function Navbar() {
  const estilos = {
    barra: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#1e293b',
      color: '#ffffff',
      fontFamily: 'system-ui, sans-serif',
    },
    titulo: { margin: 0, fontSize: '1.4rem' },
    alumno: { margin: 0, fontSize: '1rem', opacity: 0.85 },
  }

  return (
    <nav style={estilos.barra}>
      <h1 style={estilos.titulo}>Dashboard de Ciencia de Datos</h1>
      <p style={estilos.alumno}>Daniel Islas</p>
    </nav>
  )
}

export default Navbar
