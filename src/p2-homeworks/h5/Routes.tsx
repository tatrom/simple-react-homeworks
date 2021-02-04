import React from "react";
import {Switch, Route, Redirect, BrowserRouter, HashRouter} from 'react-router-dom'
import PreJunior from "./pages/PreJunior";
import {Junior} from "./pages/Junior";
import {StrongJunior} from "./pages/Junior+";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIOR: "/junior",
    STRONG_JUNIOR: "/strong_junior",
}

function Routes() {

    return (
        <HashRouter>
            <div>
                {/*Switch выбирает первый подходящий роут*/}
                <Switch>

                    {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                    {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                    <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
                    <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                    <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
                    <Route path={PATH.STRONG_JUNIOR} render={() => <StrongJunior/>}/>
                    {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                    <Route render={() => <Error404/>}/>

                </Switch>
            </div>
        </HashRouter>
    );
}

export default Routes;
