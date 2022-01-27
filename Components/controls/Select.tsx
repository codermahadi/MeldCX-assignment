import React, {ChangeEventHandler} from 'react';

type InputProps = {
    label: string, name: string, id: string, value: string, handleChange: ChangeEventHandler<HTMLInputElement>
}
const Select = ({label, name, id, value, handleChange}: InputProps) => {
    return (
        <p>HHH</p>
        // <FormControl variant="outlined" fullWidth margin="normal">
        //     <InputLabel id={id}>{label}</InputLabel>
        //     <MUISelect
        //         required
        //         labelId="deo-simple-select-outlined-label"
        //         id={id}
        //         value={value}
        //         name={name}
        //         onChange={() => handleChange}
        //         label={label}
        //     >
        //         {options.map((item, i) =>
        //             <MenuItem value={item.value} key={i}>
        //                 <em>{item.label}</em>
        //             </MenuItem>
        //         )}
        //     </MUISelect>
        // </FormControl>
    )
}

export default Select;
