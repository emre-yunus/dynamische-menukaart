import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from "react-bootstrap";
import {MenuNavbar} from "./components/MenuNavbar";
import {MenuCard} from "./components/MenuCard";
import {MenuDataProvider} from "./contexts/menuDataContext";
import React from "react";
import {MessageProvider} from "./contexts/messageContext";

function ProvidedApp() {
    return <>
        <Container fluid className="p-0 p-md-3 p-lg-5">
            <MenuNavbar/>
            <MenuCard/>
        </Container>
    </>
}

function App() {
    return <MessageProvider>
        <MenuDataProvider>
            <ProvidedApp/>
        </MenuDataProvider>
    </MessageProvider>
}

export default App;
