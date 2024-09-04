import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Board from '../features/board/Board';
import NoteDetails from '../features/noteDetails/NoteDetails';
import AddNote from '../features/addNote/AddNote';
import style from './App.module.css';


function App() {

    return (
        <div className={style.app}>

            <Navbar/>
            <Routes>

                {/* Board */}
                <Route path='/Todo-app/' element={ <Board/> }/>

                {/* Add Note */}
                <Route path='/Todo-app/add/' element={ <AddNote/> }/>

                {/* Note Details */}
                <Route path='/Todo-app/:id' element={ <NoteDetails/> }/>


            </Routes>

        </div>
    );
}

export default App;
