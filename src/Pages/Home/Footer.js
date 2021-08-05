import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';

const useStyles = makeStyles({
    root: {
        width: 500,
        
    },
});

export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Cart" icon={<ShoppingCartSharpIcon />} />
            <BottomNavigationAction label="Profile" icon={<PersonSharpIcon />} />
        </BottomNavigation>
    )
}