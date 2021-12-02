import React from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "components/template/footer";
import Logo from "components/template/logo";
import Nav from "components/template/nav";
import CadDisc from "pages/admin/cadDisc";
import CadUser from "pages/admin/cadUser";
import matAluno from "pages/admin/matAluno";
import Home from "pages/home/home";

import Disciplinas from "pages/teacher/DisciplinasTeacher";
import publicContent from "pages/teacher/publcContent";
import publicNota from "pages/teacher/publicNota";

const Routes = () => (
  <div className="app">
    <Logo />
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={CadUser} />
      <Route path="/disciplina" component={CadDisc} />
      <Route path="/matAluno" component={matAluno} />
      <Route path="/disciplinas" component={Disciplinas} />
      <Route path="/publicContent" component={publicContent} />
      <Route path="/publicNota" component={publicNota} />
    </Switch>
    <Footer />
  </div>
);

export default Routes;
