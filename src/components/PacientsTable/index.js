import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import PacientModal from '../PacientModal';
import PacientsTablehead from './TableHead';
import PacientsTableRow from './TableRow';
import { usePacients } from '../../hooks/usePacients';

export default function PacientsTable(){

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [pacientToEdit, setPacientToEdit] = useState({});
  const { pacients , deletePacient } = usePacients()
  
  const handleEditOpen = (pacient) => {
    setPacientToEdit(pacient)
    setIsEditModalOpen(true)
  }
    
  return (
      <TableContainer component={Paper} sx={{ maxWidth: 1080 , marginX: 'auto' , marginY: 5}}>
        <Table size="medium">
          <PacientsTablehead />
          <TableBody>
            {pacients.map((pacient) => (
              <PacientsTableRow 
                pacient={pacient} 
                deletePacient={deletePacient} 
                handleEditOpen={() => handleEditOpen(pacient)} 
              />
            ))}

            <PacientModal 
              pacient={pacientToEdit} 
              isOpen={isEditModalOpen}
              handleClose={() => setIsEditModalOpen(false)} 
            />

          </TableBody>
        </Table>
      </TableContainer>
  )
}