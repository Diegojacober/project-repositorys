import {Routes, Route} from 'react-router-dom'

import Main from '../pages/Main'
import Repositorios from '../pages/Repositorios'

function RoutesApp() {
    return(
        <Routes>
            <Route path='/' element={ <Main/> }/>

            <Route path='/repositorio/:id' element={ <Repositorios/> }/>

        </Routes>
    )
}

export default RoutesApp