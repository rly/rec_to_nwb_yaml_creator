import React from 'react';
import PropTypes from 'prop-types';

/**
 *  Encapsulates buttons for updating an array entry for the formData
 *
 * @param {Object} prop Custom element's properties
 *
 * @returns Virtual DOM for updating an array entry of the resultant YML File
 */
const ArrayUpdateMenu = (prop) => {
  const { itemsKey, items, addArrayItem, removeArrayItem } = prop;

  const add = () => {
    addArrayItem(itemsKey);
  };

  const remove = () => {
    removeArrayItem(itemsKey);
  };

  return (
    <div className="array-update-area">
      <button type="button" title={`Add ${itemsKey}`} onClick={add}>
        <span className="bold">&#65291;</span>
      </button>
      <button
        type="button"
        className={`${items === 0 ? 'hide' : ''}`}
        title={`Remove ${itemsKey}`}
        onClick={remove}
      >
        <span className="bold">&#65293;</span>
      </button>
    </div>
  );
};

ArrayUpdateMenu.propType = {
  addArrayItem: PropTypes.func,
  removeArrayItem: PropTypes.func,
  items: PropTypes.instanceOf(Array),
  itemsKey: PropTypes.string,
};

export default ArrayUpdateMenu;
