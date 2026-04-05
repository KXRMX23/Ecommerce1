import {useFormContext} from 'react-hook-form';
import { Box,FormControl,InputLabel,Select,MenuItem, FormControlLabel, Switch, TextField } from "@mui/material";
<<<<<<< HEAD
import { useEffect, useState } from "react";

const StepTextComponents = ({formConfig,fieldType}) => {
    const {register,formState:{errors},reset} = useFormContext();
    const [textFiels,setTextFiels]=useState(formConfig.data.text);

    useEffect(()=>{
        setTextFiels(formConfig.data.text);
        const defaultValues=formConfig.data.text.reduce((acc,field)=>{
            acc[field.name]=field.default;
            return acc;
        },{});
        reset(defaultValues);
    },[formConfig.data.text])

=======

const StepTextComponents = ({formConfig,fieldType}) => {
    const {register,formState:{errors}} = useFormContext();
    const textFiels=formConfig.data.text;
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f
    return (
        <Box>
            {textFiels.map((field,index)=>(
                <TextField
                fullWidth
                margin="normal"
<<<<<<< HEAD
                required={field.required}
=======
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f
                key={field.name}
                label={field.label}
                error={!!errors[field.name]}
                {...register(field.name,{required:field.required})}
                defaultValue={field.default}
                placeholder={field.placeholder}
                 />
            ))}
        </Box>
    )
}
export default StepTextComponents;