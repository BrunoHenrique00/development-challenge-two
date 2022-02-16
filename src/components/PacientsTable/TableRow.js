import { Button, TableCell, TableRow } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "react-toastify";


export default function Tablerow({ pacient , handleEditOpen , deletePacient}){

    const handleDelete = async (id) => {
        await deletePacient(id)
        toast.success('Excluido com sucesso!')
    }

    function getDate(date){
        let newDate = new Date(date)
        newDate.setDate(newDate.getDate() + 1)
        return newDate.toLocaleDateString('pt-BR',{
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }
    return(
        <TableRow
        key={pacient.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 }, paddingTop: 20 }}
        >
            <TableCell component="th" scope="row">
                {pacient.name}
            </TableCell>
            <TableCell align="right">
                {
                    getDate(pacient.date_birth)
                }
            </TableCell>
            <TableCell align="right">{pacient.email}</TableCell>
            <TableCell align="right">{pacient.address}</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell >
                <Button 
                    variant='contained' 
                    color='secondary'
                    onClick={() => handleEditOpen(pacient)}
                >
                Editar
                </Button>
            </TableCell>
            <TableCell >
                <Button 
                variant='contained' 
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete(pacient.id)}
                color='error'
                >
                Excluir
                </Button>
            </TableCell>
        </TableRow>
    )
}