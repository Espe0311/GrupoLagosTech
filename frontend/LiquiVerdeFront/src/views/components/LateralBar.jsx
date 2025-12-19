import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

export default function LateralBar({cartItems}){
    const [openDrawer, setOpen] = useState(false);
    const toggleDrawer = (state) => {
        setOpen(state);
    };

    return (
        <>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(true)}
          >
        <Badge badgeContent={cartItems} color="primary">
            <ShoppingCartIcon />
        </Badge>
        </IconButton>
        
        <Drawer 
         sx={{
            [`& .MuiDrawer-paper`]: {
            width: "40%",
            },}}
            anchor="right"
            open={openDrawer}
            onClose={() => toggleDrawer(false)}
        >
        <Box sx={{ p: 2 }}>
          <h2>Carrito</h2>
        </Box>
            
        </Drawer>
        </>
    )
};