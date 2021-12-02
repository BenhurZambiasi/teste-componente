import React from 'react';
import { Switch, Route } from "react-router-dom";
import Padrao from '../Pages/Padrao';
import Login from '../Pages/LoginAdm';
import RedefinirAdm from '../Pages/RedefinirSenhaAdm';
import MeuPortal from '../Pages/LoginAlunoProfessor';
import RedefinirAlunoProfessor from '../Pages/RedefinirSenhaAlunoProfessor';
import Home from '../Pages/Home';
import Matricula from '../Pages/Matricula';
import CadastroUsuario from '../Pages/CadastroUsuario';
import CadastrarDisciplina from '../Pages/CadastrarDisciplina';
import CadastroConteudo from '../Pages/CadastroConteudo';
import ListaDeDisciplinas from '../Pages/ListaDeDisciplinas';
import DetalhamentoDisciplina from '../Pages/DetalhamentoDisciplina';
import VisualizarContent from '../Pages/VisualizarContent';
import CadastroNota from '../Pages/CadastroNota';
import ProtectedRoute from '../helper/ProtectedRoute';

function Routes() {

    return (
        <Switch>
            <Route path="/" exact component={Padrao} />
            <Route path="/Login" component={Login} />
            <Route path="/RedefinirSenhaAdm" component={RedefinirAdm} />
            <Route path="/MeuPortal" component={MeuPortal} />
            <Route path="/RedefinirSenhaAlunoProfessor" component={RedefinirAlunoProfessor} />
            <Route path="/DetalhamentoDisciplina" component={DetalhamentoDisciplina} />
            <ProtectedRoute path="/Home" component={Home} />
            <ProtectedRoute path="/Matricula" component={Matricula} />
            <ProtectedRoute path="/CadastroUsuario" component={CadastroUsuario} />
            <ProtectedRoute path="/CadastrarDisciplina" component={CadastrarDisciplina} />
            <ProtectedRoute path="/ListaDeDisciplinas" component={ListaDeDisciplinas} />
            <ProtectedRoute path="/CadastroConteudo" component={CadastroConteudo} />
            <ProtectedRoute path="/VisualizarContent" component={VisualizarContent} />
            <ProtectedRoute path="/CadastroNota" component={CadastroNota} />
        </Switch>
    );
}
export default Routes;