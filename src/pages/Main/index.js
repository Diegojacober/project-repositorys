import React, { useState, useCallback } from "react";
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa'

import { toast } from "react-toastify";
import { Container, Form, SubmitButton, Loader } from "./styles";

import api from '../../services/api'

export default function Main() {

    const [newRepo, setNewRepo] = useState('')
    const [loading, setLoading] = useState(false)
    const [repositorios, setRepositorios] = useState([])

    const handleSubmit =  useCallback((e)=> {
        e.preventDefault();
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
                created_at: data.data.created_at,
                language: data.data.language,
                owner_url: data.data.owner.avatar_url,
                owner_name: data.data.owner.login,
                updated_at: data.data.updated_at,
                url: data.data.url
            }

            setRepositorios([...repositorios, data])
            setLoading(false)
            setNewRepo('')
        }).catch((error) => {
            console.log(error)
            setLoading(false)
            setNewRepo('')
            toast.warn('Repositório não encontrado!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        })
        }

        submit()
    },[newRepo, repositorios])

    return(
        <Container>
            <h1>
                <FaGithub size={25} color="#000"/>
                Meus repositórios
            </h1>

            <Form onSubmit={handleSubmit}>
                <input type="text" value={newRepo} onChange={(e) => setNewRepo(e.target.value)} placeholder="Adicionar Repositorios"/>

                <SubmitButton Loading= {loading ? 1 : 0}>
                    {loading && <FaSpinner color="#FFF" size={14}/>}
                    {!loading &&  <FaPlus size={14} color="#FFF"/>}
                </SubmitButton>

                {/* {loading && <Loader></Loader>}
                {!loading && <SubmitButton><FaPlus size={14} color="#FFF"/> </SubmitButton>} */}
                
            </Form>


            
        </Container>
    )
}
