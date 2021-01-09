import React from "react";
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import PreJunior from "./pages/PreJunior";

export const PATH = {
    PRE_JUNIOR: "/pre-junior"
}

function Routes() {

    return (
        <BrowserRouter>
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
            <Route path={"/"} exact render={() => <Redirect to={"/pre-junior"}/>}/>

            <Route path={"pre-junior"} render={() => <PreJunior/>}/>
                // add routes

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            {/*<Route render={() => <Error404/>}/>*/}

            </Switch>
        </div>
        </BrowserRouter>
    );
}

export default Routes;
