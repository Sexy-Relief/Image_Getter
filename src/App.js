import React from 'react';
import { BrowserRouter as Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import ImageGetter from "./components/get-images.component";
import MyImage from "./components/get-myimage.component";

function App() {
    return (
        <Routes>
            <div className="container">
                <Navbar />
                <br />
                <Route path="/" exact component={ImageGetter} />
                <Route path="/edit/:id" component={EditExercise} />
                <Route path="/create" component={CreateExercise} />
                <Route path="/user" component={CreateUser} /> 
                <Route path="/myimage" component={MyImage} />
            </div>
        </Routes>
    );
}

export default App;