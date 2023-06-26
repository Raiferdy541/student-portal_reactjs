import {useNavigate} from 'react-router-dom'
import {Button} from '@chakra-ui/react'

const NotFound = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1)
    }
    return (
        <>
            <div style={{textAlign:'center'}}>
                <h1>404 | Not Found</h1>
                <Button onSubmit={handleNavigate}>Back to Previous Page</Button>
            </div>
        </>
    );
};

export default NotFound;
