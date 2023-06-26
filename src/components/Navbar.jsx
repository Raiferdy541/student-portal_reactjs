import {Box,Link} from '@chakra-ui/react'
import { BrowserRouter as Router,NavLink as RouterLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" backgroundColor='teal' color='white'>
            <Link as={RouterLink} to='/' style={{padding: "5px"}}  data-testid="home-page">Student Portal</Link>
            <Link as={RouterLink} to='/student' style={{padding: "5px"}}  data-testid="student-page">All Student</Link>
            <Link as={RouterLink} to='/add' style={{padding: "5px"}}  data-testid="add-page">Add Student</Link>
        </Box>
    );
};

export default NavBar;
