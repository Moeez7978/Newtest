import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
function App() {


  return (
    <>
      <div className="absolute h-auto w-auto bg-slate-950 ">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_50%_150px,#3e3e3e,transparent)] -z-10 ">
        </div>
      <div>
        < Navbar/>
      <Hero/>
      <About/>
      </div>
      </div>

    </>
  )
}

export default App
