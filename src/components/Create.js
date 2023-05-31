import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

const Create = () => {

    //configuracion de los hook useState para iniciliar las variables
  const [ nombre, setNombre ] = useState('')
  const [ correo, setCorreo] = useState('')
  const [ domicilio, setDomicilio ] = useState('')
  const [ rfc, setRfc ] = useState('')
  const navigate = useNavigate()

//referenciamos a la bd usuarios en  firestore
  const usuariosCollection = collection(db, "usuarios")

//metodo guardar cliente, que asigna y guarda los valores al documento 
  const guardarCliente = async (e) => {
    e.preventDefault()
    await addDoc( usuariosCollection, { nombre: nombre, correo: correo,domicilio: domicilio,rfc: rfc } )
    //despues de guardar, redirecciona al inicio
    navigate('/')
    //console.log(e.target[0].value)
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Dar de Alta Cliente</h1>

                 <form onSubmit={guardarCliente}>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                            value={nombre}
                            onChange={ (e) => setNombre(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div>  

                    <div className='mb-3'>
                        <label className='form-label'>Correo</label>
                        <input
                            value={correo}
                            onChange={ (e)=> setCorreo(e.target.value)} 
                            type="text"
                            className='form-control'
                        />                 
                    </div>  

                    <div className='mb-3'>
                        <label className='form-label'>Domicilio</label>
                        <input
                            value={domicilio}
                            onChange={ (e) => setDomicilio(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div>  

                    <div className='mb-3'>
                        <label className='form-label'>RFC</label>
                        <input
                            value={rfc}
                            onChange={ (e) => setRfc(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div>  
                    
                    <button type='submit' className='btn btn-primary'>Guardar</button>
                 </form>   
            </div>
        </div>
    </div> 
  )
}

export default Create