import React from 'react';
import { useForm } from 'react-hook-form';
import './index.css';

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Данные формы отправляются после успешной валидации
        console.log(data);
    }

    return (
        <div className="registration-form-container">
            <h1>Форма регистрации</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>ФИО</label>
                <input {...register('fio', { required: true })} />
                {errors.fio && <span className="error-message">Поле ФИО обязательно для заполнения</span>}

                <label>Имя</label>
                <input {...register('name', { required: true })} />
                {errors.name && <span className="error-message">Поле Имя обязательно для заполнения</span>}

                <label>Год рождения</label>
                <input type="number" {...register('birthYear', { required: true, min: 1900, max: new Date().getFullYear() })} />
                {errors.birthYear && <span className="error-message">Год рождения должен быть валидным числом от 1900 до текущего года</span>}

                <label>Пол</label>
                <select {...register('gender', { required: true })}>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                    <option value="other">Другой</option>
                </select>
                {errors.gender && <span className="error-message">Поле Пол обязательно для заполнения</span>}

                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
