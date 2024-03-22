
import { Form } from "./components/Form"

function App() {


  return (
    <>
      <header className="bg-lime-600 py-3 bg">
        <div className="max-w-4xl mx-auto flex items-center justify-start"> 
          <div className="flex items-center"> 
            <img src="src\assets\logo.png" alt="logo" className="mr-2" />
            <h1 className="text-lg font-bold text-gray-700 uppercase">Diet App ®</h1>
          </div>
          <div className="justify-end">
          </div>
        </div>
      </header>

      <section className=" bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form/>
        </div>
      </section>

    </>
  )
}

export default App
