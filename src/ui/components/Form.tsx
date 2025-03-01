import React, { useState } from 'react'
import "./style.css"
import { CommentsType } from '@/core/interfaces/coments'
import { apisMutation } from '@/infrastructure/api/apis-mutations'
export const Form = ({setForm, form}: {setForm: any, form: any}) => {

    const [formdata, setformdata] = useState({
        id: null,
        postId: null,
        name: "",
        email: "",
        body: ""
    })

    const { postComentsMutation } = apisMutation()

    const handleChange = (e: any) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e: any) => {
        e.preventDefault()
        const newData = { ...formdata, id: Date.now(), postId: Date.now() }
        console.log("ingreso de data nueva")
        console.log(newData)
        postComentsMutation.mutate(newData)
    }


    return (

        <form onSubmit={handleSubmit} className="form">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <svg onClick={()=> setForm(!form)} style={{ cursor: "pointer", fill: "#e9461e"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path><path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path></svg>
            </div>
            <p className="form-title">Crear comentario</p>
            <div className="input-container">
                <input onChange={handleChange} value={formdata.name} name='name' placeholder="name" type="text" />
                <span>
                    <svg style={{ padding: "5px" }} stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                    </svg>
                </span>
            </div>
            <div className="input-container">
                <input onChange={handleChange} value={formdata.email} name='email' placeholder="email" type="email" />
                <span>
                    <svg style={{ padding: "5px" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
                </span>
            </div>
            <div className="input-container">
                <input onChange={handleChange} value={formdata.body} name='body' placeholder="body" type="text" />
                <span>
                    <svg style={{ padding: "5px" }} stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                    </svg>
                </span>
            </div>
            <button onSubmit={handleSubmit} className="submit" type="submit">
                Enviar
            </button>
            <button className='close'  onClick={()=> setForm(!form)}>
                Cerrar
            </button>


        </form>

    )
}
