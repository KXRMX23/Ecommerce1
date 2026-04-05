import {useFormContext} from 'react-hook-form';
import { Box,FormControl,InputLabel,Select,MenuItem, Autocomplete, TextField } from "@mui/material";
import { useEffect } from 'react';

const StepSelectComponents = ({formConfig,fieldType}) => {
    const {register,formState:{errors},setValue,watch} = useFormContext();
    const selectFields=formConfig.data.select;

    useEffect(()=>{
        selectFields.forEach(field=>{
            setValue(field.name,field.default || '')
        
        })
    },[selectFields,setValue])

    return (
        <Box>
            {selectFields.map((field,index)=>(
                <FormControl fullWidth margin="normal" key={field.name}>
<<<<<<< HEAD
=======
                    {/* <InputLabel>{field.label}</InputLabel>
                    <Select 
                    {...register(field.name,{required:field.required})}
                    defaultValue={field.default}
                    error={!!errors[field.name]}
                    label={field.label}>
                            {
                                field.options.map((option,index)=>
                                    <MenuItem key={option.id} value={option.id}>{option.value}</MenuItem>
                                )
                            }
                    </Select> */}
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f
                    <Autocomplete   
                        {...register(field.name,{required:field.required})}
                        options={field.options}
                         getOptionLabel={(option)=>option.value}
<<<<<<< HEAD
                         defaultValue={field.options.find(option=>option.id===watch(field.name)) || field.options.find(option=>option.id===field.default) || null}
=======
                         defaultValue={field.options.find(option=>option.id===watch(field.name)) || null}
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f
                         onChange={(event,newValue)=>{
                            setValue(field.name,newValue?newValue.id:'')
                         }}
                         renderInput={(params)=>(
                            <TextField
                            {...params}
                            label={field.label}
                            variant='outlined'
                            error={!!errors[field.name]}
                            helperText={!!errors[field.name] && 'This Field is Required'}
                            />
            )}
                        />
                </FormControl>
            ))}
        </Box>
    )
}
export default StepSelectComponents;