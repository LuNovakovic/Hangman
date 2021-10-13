import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';



export default function NameInput() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch({ type: 'SET_NAME', name: data.name })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name', ({ required: true }))} />
                <br />
                <span>Player Name</span>
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}


