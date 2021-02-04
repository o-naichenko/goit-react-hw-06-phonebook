import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Filter.module.css';
import contactsActions from '../../redux/contacts/contacts-actions';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.value);
  return (
    <label className={s.label}>
      <span>Find contacts by name</span>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        placeholder="Type name here"
        onChange={e => {
          dispatch(contactsActions.changeFilter(e.target.value));
          console.log(e.target.value);
        }}
      ></input>
    </label>
  );
};

export default Filter;
