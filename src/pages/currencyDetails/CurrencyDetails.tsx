import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {ICurrency} from "../../models/currency";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {RootState} from "../../app/store";


function CurrencyDetails() {
    const {currenciesData} = useSelector((state: RootState) => state.currency);
    const [currency, setCurrency] = useState<ICurrency>();
    const {currencyId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (currenciesData.length === 0)
            navigate("/");
        if (currencyId) {
            const filtered = currenciesData.filter((currency: ICurrency) =>
                currency.id === currencyId
            )
            if(filtered.length === 0)
                navigate("/");
            setCurrency(filtered[0])
        }
    }, [])

    return (
        <Grid container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            position: "fixed",
            top: 0,
            right: 0
        }}>
            <Card sx={{
                width: 345,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: '#242933',
                borderRadius: '8px',
                color: 'white'
            }}>
                <CardMedia
                    sx={{width: 100, padding: '10px'}}
                    component="img"
                    alt="icon"
                    height="100"
                    image={currency?.image}
                />
                <CardContent sx={{width: '100%'}}>
                    <Typography gutterBottom variant="h5" component={'span'}
                                sx={{justifyContent: 'center', display: 'flex'}}>
                        {currency?.name}
                    </Typography>
                    <Typography component={'span'} variant="body2">
                        <Grid container>
                            <Grid container justifyContent={'space-between'} sx={{padding: '13px'}}>
                                <Grid item>
                                    <Typography component={'span'}>
                                        Price:
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    ${currency?.current_price}
                                </Grid>
                            </Grid>
                            <Grid container justifyContent={'space-between'} sx={{padding: '13px'}}>
                                <Grid item>
                                    <Typography component={'span'}>
                                        Total Volume:
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    ${currency?.total_volume}
                                </Grid>
                            </Grid>
                            <Grid container justifyContent={'space-between'} sx={{padding: '13px'}}>
                                <Grid item>
                                    <Typography component={'span'}>
                                        Market Cap:
                                    </Typography>
                                </Grid>
                                <Grid item sx={{direction: 'initial'}}>
                                    ${currency?.market_cap}
                                </Grid>
                            </Grid>
                            <Grid container justifyContent={'space-between'} sx={{padding: '13px'}}>
                                <Grid item>
                                    <Typography component={'span'}>
                                        24h Price Change:
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    {currency?.price_change_percentage_24h}%
                                </Grid>
                            </Grid>
                        </Grid>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={'/'} style={{textDecoration: "none"}}>
                        <Button variant="contained" color="secondary" sx={{fontWeight: 'bold'}}>
                            Back
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CurrencyDetails;
