"use client"
import { apisMutation } from '@/infrastructure/api/apis-mutations'
import React from 'react'
import { DivGrid } from '../styles'

export const ComentsPage = () => {
    const { getComentsQuery } = apisMutation(),
        { data } = getComentsQuery

    // console.log(data)
    return (
        <section>
            <h1>Lista de comentarios</h1>
            <DivGrid>
                {
                    data?.slice(0, 10).map(e => (
                        <ul key={e.id}>
                            <p>name: {e.name}</p>
                            <p>email: {e.email}</p>
                        </ul>
                    ))
                }
            </DivGrid>
        </section>
    )
}
