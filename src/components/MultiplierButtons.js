import { useRef } from "react"

const MultiplierButtons = ({ updateMultiplier }) => {
    const manualMultiplier = useRef()

    const handleManualMultiplier = () => {
        let number = manualMultiplier.current.value
        updateMultiplier(number)
    }

  return (
    <div>
        <input onClick={() => updateMultiplier(.25)} type="button" value="1/4" />
        <input onClick={() => updateMultiplier(.33)} type="button" value="1/3" />
        <input onClick={() => updateMultiplier(.5)} type="button" value="1/2" /> 
        <input onClick={() => updateMultiplier(1)} type="button" value="1" /> 
        <input onClick={() => updateMultiplier(2)} type="button" value="2" /> 
        <input onClick={() => updateMultiplier(3)} type="button" value="3" />
        <input onClick={() => updateMultiplier(4)} type="button" value="4" />
        <span className="manualMultiplierContainer">
            Custom Number:
            <input autoComplete="off" ref={manualMultiplier} type="text" size={2} name="manualMultiplier" placeholder="#" />
            <input onClick={handleManualMultiplier} type="button" value="Add" />
        </span>
        

    </div>
  )
}

export default MultiplierButtons