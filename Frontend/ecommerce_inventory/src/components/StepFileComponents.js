import {useFormContext} from 'react-hook-form';
import { Box,FormControl,InputLabel,Select,MenuItem, FormControlLabel, Switch, TextField,Alert } from "@mui/material";
<<<<<<< HEAD
import FileInputComponent from './FileInputComponents';

const StepFileComponents = ({formConfig }) => {
    return (
        <Box>
            {formConfig?.data?.file?.map((field,index)=>(
                <FileInputComponent field={field} key={index} />
=======

const StepFileComponents = ({formConfig,fieldType}) => {
    const {register,formState:{errors}} = useFormContext();
    const fileFields=formConfig.data.file;
    return (
        <Box>
            {fileFields.map((field,index)=>(
                <>
                <Box component={"div"} className='fileInput'>
                    <label>{field.label}</label>
                    <input type='file' {...register(field.name,{required:field.required})} />
                 </Box>
                    {
                    !!errors[field.name] && <Alert variant="outlined" severity='error'>
                        This Field is Required  
                    </Alert>
                  }
                </>
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f
            ))}
        </Box>
    )
}
export default StepFileComponents;