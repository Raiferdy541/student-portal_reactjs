// Raihan Ferdyanza FE5235894
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer';
import {
    Select,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button
} from '@chakra-ui/react';

const Student = () => {
    const [loading,setLoading] = useState(true)
    const [students,setStudents] = useState([])
    const [filter,setFilter] = useState('All')

    useEffect(() => {

        fetchingStudents()
    })

    const fetchingStudents =  async ()  => {
        try {
            const data = await fetch('http://localhost:3001/student')
            const hasil = await data.json()
            setStudents(hasil)
            setLoading(false)
        } catch(error) {
            console.log(error)
        }

    }

    async function handleDelete (id){
        await fetch(`http://localhost:3001/student/${id}`, {
            method: 'DELETE',
        })
        fetchingStudents()
    }


    if (loading) {
        return (
            <>
                <p>Loading ...</p>
                < Footer />
            </>

        )
    }

    return (
        <div >

            {
                <>
                <Select data-testid='filter' value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value='All'>All</option>
                    <option value='Fakultas Ekonomi'>Fakultas Ekonomi</option>
                    <option value='Fakultas Ilmu Sosial dan Politik'>Fakultas Ilmu Sosial dan Politik</option>
                    <option value='Fakultas Teknik'>Fakultas Teknik</option>
                    <option value='Fakultas Teknologi Informasi dan Sains'>Fakultas Teknologi Informasi dan Sains</option>
                </Select>

                <TableContainer>              
                    <Table id="table-student" border="2">
                        <TableCaption>Data Students</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>Full Name</Th>
                                <Th>BirTh Date</Th>
                                <Th>Gender</Th>
                                <Th>Faculty</Th>
                                <Th>Program Study</Th>
                                <Th>Option</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {filter == 'All' && students.map((student) => (
                                <Tr key={student.id} className="student-data-row">
                                    <Td>{student.id}</Td>    
                                    <Td><Link style={{color: 'black'}} to={`/student/${student.id}`}><Button>{student.fullname}</Button></Link></Td>
                                    <Td>{student.birthDate}</Td>
                                    <Td>{student.gender}</Td>
                                    <Td>{student.faculty}</Td>
                                    <Td>{student.programStudy}</Td>
                                    <Td><Button data-testid={`delete-${student.id}`} onClick={() => handleDelete(student.id)}>Delete Student</Button></Td>
                                </Tr>
                            )) }
                            {filter == 'Fakultas Ekonomi' && students.map((student) => {
                                if (student.faculty == 'Fakultas Ekonomi'){
                                    return (
                                        <Tr key={student.id} className="student-data-row">
                                        <Td>{student.id}</Td>    
                                        <Td><Link style={{color: 'black'}} to={`/student/${student.id}`}><Button>{student.fullname}</Button></Link></Td>
                                        <Td>{student.birthDate}</Td>
                                        <Td>{student.gender}</Td>
                                        <Td>{student.faculty}</Td>
                                        <Td>{student.programStudy}</Td>
                                        <Td><Button data-testid={`delete-${student.id}`} onClick={() => handleDelete(student.id)}>Delete Student</Button></Td>
                                    </Tr>
                                    )
                                }
                            }) }
                            {filter == 'Fakultas Ilmu Sosial dan Politik' && students.map((student) => {
                                if (student.faculty == 'Fakultas Ilmu Sosial dan Politik'){
                                    return (
                                        <Tr key={student.id} className="student-data-row">
                                        <Td>{student.id}</Td>    
                                        <Td><Link style={{color: 'black'}} to={`/student/${student.id}`}><Button>{student.fullname}</Button></Link></Td>
                                        <Td>{student.birthDate}</Td>
                                        <Td>{student.gender}</Td>
                                        <Td>{student.faculty}</Td>
                                        <Td>{student.programStudy}</Td>
                                        <Td><Button data-testid={`delete-${student.id}`} onClick={() => handleDelete(student.id)}>Delete Student</Button></Td>
                                    </Tr>
                                    )
                                }
                            }) }
                            {filter == 'Fakultas Teknik' && students.map((student) => {
                                if (student.faculty == 'Fakultas Teknik'){
                                    return (
                                        <Tr key={student.id} className="student-data-row">
                                        <Td>{student.id}</Td>    
                                        <Td><Link style={{color: 'black'}} to={`/student/${student.id}`}><Button>{student.fullname}</Button></Link></Td>
                                        <Td>{student.birthDate}</Td>
                                        <Td>{student.gender}</Td>
                                        <Td>{student.faculty}</Td>
                                        <Td>{student.programStudy}</Td>
                                        <Td><Button data-testid={`delete-${student.id}`} onClick={() => handleDelete(student.id)}>Delete Student</Button></Td>
                                    </Tr>
                                    )
                                }
                            }) }
                            {filter == 'Fakultas Teknologi Informasi dan Sains' && students.map((student) => {
                                if (student.faculty == 'Fakultas Teknologi Informasi dan Sains'){
                                    return (
                                        <Tr key={student.id} className="student-data-row">
                                            <Td>{student.id}</Td>    
                                            <Td><Link style={{color: 'black'}} to={`/student/${student.id}`}><Button>{student.fullname}</Button></Link></Td>
                                            <Td>{student.birthDate}</Td>
                                            <Td>{student.gender}</Td>
                                            <Td>{student.faculty}</Td>
                                            <Td>{student.programStudy}</Td>
                                            <Td><Button data-testid={`delete-${student.id}`} onClick={() => handleDelete(student.id)}>Delete Student</Button></Td>
                                        </Tr>
                                    )
                                }
                            }) }                         
                        </Tbody>
                        <Tfoot>
                        </Tfoot>
                    </Table>
                </TableContainer>  
                </>
        }
            <Footer/>
            
        </div>
    );
};

export default Student;
