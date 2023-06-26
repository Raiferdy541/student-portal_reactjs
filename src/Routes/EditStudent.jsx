import {useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {Input,Button,Select,Box} from '@chakra-ui/react'
import Footer from '../components/Footer';


const EditStudent = () => {
    let {id} = useParams()
    const [student,setStudent] = useState({})
    const [fullname,setFullname] = useState(student.name)
    const [birthDate,setBirthDate] = useState(student.birthDate)
    const [gender,setGender] = useState(student.gender)
    const [programStudy,setProgramStudy] = useState(student.programStudy)
    const [phoneNumber,setPhoneNumber] = useState(student.phoneNumber)
    const [address,setAddress] = useState(student.address)
    const [loading,setLoading] = useState(true)

    const navigate = useNavigate()
    
    useEffect(() => {
        fetchingDataGet()
    },[])

    const fetchingDataGet = async () => {
        const data = await fetch(`http://localhost:3001/student/${id}`)
        const hasil = await data.json()
        setStudent(hasil)
        console.log(student)
        setLoading(false)
    }

    const handleSubmit = () => {
        
        const fetchingDataPut = async () => {
            const editStudent = {
                fullname,
                address,
                birthDate,
                gender,
                phoneNumber,
                faculty: handleFaculty(programStudy),
                programStudy,
            }
            
            const data = await fetch(`http://localhost:3001/student/${id}`, {
                body: JSON.stringify(editStudent),
                headers: {'Content-Type': 'application/json'},
                method: 'PUT'
            })
            const hasil = await data.json()
            setStudent(hasil)
            handleNavigate()
        }
        fetchingDataPut()
    }

    function handleFaculty(programStudy){
        if(programStudy == 'Ekonomi' || programStudy == 'Manajemen' || programStudy == 'Akuntansi'){
            return "Fakultas Ekonomi";
        }
        else if(programStudy == 'Administrasi Publik' || programStudy == 'Administrasi Bisnis' || programStudy == 'Hubungan Internasional'){
            return 'Fakultas Ilmu Sosial dan Politik'
        }
        else if(programStudy == 'Teknik Sipil' || programStudy == 'Arsitektur'){
            return 'Fakultas Teknik'
        }
        else if(programStudy == 'Matematika' || programStudy == 'Fisika' || programStudy == 'Informatika'){
            return 'Fakultas Teknologi Informasi dan Sains'
        }

    }

    function handleNavigate() {
        navigate('/student')
    }

    if (loading) {
        return (
            <>
                <p>Loading ...</p>
                <Footer />
            </>
        )
    }

    return (
        <>
                <div style= {{display: 'flex' , justifyContent:'center', alignItems:'center'}}>
                    <form id="form-student" onSubmit={handleSubmit}>
                        <h2>Student dengan id: {id}</h2>
                        <Box display="flex" alignItems="center" justifyContent="center" backgroundColor='teal' color='white'>
                            <img src={student.profilePicture} />
                        </Box>
                        <br />
                        <label forHtml="input-name" >Fullname</label>   
                            <Input style={{margin: "10px"}} type="text" id="input-name" data-testid="name" onChange={(e) => setFullname(e.target.value)} placeholder={student.fullname} />
                        <br />
                        <label forHtml="input-date">Birth Date</label>
                            <Input type="date" style={{margin: "10px"}} id="input-date" data-testid="date" onChange={(e) => setBirthDate(e.target.value)} required placeholder={student.birthDate}/>
                        <br/>
                        <label forHtml="input-phoneNumber" >Phone Number</label>   
                            <Input type="text" style={{margin: "10px"}} id="input-phoneNumber" data-testid="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} placeholder={student.phoneNumber} />
                        <br/>
                        <label forHtml="input-address" >Address</label>   
                            <Input type="text" style={{margin: "10px"}} id="input-address" data-testid="address" onChange={(e) => setAddress(e.target.value)} placeholder={student.address}/>
                        <br/>
                        <label forHtml="input-gender">Gender</label>    
                            <Select value={gender} style={{margin: "10px"}} id="input-gender" data-testid="gender" onChange={(e) => setGender(e.target.value)} required placeholder={student.gender}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Select>
                        <br/>
                        <label forHtml="input-prody">Program Study</label>    
                            <Select value={programStudy} style={{margin: "10px"}} id="input-prody" data-testid="prody" onChange={(e) => setProgramStudy(e.target.value)} defaultValue={student.programStudy} required placeholder={student.programStudy}>
                                <option value="Ekonomi">Ekonomi</option>
                                <option value="Manajemen">Manajemen</option>
                                <option value="Akuntansi">Akuntansi</option>
                                <option value="Administrasi Publik">Administrasi Publik</option>
                                <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                                <option value="Hubungan Internasional">Hubungan Internasional</option>
                                <option value="Teknik Sipil">Teknik Sipil</option>
                                <option value="Arsitektur">Arsitektur</option>
                                <option value="Matematika">Matematika</option>
                                <option value="Fisika">Fisika</option>
                                <option value="Informatika">Informatika</option>
                            </Select>
                        <br/>          
                        <Button colorScheme='teal' type="submit" style={{margin: "10px"}} value="submit" id="add-btn" data-testid="edit-btn" >submit</Button>

                    </form>
                </div>
                <Footer />
        </>
    );
};

export default EditStudent;
