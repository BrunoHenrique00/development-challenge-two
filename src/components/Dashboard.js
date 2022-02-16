import { useState } from 'react';
import PacientModal from './PacientModal';
import PacientsTable from './PacientsTable/';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';


export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box sx={{ 
                margin: 'auto', 
                maxWidth: '60%',
                display: 'flex',
                justifyContent: 'end',
                marginTop: 5,
                paddingRight: 10
            }}
            >
                <PacientModal
                isOpen={open}
                handleClose={handleClose} 
                />
                <Button 
                variant='outlined'
                color='neutral'
                startIcon={<AddIcon />}
                onClick={() => handleOpen()}
                >
                Adicionar paciente
                </Button>
            </Box>
            <PacientsTable />
          </>
    )
}