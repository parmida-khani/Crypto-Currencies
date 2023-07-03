import Search from "../../components/search/search"
import {Box, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {showAllCurrencies} from "../../features/currencies/currenciesAction";
import {AppDispatch, RootState} from "../../app/store";
import Loading from "../../components/loading/loading";
import ItemNotFound from "../../components/itemNotFound/itemNotFound";
import CurrenciesList from "../../components/currenciesList/CurrenciesList";
import HomeImage from "../../components/homeImage/homeImage";

function Home() {
    const {
        currenciesData,
        searchedCurrencies,
        loading,
        error,
        message
    } = useSelector((state: RootState) => state.currency);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (currenciesData.length === 0)
            dispatch(showAllCurrencies());
    }, []);

    useEffect(() => {
        if (error) {
            console.log(message);
        }
    }, [error, message]);

    return (
        <Box>
            {loading ? <Loading/> :
                <Box>
                    {<HomeImage/>}
                    <Grid container justifyContent={'center'}>
                        <Box sx={{width: {xs: '100%', md: '50%'}}}>
                            {<Search/>}
                            {searchedCurrencies?.length > 0 && <CurrenciesList/>}
                            {searchedCurrencies?.length === 0 && currenciesData?.length > 0 && <ItemNotFound/>}
                        </Box>
                    </Grid>
                </Box>
            }
        </Box>
    )
}

export default Home
