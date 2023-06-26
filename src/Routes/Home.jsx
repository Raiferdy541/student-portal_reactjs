import {useNavigate} from 'react-router-dom'
import { Button, Box,Image } from '@chakra-ui/react'
import Footer from '../components/Footer';


const Home = () => {
    const navigate = useNavigate()
    
    const buttonHandler = () => {
        navigate('/student')
    }

    return (
        <>
            
            <Box display="flex" alignItems="center" justifyContent="center" backgroundColor='teal' color='white'>
                <Button data-testid='student-btn' onClick={buttonHandler} colorScheme='teal' variant='solid'>All Student</Button>
            </Box>
            <Image objectFit='cover' src='https://miro.medium.com/max/1920/1*o0VuX9hnhzzmoAM4mrnmXA.jpeg' alt='bg-studentportal' />
            <Footer />
        </>

    ) // TODO: replace this
};

export default Home;
