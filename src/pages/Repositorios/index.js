import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Container, Loader, Owner, BackButton, IssuesList, PageActions } from "./styles";
import api from '../../services/api'
import { FaArrowLeft } from 'react-icons/fa'

export default function Repositorios() {

    const { id } = useParams() 

    const [repositorio, setRepositorio] = useState({})
    const [issues, setIssues] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

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


    useEffect(() => {

        async function loadIssue() {
            const response = await api.get(`/repos/${id}/issues`, {
                params: {
                    state: 'open',
                    page,
                    per_page: 5
                }
            })

            setIssues(response.data)
        }

        loadIssue()

    }, [id, page])

    function handlePage(action) {
        setPage(action === 'back' ? page - 1 : page + 1)
    }

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

       <IssuesList>

            {issues.map((issue => (
                <li key={String(issue.id)}>
                    <img src={issue.user.avatar_url} alt={issue.user.login} />

                    <div>
                        <strong>
                            <a href={issue.html_url} >{issue.title}</a>

                            {issue.labels.map(label => (
                                <span key={String(label.id)}>{label.name}</span>
                            ))}
                        </strong>
                        <p>{issue.user.login}</p>
                    </div>
                </li>
            )))}


       </IssuesList>


       <PageActions>
          <button type="button" onClick={() => handlePage('back')} disabled={page < 2}>
            Voltar
          </button>

          <button type="button" onClick={() => handlePage('next')}>
            Próxima
          </button>
       </PageActions>

       </Container>

    )
}

