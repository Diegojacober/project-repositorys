import React, { useState, useCallback, useEffect } from "react";
import { FaGithub, FaPlus, FaSpinner, FaShareSquare, FaTrash } from 'react-icons/fa'

import { toast } from "react-toastify";
import { Container, Form, SubmitButton, Loader, List, Repo } from "./styles";

import api from '../../services/api'

export default function Main() {

    const [newRepo, setNewRepo] = useState('')
    const [loading, setLoading] = useState(false)
    const [repositorios, setRepositorios] = useState([])

    //DidMount
    useEffect(() => {
        const reposStorage = localStorage.getItem('repos')
        if (reposStorage) {
            setRepositorios(JSON.parse(reposStorage))
        }
    }, [])

    //Como se fosse o DidUpdate
    useEffect(() => {
        localStorage.setItem('repos', JSON.stringify(repositorios))
    }, [repositorios])


    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        function formatDate(date) {
            let data = new Date(date);
            return ((data.getDate() + "/" + +"0" + ((data.getMonth() + 1)) + "/" + data.getFullYear() + " " + data.getHours() + ":" + data.getMinutes() + ":" + data.getUTCSeconds()));
        }

        async function submit() {

            if (newRepo == '') {
                return toast.error('Digite o nome do repositório desejado', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }

            setLoading(true)

            let response = await api.get(`repos/${newRepo}`)
                .then((data) => {

                    const dados = {
                        name: data.data.full_name,
                        created_at: formatDate(data.data.created_at),
                        language: data.data.language,
                        owner_url: data.data.owner.avatar_url,
                        owner_name: data.data.owner.login,
                        updated_at: formatDate(data.data.updated_at),
                        url: data.data.url
                    }

                    setRepositorios([...repositorios, dados])
                    setLoading(false)
                    setNewRepo('')

                }).catch((error) => {
                    console.log(error)
                    setLoading(false)
                    setNewRepo('')
                    if (error.response.status == 404) {

                        return toast.warn('Repositório não encontrado!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }

                    return toast.error('Ops, aconteceu um erro! Tente novamente mais tarde')

                })
        }

        submit()
    }, [newRepo, repositorios])


    function openPageRepo(name) {
        window.open(`https://github.com/${name}`, '_blank')
    }

    const handleDelete = useCallback((repo) => {
        const find = repositorios.filter(r => r.name !== repo)
        setRepositorios(find)
    }, [repositorios])


    return (
        <Container>
            <h1>
                <FaGithub size={25} color="#000" />
                Meus repositórios
            </h1>

            <Form onSubmit={handleSubmit}>
                <input type="text" value={newRepo} onChange={(e) => setNewRepo(e.target.value)} placeholder="Adicionar Repositorios" />

                <SubmitButton loading={loading ? 1 : 0}>
                    {loading && <FaSpinner color="#FFF" size={14} />}
                    {!loading && <FaPlus size={14} color="#FFF" />}
                </SubmitButton>

                {/* {loading && <Loader></Loader>}
                {!loading && <SubmitButton><FaPlus size={14} color="#FFF"/> </SubmitButton>} */}

            </Form>

            <List>
                {repositorios.map((repo, index) => (
                    <Repo key={index}>
                        {console.log(repo)}
                        <div className="repo-right">
                            <img src={repo.owner_url} alt="Criador" />
                            <small>{repo.owner_name}</small>
                        </div>

                        <div className="repo-informations">
                            <h6>{repo.name} <i className="button-share" onClick={() => openPageRepo(repo.name)}><FaShareSquare size={20} color="#0d2636" /></i></h6>
                            <p><small>Criado em: {repo.created_at}</small>
                                <small>Atualizado em: {repo.updated_at}</small></p>
                            <div className="buttons">
                                <button onClick={() => handleDelete(repo.name)}><FaTrash size={14} /></button>
                            </div>
                        </div>
                    </Repo>
                ))}
            </List>

        </Container>
    )
}
