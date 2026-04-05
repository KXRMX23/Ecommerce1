import {useFormContext} from 'react-hook-form';
import { Box,FormControl,InputLabel,Select,MenuItem, FormControlLabel, Switch, TextField } from "@mui/material";

const StepTextAreaComponents = ({formConfig,fieldType}) => {
    const {register,formState:{errors}} = useFormContext();
    const textAreaFields=formConfig.data.textarea;
    return (
        <Box>
            {textAreaFields.map((field,index)=>(
                <TextField
                fullWidth
                margin="normal"
                key={field.name}
<<<<<<< HEAD
                required={field.required}
=======
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f
                error={!!errors[field.name]}
                label={field.label}
                {...register(field.name,{required:field.required})}
                defaultValue={field.default}
                rows={4}
                multiline
                placeholder={field.placeholder}
                 />
            ))}
        </Box>
    )
}
export default StepTextAreaComponents;