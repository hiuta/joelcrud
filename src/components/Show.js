import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {collection,getDocs, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

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
    //funcion de confirmacion para sweet alert 2
    //usamos useEffect
    useEffect(() => {
        getUsuarios()
    }, [])
    //devolvemos vista de nuestro componente
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className="d-grid gap-2">
            <Link to="/create" className='btn btn-secondary mt-2 mb-2'>Create</Link>    
          </div>
          <table className='table table-dark table-hover'>
            <thead>
              <tr>
                <th>Description</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { usuarios.map( (usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.description}</td>
                  <td>{usuario.stock}</td>
                  <td>
                    <Link to={`/edit/${usuario.id}`} className="btn btn-light"><i className="fa-solid fa-pencil"></i></Link>
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