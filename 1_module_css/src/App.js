import Card from "./components/card/Card";
import data from './utils/data';

function App() {
  
  return (
    <>
    {data.map(({id,img,language,btnName})=>(
      <Card key={id} img={img} language={language} btn={btnName}/>

    ))}
    
      

    </>
  )
}

export default App
