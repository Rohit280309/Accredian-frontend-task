import './App.css'
import Benifits from './components/Benifits'
import Navbar from './components/Navbar'
import Refer from './components/Refer'

function App() {

  return (
    <>
      <Navbar />
      <div className='w-full flex justify-center items-center mt-10'>
        <div className='bg-blue-50 p-2 w-1/2 rounded-full flex justify-center items-center space-x-5'>
          <p className={`cursor-pointer`}>Refer</p>
          <p className={`cursor-pointer`}>Benifits</p>
          <p className={`cursor-pointer`}>FAQs</p>
          <p className={`cursor-pointer`}>Support</p>
        </div>
      </div>
      <Refer />
      <Benifits />
    </>
  )
}

export default App
