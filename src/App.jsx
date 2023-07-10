import { 
    Navbar,
    Hero,
    Features, 
    BestSeller,
    Reference, 
    Tips,
    Footer
  }
 from "./sections"

function App() {
  

  return (
    <div className='font-work-sans  '>
      <Navbar />
      <Hero/>
      {/* <Features /> */}
      <BestSeller />
      <Reference />
      <Tips />
      <Footer />
    </div>
  )
}

export default App
