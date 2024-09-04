import React , {useState} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { addNote } from '../board/boardSlice';
import { useNavigate } from 'react-router-dom';
import style from './AddNote.module.css';

function AddNote() {

    const navigate = useNavigate();
    const notes = useSelector((state) => state.board);
    const dispatch = useDispatch();

    const [note , setNote] = useState({
        id: notes.length,
        title: '',
        desc: '',
    });

    const handleAdd = () => {
        dispatch(addNote({note}));
        navigate('/Todo-app/');
    }

    return (
        <div className={style.note}>
            <input type="text" required value={note.title} placeholder="Enter Title" onChange={(e) => setNote( {...note , title: e.target.value} )}/>
            <input type="text" required value={note.desc} placeholder="Enter Description" onChange={(e) => setNote({...note , desc: e.target.value})}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default AddNote;