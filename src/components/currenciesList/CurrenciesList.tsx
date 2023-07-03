import {useDispatch, useSelector} from "react-redux";
import {ICurrency} from "../../models/currency";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Container, Pagination} from "@mui/material";
import CurrencyItem from "../currencyItem/currencyItem";
import {ChangeEvent, useEffect, useState} from "react";
import {changePage} from "../../features/currencies/currenciesSlice";
import {AppDispatch, RootState} from "../../app/store";

function CurrenciesList() {
    const {searchedCurrencies, page} = useSelector((state: RootState) => state.currency);
    const [currentItems, setCurrentItems] = useState<ICurrency[]>([])
    const dispatch = useDispatch<AppDispatch>();
    const itemsPerPage = 5;

    const handleChangePage = (event:ChangeEvent<unknown>, newPage: number) => {
        dispatch(changePage(newPage));
    };

    useEffect(() => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, searchedCurrencies.length);
        setCurrentItems(searchedCurrencies.slice(startIndex, endIndex));
    }, [page, searchedCurrencies]);


    return (
        <Container>
            <List sx={{maxWidth: '100%'}}>
                <ListItem disablePadding>
                    <ListItemText primary="List of Currencies"/>
                </ListItem>
                {currentItems?.map((currency: ICurrency) =>
                        <CurrencyItem currency={currency} key={currency.id}/>
                )}
            </List>
            <Pagination
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    '& .MuiPaginationItem-root': {
                        color: 'white',
                    },
                    '& .Mui-selected': {
                        color: 'black',
                        fontWeight: 'bold',
                    },
                }}
                count={Math.ceil(searchedCurrencies.length / itemsPerPage)}
                page={page}
                onChange={handleChangePage}
                color="secondary"
            />
            <br/>
        </Container>
    )
}

export default CurrenciesList
