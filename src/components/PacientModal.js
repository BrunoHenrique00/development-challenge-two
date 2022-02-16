import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { Button , Paper, Stack, TextField } from '@mui/material';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { usePacients } from '../hooks/usePacients';

const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '50%',
    bgcolor: 'neutral'
};

const PaperStyle = {
    width: '100%',
    height: '100%',
    padding: 40,
    display: 'flex',
    flexDirection: 'column'
}

export default function PacientModal({ isOpen, handleClose , pacient}){
    const nameRef = useRef()
    const dateRef = useRef()
    const emailRef = useRef()
    const addressRef = useRef()
    const { createPacient , updatePacient } = usePacients()

    function getInputRefs(){
        return {
            name: nameRef.current.value,
            date_birth: dateRef.current.value,
            email: emailRef.current.value,
            address: addressRef.current.value,
            id: emailRef.current.value
        }
    }

    async function handleCreatePacient(){
        try {
            const data = getInputRefs()
            await createPacient(data)
            toast.success('Paciente criado com sucesso!')
            handleClose()
        } catch (error) {
            toast.error(error)
        }
    }
    async function handleEditPacient(){
        try {
            const data = getInputRefs()
            await updatePacient(data)
            toast.success('Paciente criado com sucesso!')
            handleClose()
        } catch (error) {
            toast.error(error)
        }
    }
    
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
        >
            <Box style={ModalStyle}>
               <Paper style={PaperStyle} elevation={2}>
                   <Stack spacing={5}>
                        <TextField
                            label="Nome do paciente"
                            variant="outlined"
                            InputProps={{
                                startAdornment: <PersonIcon position="start" sx={{ marginRight: 2}}/>,
                            }}
                            defaultValue={pacient ? pacient.name : ''}
                            inputRef={nameRef}
                        />
                        <TextField
                            label="Data de nascimento"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            type='date'
                            defaultValue={pacient ? pacient.date_birth : ''}
                            inputRef={dateRef}
                        />
                        <TextField 
                            label="E-mail" 
                            variant="outlined"
                            InputProps={{
                                startAdornment: <EmailIcon position="start" sx={{ marginRight: 2}}/>,
                            }}
                            defaultValue={pacient ? pacient.email : ''}
                            inputRef={emailRef}
                        />
                        <TextField 
                            label="Endereço" 
                            variant="outlined"
                            InputProps={{
                                startAdornment: <MapsHomeWorkIcon position="start" sx={{ marginRight: 2}}/>,
                            }}
                            defaultValue={pacient ? pacient.address : ''}
                            inputRef={addressRef}
                        />
                   </Stack>
                    <Button
                        variant="contained" 
                        size='large'
                        sx={{ 
                            marginTop: 10,
                            width: '50%',
                            marginX: 'auto'
                        }}
                        onClick={pacient ? handleEditPacient : handleCreatePacient}
                        >
                        { pacient ? 'Salvar' : 'Criar'}
                    </Button>
               </Paper>
            </Box>
        </Modal>
    )
}