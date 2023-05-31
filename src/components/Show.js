//importacion de la libreria useState para gestionar los estados, y UseEffect para hacer los cambios secundarios
import React, {useState, useEffect} from 'react'
//importacion de la libreria Link para poder usar y navegar en las diferentes rutas
import { Link } from 'react-router-dom'
//librerias que se ocupan para manipular los datos(libros) en FireBase
import {collection,getDocs, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'




const Show = () => {
    //configurar los hooks
    const [usuarios, setUsuarios]= useState([])
    //referenciamos a la bd firestore
    const usuariosCollection = collection(db,"usuarios")
    //funcion para mostrar todo los docs
    const getUsuarios = async ()=> {
        const data = await getDocs(usuariosCollection)
        
        setUsuarios(
            data.docs.map((doc)=>({...doc.data(),id:doc.id}))
        )
        console.log(usuarios)
          
    }
    //funcion para eliminar un doc
    const deleteUsuario = async (id)=> {
        const usuariosDoc = doc(db,"usuarios",id)
        await deleteDoc(usuariosDoc)
        getUsuarios()
    }

    //usamos useEffect
    useEffect(() => {
        getUsuarios()
    }, [])
    //devolvemos vista de nuestro componente

  return (
    <>
     {/* Creacion de un contenedor */}
    <div className='container'>
         {/* Creacion filas y columnas */}
      <div className='row'>
        <div className='col'>
          <div className="d-grid gap-2">
             {/* Creacion del boton Crear usuario y Redireccionando al componente create */}
            <Link to="/create" className='btn btn-success mt-2 mb-2'>Crear Usuario</Link>    
          </div>
        {/* Creacion de la tabla y los elementos */}
          <table className='table  table-succes table-hover'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Domicilio</th>
                <th>RFC</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
                 {/* iterando los datos con map */}
              { usuarios.map( (usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.correo}</td>
                  <td>{usuario.domicilio}</td>
                  <td>{usuario.rfc}</td>
                  <td>
                     {/* botton para editar usuario dentro de la tabala, pasando como parametro el id */}
                    <Link to={`/edit/${usuario.id}`} className="btn btn-light"><i className="fa-solid fa-pencil"></i></Link>
                     {/* boton para eliminar usuario haciendo uso del metodo deleteUsuario y pasando como parametro el id */}
                    <button onClick={ () => { deleteUsuario(usuario.id) } } className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>                
              )) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}
export default Show