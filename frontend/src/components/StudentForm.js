import axios from 'axios';
import { useState } from 'react';
import { API } from '../api';

export default function StudentForm({ refresh }) {
  const [student, setStudent] = useState({ name: "", email: "", age: "" });

  const submit = async (e) => {
    e.preventDefault();   // important
    await axios.post(`${API}/students`, student);
    refresh();
  };

  return (
    <form className='form' onSubmit={submit}>
      <label className='form-label'>Name: </label>
      <input className='form-control' placeholder="Name"
        onChange={e => setStudent({ ...student, name: e.target.value })} />

      <br/><br/>

      <label className='form-label'>Email: </label>
      <input className='form-control' placeholder="Email"
        onChange={e => setStudent({ ...student, email: e.target.value })} />

      <br/><br/>

      <label className='form-label'>Age: </label>
      <input className='form-control' placeholder="Age"
        onChange={e => setStudent({ ...student, age: e.target.value })} />

      <br/><br/>

      <button type="submit" className="btn btn-success">Add</button>
    </form>
  );
}
