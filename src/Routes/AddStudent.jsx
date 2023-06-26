
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Input,Button,Select,Text} from '@chakra-ui/react'
import Footer from '../components/Footer';



const AddStudent = () => {
    const [fullname,setFullname] = useState('')
    const [birthDate,setBirthDate] = useState('')
    const [gender,setGender] = useState('')
    const [programStudy,setProgramStudy] = useState('')
    const [profilePicture,setProfilePicture] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [address,setAddress] = useState('')
    
    const navigate = useNavigate()

    function handleSubmit () {

        console.log(fullname,birthDate,gender,programStudy)
        const tambahStudent = {
            fullname,
            profilePicture,
            address,
            birthDate,
            gender,
            phoneNumber,
            faculty: handleFaculty(programStudy),
            programStudy,
        }

        const addingStudent = async () => {

            await fetch('http://localhost:3001/student',{
                method: 'POST',
                body : JSON.stringify(tambahStudent),
                headers: {'Content-Type': 'application/json'}
            })
                .then((resp) => resp.json())
                .then((hasil) => {
                    setFullname("");
                    setBirthDate("");
                    setGender("");
                    setProgramStudy("");
                    handleNavigate()
                })
                .catch((err) => {
                    console.log(err)})
            console.log(tambahStudent)
        }
        addingStudent()

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



    return (
        <>
            <div style={{display: 'flex' , justifyContent:'center', alignItems:'center',padding:'20px'}}>
                <form  onSubmit={handleSubmit} id="form-student">
                    <Text fontSize='lg' as='b' style={{padding: "10px"}} >Entry your data :</Text>
                    <br/>
                    <label forHtml="input-name" >Fullname</label>   
                        <Input style={{margin: "10px"}} type="text" id="input-name" data-testid="name" onChange={(e) => setFullname(e.target.value)} />
                    <br />
                    <label forHtml="input-date">Birth Date</label>
                        <Input type="date" style={{margin: "10px"}} id="input-date" data-testid="date" onChange={(e) => setBirthDate(e.target.value)} required/>
                    <br/>
                    <label forHtml="input-phoneNumber" >Phone Number</label>   
                        <Input type="text" style={{margin: "10px"}} id="input-phoneNumber" data-testid="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} />
                    <br/>
                    <label forHtml="input-address" >Address</label>   
                        <Input type="text" style={{margin: "10px"}} id="input-address" data-testid="address" onChange={(e) => setAddress(e.target.value)} />
                    <br/>
                    <label forHtml="input-gender">Gender</label>    
                        <Select value={gender} id="input-gender" data-testid="gender" onChange={(e) => setGender(e.target.value)} required>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Select>
                    <br/>
                    <label forHtml="input-profilePicture">Profile Picture</label>   
                        <Input type="text" style={{margin: "10px"}} id="input-profilePicture" data-testid="profilePicture" onChange={(e) => setProfilePicture(e.target.value)} />
                        <br/>
                    <label forHtml="input-prody">Program Study</label>    
                        <Select value={programStudy} id="input-prody" data-testid="prody" onChange={(e) => setProgramStudy(e.target.value)} required>
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
                    <Button colorScheme='teal' type="submit" style={{margin: "10px"}} value="submit" id="add-btn" data-testid="add-btn" >submit</Button>
                </form>
                
            </div>
            <Footer />
        </>
        
    );
};

export default AddStudent;
