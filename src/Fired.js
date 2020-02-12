import React from 'react';

const Fired = () => {
    return (
      <form className="font-weight-normal">
        <label>
          Уволен
          <input
            className="ml-2"
            name="isGoing"
            type="checkbox"
            />
        </label>
      </form>
    );
}

export default Fired;
