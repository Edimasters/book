import React from 'react';

const Positions = () => {

    return (
      <form>
        <label>
          <select className="form-control-md">
            <option hidden disabled selected value>Выберите</option>
            <option value="Director">Директор</option>
            <option value="Accountant">Бухгалтер</option>
            <option value="Logist">Логист</option>
            <option value="Seller">Продавец</option>
            <option value="Loader">Грузчик</option>
          </select>
        </label>
      </form>
    );
}

export default Positions;
