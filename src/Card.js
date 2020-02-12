import React from 'react';
import Positions from './Positions';
import BirthDate from './BirthDate';
import Sex from './Sex';
import Fired from './Fired';
import Name from './Name';

const Card = ({name, position, date, sex, fired}) => {
  return (

    <div className="Card font-weight-bold p-5 m-2">

        <div className="item name text-center m-2">ФИО<br/><Name /></div>
        <div className=" item position text-center m-2">Должность<br/><Positions /></div>
        <div className="item date text-center m-2">Дата Рождения<br/><BirthDate /></div>
        <div className="item sex text-center m-2">Пол<br/><Sex /></div>
        <div className="item fired text-center m-2">Увольнение<br/><Fired /></div>

    </div>
  );
}

export default Card;
