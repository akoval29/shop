import TextField from '@mui/material/TextField';

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField 
        variant="standard"
        label="search"
        type='search' 
        value={value} 
        onChange={onChange}
        fullWidth 
        sx={{
            mb:'2rem'
        }}
    />;
    
};

export default Search;