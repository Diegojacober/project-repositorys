import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import { Container, Loader, Owner, BackButton } from "./styles";
import api from '../../services/api'
import { FaArrowLeft } from 'react-icons/fa'

export default function Repositorios() {

    const { id } = useParams() 

    const [repositorio, setRepositorio] = useState({})
    const [issues, setIssues] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadData() {

            const [repoData, issuesData] = await Promise.all([
                api.get(`/repos/${id}`),
                api.get(`repos/${id}/issues`, {
                    params: {
                        state: 'open',
                        per_page: 5,
                    }
                })
            ])

            setRepositorio(repoData.data)
            setIssues(issuesData.data)
            setLoading(false)
        }

        loadData()
    }, [id])

    if(loading) {
        return(
            <Container>
                <Loader>
                    <span></span>
                </Loader>
            </Container>
        )
    }

    return(
       <Container>
       <BackButton to="/">
             <FaArrowLeft size={35} color="#000"/>
       </BackButton>
       <Owner>
        <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />

        <h1>{repositorio.name}</h1>
        <p>{repositorio.description}</p>

       </Owner>

       </Container>

    )
}

