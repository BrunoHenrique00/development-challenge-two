import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';


export default function Header(){
    return (
        <AppBar position="static" >
          <Toolbar sx={{ width: '60%' , height: 80 ,display: 'flex' , margin: 'auto'}} >
            <Box>
              <img src="medcloud-white.svg" alt="logo" height='40' />
            </Box>
          </Toolbar>
        </AppBar>
    )
}