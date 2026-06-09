function CardVehiculo({ vehiculo, onEliminarVehiculo }) {
  const claseTarjeta = vehiculo.permanente ? 'card permanente' : 'card temporal'

  return (
    <div className={claseTarjeta}>
      <div className="card-header">
        <span className="patente">{vehiculo.patente}</span>
        <span className="badge">
          {vehiculo.permanente ? ' Permanente' : ' Temporal'}
        </span>
      </div>
      <div className="card-body">
        <p><strong>Propietario:</strong> {vehiculo.propietario}</p>
        <p><strong>Ingreso:</strong> {vehiculo.fechaIngreso} - {vehiculo.horaIngreso}</p>
      </div>
      <div className="card-footer">
        <button 
          className="btn-eliminar"
          onClick={() => onEliminarVehiculo(vehiculo.patente)}
        >
          Registrar salida
        </button>
      </div>
    </div>
  )
}

export default CardVehiculo