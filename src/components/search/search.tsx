import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchCurrencies } from "../../features/currencies/currenciesSlice";
import React from "react";
import {AppDispatch, RootState} from "../../app/store";

function Search() {
    const { searchValue } = useSelector((state: RootState) => state.currency);
    const dispatch = useDispatch<AppDispatch>();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(searchCurrencies(event.target.value));
    }

    return (
        <Container sx={{ mt: 4, mb: 2 }}>
            <TextField
                id="search"
                type="search"
                label="Search"
                variant="outlined"
                value={searchValue}
                width="100%"
                color="secondary"
                onChange={handleChange}
                autoComplete="off"
                inputProps={{
                    autoComplete: "off",
                    form: {
                        autoComplete: "off",
                    },
                }}
                sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "lightgrey",
                            borderRadius: "8px",
                        },
                    },
                }}
                InputLabelProps={{
                    style: { color: "lightgrey" },
                }}
                InputProps={{
                    style: {
                        color: "lightgrey",
                        // @ts-ignore
                        "&::placeholder": {
                            color: "lightgrey",
                        },
                    },
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon style={{ color: "lightgrey" }} />
                        </InputAdornment>
                    ),
                }}
            />
        </Container>
    );
}

export default Search;
