import Button from "./components/ui/button"
import PasswordInput from "./components/ui/passwordInput"
import { Plus, Delete } from "lucide-react"

function App() {



  return (
    <>
    <div className="flex flex-col items-start justify-start gap-5">

      <h1>Hello world</h1>
      <Button className="bg-red-200 text-red-500">
        <Plus size={16}/>
        <span className="">Nouveau</span>
      </Button>
      <Button className="bg-red-500 text-white">
        <Delete size={16}/>
        <span className="">Nouveau</span>
      </Button>
      <PasswordInput className={``} label={"Hello world"}/>
    </div>
    </>
  )
}

export default App
