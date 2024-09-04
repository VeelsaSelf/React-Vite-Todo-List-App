import React , {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { deleteNote } from '../board/boardSlice';
import { useNavigate } from 'react-router-dom';
import style from './NoteDetails.module.css';

function NoteDetails() {

    const { id } = useParams();
    const navigate = useNavigate();
    const notes = useSelector((state) => state.board);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteNote(notes[id]?.id));
        navigate('/Todo-app/');
    }


    return (
        <div className={style.note}>
            <h3>Title : </h3>
            <div>{notes[id]?.title}</div>
            <h3>Description : </h3>
            <div>{notes[id]?.desc}</div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default NoteDetails;