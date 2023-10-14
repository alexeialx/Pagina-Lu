import './Inicio.css'
import home1 from '../assets/images/header/header-bg.jpg'

const Inicio = () => {
  return (
    <>
    <div className='home'>
        <img src={home1} alt="" />
        <h1>hola lucia</h1>
        <div className='container'>
          <button>HOver</button>
        </div>
    </div>
    </>
  )
}

export default Inicio