import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const PacientsContext = createContext([])

export function PacientsProvider({ children }) {
    const [ pacients, setPacients] = useState([])
    
    useEffect(() => {
        api.get('pacients')
        .then(response => setPacients(response.data.Items))
    },[])

    async function createPacient(pacientData){
        try {
            await api.post('/pacients' , pacientData)
            setPacients([...pacients , pacientData])
        } catch (error) {
            console.log(error)
        }
    }

    async function updatePacient(pacientData){
        try {
            await api.put('/pacients' , pacientData)
            const updatedPacients = [...pacients]
            const index = updatedPacients.findIndex( pacient => pacient.id === pacientData.id)
            updatedPacients[index] = pacientData
            setPacients(updatedPacients)
        } catch (error) {
            console.log(error)
        }
    }

    async function deletePacient(id){
        try {
            await api.delete('/pacients' , { 
                data: {
                    id
                }
             })
            setPacients(pacients.filter(pacient => pacient.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PacientsContext.Provider value={{ pacients , setPacients ,createPacient , deletePacient, updatePacient}}>
            {children}
        </PacientsContext.Provider>
    )
}

export function usePacients() {
    const context = useContext(PacientsContext)
    return context
}