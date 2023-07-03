import {Box} from "@mui/material";

function ItemNotFound() {
    return (
        <Box
            p={8}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <h3>No Results</h3>
        </Box>
    )
}

export default ItemNotFound;