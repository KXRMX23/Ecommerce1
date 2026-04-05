import {useFormContext} from 'react-hook-form';
import { Box,Divider,Icon,TextField } from "@mui/material";
import { Delete } from '@mui/icons-material';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import { useState } from 'react';
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f
import AddIcon from '@mui/icons-material/Add';
import { Button, IconButton } from '@mui/material';

const JsonInputComponent =({fields})=>{
    const {register} = useFormContext();
<<<<<<< HEAD
    const [keyValuePairs,setKeyValuePairs]=useState([]);
=======
    const [keyValuePairs,setKeyValuePairs]=useState([{key:'',value:''}]);
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f
    const handleKeyValueRemove=(index)=>{
        const newPairs=keyValuePairs.filter((_,i)=>i!==index);
        setKeyValuePairs(newPairs);
    }
<<<<<<< HEAD

    useEffect(()=>{
        if(fields.default){
            setKeyValuePairs([...keyValuePairs,...fields.default]);
        }
        else{
            setKeyValuePairs([{key:'',value:''}])
        }
    },[])

=======
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f
    const handleKeyValueAdd=()=>{
        setKeyValuePairs([...keyValuePairs,{key:'',value:''}])
    }
    return(
        <Box mb={2}>
            <label>{fields.label}</label>
            <Divider sx={{marginBottom:'15px',marginTop:'10px'}}/>
            {
                keyValuePairs.map((pair,index)=>(
                    <Box key={index} display="flex" alignItems="center" mb={2}>
                        <TextField
                        fullWidth
                        margin="normal"
<<<<<<< HEAD
                        sx={{ml:1,mr:1}}
=======
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f
                        key={fields.name}
                        label="Key"
                        {...register(`${fields.name}[${index}].key`)}
                        defaultValue={pair.key}
                        placeholder="Key"
                        />
                        <TextField
                        fullWidth
                        margin="normal"
<<<<<<< HEAD
                        sx={{ml:1,mr:1}}
=======
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f
                        key={fields.name}
                        label="Value"
                        {...register(`${fields.name}[${index}].value`)}
                        defaultValue={pair.value}
                        placeholder="Value"
                        />
                        <IconButton   onClick={()=>handleKeyValueRemove(index)} variant={"outlined"} color={"secondary"}>
                            <Delete/>
                        </IconButton>
                    </Box>
                ))
            }
            <Button variant={"outlined"} color={"primary"} onClick={handleKeyValueAdd}><AddIcon/> Add</Button>
            <Divider sx={{marginBottom:'10px',marginTop:'10px'}}/>
        </Box>

    )
}
export default JsonInputComponent;