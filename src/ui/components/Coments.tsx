"use client"
import { apisMutation } from '@/infrastructure/api/apis-mutations'
import React, { useState } from 'react'
import { ButtonComponent } from '../reusable/Button'
import { DivGrid, FormStyle, Title } from '../styles'
import { Loader } from '../Loader/Loader'

export const ComentsPage = () => {

    const [formdata, setformdata] = useState({
        postId: 0,
        id: 0,
        name: "",
        email: "",
        body: "",
    })
    const { postComentsMutation } = apisMutation()
    const { getComentsQuery } = apisMutation(),
        { data, isError, isLoading } = getComentsQuery
    console.log(data)
    const [form, setForm] = useState(false)

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    // console.log(formdata)

    const HandleSubmit = (e: any) => {
        e.preventDefault()
        const newData = { ...formdata, id: Date.now(), postId: Date.now() }
        console.log(newData)
        postComentsMutation.mutate(newData)
    }
    return (
        <section className='g-maxwidth '>
            <Title >
                <h1>Lista de comentarios</h1>
            </Title>
            <ButtonComponent onClick={() => setForm(!form)}>Agregar comentario</ButtonComponent>
            {
                !data && isLoading || isError ?
                    <div style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "2rem",
                        height: "60vh"
                    }}>
                        <Loader></Loader>
                    </div>
                    : ""
            }
            <DivGrid>
                {
                    isError && <p>Error de la api</p>
                }
                {
                    !isLoading && !isError &&
                    data?.map(e => (
                        <ul key={e.id}>
                            <p>name: {e.name}</p>
                            <p>email: {e.email}</p>
                            <p>body: {e.body}</p>
                        </ul>
                    ))
                }
            </DivGrid>
            {
                form &&
                <FormStyle>
                    <form onSubmit={HandleSubmit} action="">
                        <input onChange={HandleChange} value={formdata.name} name='name' placeholder='nombre' type="text" />
                        <input onChange={HandleChange} value={formdata.email} name='email' placeholder='email' type="email" />
                        <input onChange={HandleChange} value={formdata.body} name='body' placeholder='body' type="text" />
                        <button type='submit'>Crear Comentario</button>
                    </form>
                </FormStyle>
            }
        </section>
    )
}
