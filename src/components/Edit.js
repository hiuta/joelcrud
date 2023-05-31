import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"

const Edit = () => {
    //configuracion de los hook useState para iniciliar las variables
    const [ nombre, setNombre ] = useState('')
    const [ correo, setCorreo ] = useState('')
    const [ domicilio, setDomicilio ] = useState('')
    const [ rfc, setRfc ] = useState('')
    const navigate = useNavigate()    
    const {id} = useParams()

    //metodo actualizar que permite actulizar la base de datos,tomando como referencia el id, y guardando cada uno de los datos
    const actualizar = async (e) => {
        e.preventDefault()
        const usuario = doc(db, "usuarios", id)
        const data = {nombre: nombre, correo: correo,domicilio:domicilio,rfc:rfc}
        //se actuliza el documento en la base de datos
        await updateDoc(usuario, data)
        //se redireccion al inicio despues de actualizar
        navigate('/')
    }

    //metodo para traer los datos de los usuario por el id
    const getUsuarioById = async (id) => {
        const usuario = await getDoc( doc(db, "usuarios", id) )
        //se valida que el usuario exista en la base de datos
        if(usuario.exists()) {
            //si el usuario existe se asignan los valores de la bd en las variables
            setNombre(usuario.data().nombre)    
            setCorreo(usuario.data().correo)
            setDomicilio(usuario.data().domicilio)
            setRfc(usuario.data().rfc)
        }else{
            console.log('El usuario no existe')
        }
    }

    useEffect( () => {
        getUsuarioById(id)
    }, [])

    return (
        <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Editar Usuario</h1>

                 <form onSubmit={actualizar}>

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
                        <label className='form-label'>Domicilio</label>
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

                    <button type='submit' className='btn btn-primary'>Actualizar</button>

                 </form>   
            </div>
        </div>
    </div> 
    )
}

export default Edit