import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { API } from "./api";
export default function App(){
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get(`${API}/students`);
    setStudents(res.data);
  };

  useEffect(()=>{
    fetchStudents();
  }, [])
  return <>
  <h2 className="text-center text-primary fw-bold">Student Management</h2>
  <StudentForm refresh={fetchStudents} />
  <StudentList students={students} refresh={fetchStudents} />
  </>
}