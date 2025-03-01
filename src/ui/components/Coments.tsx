"use client"
import { apisMutation } from '@/infrastructure/api/apis-mutations'
import React, { useState } from 'react'
import { ButtonComponent } from '../reusable/Button'
import { DivGrid, FormStyle, Header } from '../styles'
import { Loader } from '../loader/Loader'
import "./style.css"
import { Form } from './Form'
export const ComentsPage = () => {


    const [form, setForm] = useState(false)
    const { getComentsQuery } = apisMutation(),
        { data, isError, isLoading } = getComentsQuery


    return (
        <section className='g-maxwidth '>
            <Header>

                <div style={{ display: "flex", justifyContent: "center" }} >
                    <h1>Lista de comentarios</h1>
                </div>
                <ButtonComponent onClick={() => setForm(!form)}>Agregar comentario</ButtonComponent>
            </Header>
            {
                !data && isLoading ?
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
                            <p>{e.email}</p>
                            <p>{e.name}</p>
                            <p>{e.body}</p>
                        </ul>
                    ))
                }
                {
                    data?.length === 0 && <ul> <p>Sin datos por ahora</p></ul>
                }
            </DivGrid>
            {
                form &&
                <Form setForm={setForm} form={form}></Form>
            }
        </section>
    )
}
