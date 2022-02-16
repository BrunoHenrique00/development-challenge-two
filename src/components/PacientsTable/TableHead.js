import { TableCell, TableHead, TableRow, Typography } from "@mui/material";

export default function Tablehead(){
    return(
        <TableHead>
            <TableRow>
                <TableCell>
                    <Typography sx={{ fontWeight: 'bold'}}>Paciente</Typography>
                </TableCell>
                <TableCell align="right" >
                    <Typography sx={{ fontWeight: 'bold'}}>Data de nascimento</Typography>
                </TableCell>
                <TableCell align="right" >
                    <Typography sx={{ fontWeight: 'bold'}}>E-mail</Typography>
                </TableCell>
                <TableCell align="right">
                    <Typography sx={{ fontWeight: 'bold'}}>Endereço</Typography>
                </TableCell>
                <TableCell align='right'></TableCell>
                <TableCell align='right'></TableCell>
                <TableCell align='right'></TableCell>
            </TableRow>
        </TableHead>
    )
}