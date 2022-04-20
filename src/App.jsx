import {Navbar, Footer, Services, Welcome, Transaction} from './component'

const App= () => {


  return (
    <div className='min-h-screen'>

      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
      
      <Services/>
      <Transaction/>
      <Footer/>
      </div>

    </div>
  )
}

export default App;