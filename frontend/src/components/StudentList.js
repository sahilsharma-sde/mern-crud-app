import axios from 'axios';
import { API } from '../api';
export default function StudentList({ students, refresh }) {

  const del = async (id) => {
    try {
      await axios.delete(`${API}/students/${id}`);
      refresh();
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Unable to delete student");
    }
  };

  return (
    <>
      {students.map(s => (
        <div key={s._id} className='container'>
          {s.name} ({s.age})
          <button className="btn btn-danger" onClick={() => del(s._id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
