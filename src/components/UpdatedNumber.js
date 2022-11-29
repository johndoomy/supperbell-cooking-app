const UpdatedNumber = ({ selectedRecipe, multiplier, ingredient }) => {
  class Measurement {
    constructor(amount, unit) {
        this.amount = amount
        this.unit = unit
    }
  }

  const convertPounds = measurement => {
      if (measurement.amount >= 2000) {
          measurement.amount = measurement.amount / 2000
          measurement.unit = "tons"
          return measurement
      } else if (measurement.amount >= 1) {
          return measurement
      } else {
          measurement.amount = measurement.amount * 16
          measurement.unit = "oz"
          return measurement
      }
  };

  const convertCups = measurement => {
      if (measurement.amount >= 4) {
          measurement.amount = measurement.amount / 4
          measurement.unit = "qt"
          return measurement
      } else if (measurement.amount >= 1) {
          return measurement
      } else {
          measurement.amount = measurement.amount * 8
          measurement.unit = "fl oz"
          return measurement
      }
  };

  const convertFlOz = measurement => {
      if (measurement.amount >= 32) {
          measurement.amount = measurement.amount / 32
          measurement.unit = "qt"
          return measurement
      // } else if (measurement.amount >= 16) {
      //     measurement.amount = measurement.amount / 16;
      //     measurement.unit = "pints";
      //     return measurement;
      } else if (measurement.amount >= 8) {
          measurement.amount = measurement.amount / 8;
          measurement.unit = "c"
          return measurement
      } else {
          return measurement
      }
  }

  const convertMeasurement = measurement => {
      if (measurement.unit === "c") {
          measurement = convertCups(measurement)
          return measurement
      } else if (measurement.unit === "lb") {
          measurement = convertPounds(measurement)
          return measurement
      } else if (measurement.unit === "fl oz") {
          measurement = convertFlOz(measurement)
          return measurement
      } else {
        //   console.log("Error, could not convert measurement " + measurement.unit)
          return measurement
          
      }
  }

  let newAmount = selectedRecipe.amount * ingredient.amount * multiplier
  let measurement = new Measurement(newAmount, ingredient.unit)
  let newMeasurement = convertMeasurement(measurement)

  return (
    <div className="updatedNumber">
        {newMeasurement.amount} {newMeasurement.unit}
    </div>
  )
}

export default UpdatedNumber