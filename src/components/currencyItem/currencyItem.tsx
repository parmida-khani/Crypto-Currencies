import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {Link} from "react-router-dom";
import {ICurrency} from "../../models/currency";

function CurrencyItem({currency}: { currency: ICurrency }) {
    return (
        <Link to={`/${currency.id}`} style={{textDecoration: "none", color: "white"}}>
            <ListItem
                disablePadding
                sx={{
                    bgcolor: "#242933",
                    borderRadius: "8px",
                    my: 1,
                    '&:hover': {bgcolor: "#2A303C",}
                }}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <img
                            src={currency.image}
                            alt="icon"
                            style={{width: '30px', height: '30px'}}
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary={`${currency.name} (${currency.symbol})`}
                    />
                </ListItemButton>
            </ListItem>
        </Link>
    );
}

export default CurrencyItem;
