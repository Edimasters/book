import React from 'react';

const Sex = () => {
  return (
    <div className='Sex font-weight-normal'>
    <label className='mr-2'>
    <input
        type="radio"
        name="gender"
        value="male"
    /> Мужской
</label>
<label>
    <input
        type="radio"
        name="gender"
        value="female"
    /> Женский
</label>
</div>
  )
};

export default Sex;
