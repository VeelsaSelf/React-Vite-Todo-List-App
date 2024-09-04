import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { addNote , deleteNote } from './boardSlice';
import { useNavigate } from 'react-router-dom';
import style from './Board.module.css';
import Card from '../components/card/Card';
import AddCard from '../components/addCard/AddCard';

function Board() {

    const navigate = useNavigate();
    const notes = useSelector((state) => state.board);

    return (
        <div className={style.board}>
            {
                notes.map((note,idx) => {
                    if(note.id !== 0){
                        return <div className={style.card} key={note.id} onClick={() => navigate(`/Todo-app/${idx}`)}>
                            <Card 
                                title={note?.title} 
                                description={note?.desc}
                            />
                        </div>
                    }
                    return <div className={style.card} key={note.id} onClick={() => navigate(`/Todo-app/add`)}>
                        <AddCard/>
                    </div>
                })
            }
        </div>
    );
}

export default Board;