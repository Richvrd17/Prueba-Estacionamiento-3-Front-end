import CardVehiculo from './CardVehiculo'

function ListaVehiculos({ vehiculos, onEliminarVehiculo }) {
  if (vehiculos.length === 0) {
    return (
      <div className="lista-vacia">
        <p>No hay vehículos estacionados</p>
        <p>Registra el ingreso de un vehículo para comenzar</p>
      </div>
    )
  }

  return (
    <div className="lista-vehiculos">
      <h2>Vehículos estacionados ({vehiculos.length})</h2>
      <div className="tarjetas-container">
        {vehiculos.map((vehiculo) => (
          <CardVehiculo
            key={vehiculo.patente}
            vehiculo={vehiculo}
            onEliminarVehiculo={onEliminarVehiculo}
          />
        ))}
      </div>
    </div>
  )
}

export default ListaVehiculos