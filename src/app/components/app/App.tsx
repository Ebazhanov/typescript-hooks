import React from 'react';
import {Store} from "../Store";
import {Link} from "@reach/router";
import './App.css'

export default function App(props: any): JSX.Element {

    const {state} = React.useContext(Store);

    return (
        <React.Fragment>
            <header className="header">
                <div>
                    <h1>Love Stories </h1>
                    <p>Pick your favorite episode !!!</p>
                </div>
                <div>
                    <button><Link to='/'> Home </Link></button>
                    <button><Link to='/favorite'>Favorite(s): {state.favorites.length}</Link></button>
                </div>
            </header>
            {props.children}
        </React.Fragment>
    )
}
