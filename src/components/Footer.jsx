import {Box} from '@chakra-ui/react'

const Footer = () => {
    return (
            <Box className="footer" display="flex" alignItems="center" justifyContent="center"  backgroundColor='teal' position="fixed" bottom="0" left="0" width="100%" color='white'>
                <p className="studentName">Raihan Ferdyanza</p>
                -
                <p className="studentId">FE5235894</p>
            </Box>        
    );
};

export default Footer;
