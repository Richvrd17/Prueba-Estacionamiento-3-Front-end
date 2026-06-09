import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import ListaVehiculos from './components/ListaVehiculos'
import './App.css'

function App() {
  const [vehiculos, setVehiculos] = useState([])
  const capacidadTotal = 10

  // Cargar desde localStorage al iniciar
  useEffect(() => {
    const datosGuardados = localStorage.getItem('vehiculos')
    if (datosGuardados) {
      setVehiculos(JSON.parse(datosGuardados))
    }
  }, [])

  // Guardar en localStorage cada vez que cambie vehiculos
  useEffect(() => {
    localStorage.setItem('vehiculos', JSON.stringify(vehiculos))
  }, [vehiculos])

  const agregarVehiculo = (nuevoVehiculo) => {
    if (vehiculos.length >= capacidadTotal) {
      alert('No hay cupos disponibles')
      return false
    }
    setVehiculos([...vehiculos, nuevoVehiculo])
    return true
  }

  const eliminarVehiculo = (patente) => {
    setVehiculos(vehiculos.filter(v => v.patente !== patente))
  }

  const cuposDisponibles = capacidadTotal - vehiculos.length

  return (
    <>
      <header>
        <h1>🚗 Sistema de Gestión de Estacionamientos</h1>
        <p>Control de flujo vehicular</p>
      </header>

      <main>
        <div className="info-panel">
          <p>🅿️ Capacidad total: {capacidadTotal} cupos</p>
          <p>✅ Cupos disponibles: {cuposDisponibles}</p>
          <p>🚙 Vehículos estacionados: {vehiculos.length}</p>
        </div>

        <Formulario 
          onAgregarVehiculo={agregarVehiculo}
          cuposDisponibles={cuposDisponibles}
        />

        <ListaVehiculos 
          vehiculos={vehiculos}
          onEliminarVehiculo={eliminarVehiculo}
        />
      </main>

      <footer>
        <p>© 2024 - Sistema de Estacionamiento | Contacto: richardbarra@estacionamiento.cl</p>
      </footer>
    </>
  )
}

export default App