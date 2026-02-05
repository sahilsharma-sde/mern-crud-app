import axios from 'axios';
export default function StudentList({ students, refresh }){
    const del = async(id)=>{
        await axios.delete(`http://localhost:5000/students/${id}`);
        refresh();
    }

    return <>
    {students.map(s => (
        <div key={s._id} className='container'>
            {s.name} ({s.age})
            <button className="btn btn-danger" onClick={()=>del(s._id)}>Delete</button>
        </div>
    ))}
    </>
}