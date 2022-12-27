import React from 'react';
import { BrowserRouter as Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import ImageGetter from "./components/get-images.component";
import MyImage from "./components/get-myimage.component";

function App() {
    return (
        <Routes>
            <div className="container">
                <Navbar />
                <br />
                <Route path="/" exact component={ImageGetter} />
                <Route path="/myimage" component={MyImage} />
            </div>
        </Routes>
    );
}

export default App;