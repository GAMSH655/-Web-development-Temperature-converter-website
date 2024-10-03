import  {useState}from 'react'
import './App.css'
function App() {
 const [value , setValue] =  useState <string >("")
 const [tempValue, setTempValue] = useState(0)
 const [tempUnit, setTempUnit] = useState<string>("Fahrenheit")
 const [unit, setUnit] = useState("")

const temperatureConverter = (unit: string)  => {
  let result = 0;
  if(unit == "Fahrenheit") {
    result = 5 / 9 * (+value - 32)
    result = +result.toFixed(2)
    setTempValue(result)
    setUnit("C")
  } else {
    // fahrenheit formula
    result = (9/5 * +value) + 32
    result = +result.toFixed(2)
    setTempValue(result)
    setUnit("F")
  }
  setTempValue(result)
}
 
 const Handlesubmit =()=>{
    // celcius to fahreneit formula T(°C) = (T(°F) - 32) × 5/9)
   temperatureConverter(tempUnit)

}
  const handleInput =(e:any)=>{
    const value = e.target.value 
    setValue(value)
      
  }
 
  const Temp_Converter = (e: any) => {
    setTempUnit(e.target.value)
  }

  
  return (
    <>
       <div className="rounded-none width[100%] bg-black   p-10  flex items-center justify-center text-center  " style={{height: "100vh"}} >
         <div>  
          <label htmlFor="temprature" className='text-center text-3xl font-extrabold text-white'  >Temperature</label>
         <input type="text" className="rounded-lg bg-green-400 text-center w-80 h-12 m-10 block"   placeholder={`Convert to ${tempUnit == "Fahrenheit" ? "Celsius" : "Fahrenheit"}`} value={value}  onChange={(e)=>handleInput(e)} onKeyPress={(event) => {
          if(!/[0-9]/.test(event.key)){
            event.preventDefault();
          }
         }} id="temprature" />
        <select id="cars" className="rounded-lg bg-green-400 w-80 h-12 m-10 block text-center"  name='scale' onChange={(e)=>Temp_Converter(e)}> 
          <option value="Fahrenheit" >Fahreneit</option>
          <option value="Celsius">Celcius</option>
        </select>
        {tempValue > 0 ? (
        <div className="temperatureResult" style={{width: "320px", display:"flex", backgroundColor: "rgb(74 222 128 / 1)", height: "48px", justifyContent: "center" ,margin: "40px", borderRadius: "8px"}}>
          <div className="temperatureUnit" style={{width: "100px", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <h3>Result</h3>
          </div>
          <div className="result" style={{width: "220px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "inherit"}}>
            <h3>{tempValue}&deg;<b>{unit}</b></h3>
          </div>
        </div>
        ) : ""}



           <div className="flex items-center justify-center">
           <button className='rounded-md outline-none text-black font-bold capitalize bg-green-400 p-2 w-64 transition hover:bg-black-700 text-center duration-500 block ' onClick={Handlesubmit}>convert to {tempUnit == "Fahrenheit" ? "Celsius" : "Fahrenheit"}</button>
           </div>
         </div>
       </div>
    </>

    // fahreneit to cleicus formula T(°C) = (T(°F) - 32) × 5/9)
    // value = ; 
  )
}

export default App
