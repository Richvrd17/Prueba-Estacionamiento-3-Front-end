import { useState } from 'react'

function Formulario({ onAgregarVehiculo, cuposDisponibles }) {
  const [patente, setPatente] = useState('')
  const [propietario, setPropietario] = useState('')
  const [permanente, setPermanente] = useState(false)
  const [error, setError] = useState('')

  const validarPatente = (pat) => {
    const regex = /^[A-Za-z]{4}[0-9]{2}$/
    return regex.test(pat)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Validar campos vacíos
    if (!patente.trim() || !propietario.trim()) {
      setError('Todos los campos son obligatorios')
      return
    }

    // Validar formato de patente
    if (!validarPatente(patente)) {
      setError('Patente inválida. Formato: 4 letras y 2 números (ej: ABCD12)')
      return
    }

    if (cuposDisponibles === 0) {
      setError('No hay cupos disponibles')
      return
    }

    const nuevoVehiculo = {
      patente: patente.toUpperCase(),
      propietario: propietario.trim(),
      permanente: permanente,
      horaIngreso: new Date().toLocaleTimeString(),
      fechaIngreso: new Date().toLocaleDateString()
    }

    onAgregarVehiculo(nuevoVehiculo)
    setPatente('')
    setPropietario('')
    setPermanente(false)
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Registrar nuevo vehículo</h2>
      
      {error && <div className="error-mensaje">{error}</div>}
      
      <div className="campo">
        <label>Patente (4 letras + 2 números):</label>
        <input
          type="text"
          value={patente}
          onChange={(e) => setPatente(e.target.value)}
          placeholder="Ej: ABCD12"
          maxLength={6}
        />
      </div>

      <div className="campo">
        <label>Propietario:</label>
        <input
          type="text"
          value={propietario}
          onChange={(e) => setPropietario(e.target.value)}
          placeholder="Nombre del propietario"
        />
      </div>

      <div className="campo checkbox">
        <label>
          <input
            type="checkbox"
            checked={permanente}
            onChange={(e) => setPermanente(e.target.checked)}
          />
          Es residente permanente
        </label>
      </div>

      <button type="submit" disabled={cuposDisponibles === 0}>
        {cuposDisponibles === 0 ? 'Sin cupos disponibles' : 'Registrar ingreso'}
      </button>
    </form>
  )
}

export default Formulario