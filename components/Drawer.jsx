import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Link  from "next/link";
import styled from 'styled-components';

const StyledListItemText = styled(ListItemText)`
  cursor:pointer;
  text-transform: capitalize;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;
const StyledMenuIcon = styled(MenuIcon)`
  cursor:pointer;
  margin-right: 1rem;
`;

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['home', 'courses', 'projects', 'about','blogs','login'].map((text, index) => (
          <ListItem key={text} disablePadding>
          <Link href={`/${text=="home" ? "/" : text}`}>
            <ListItemButton>
            <StyledListItemText primary={text} />
            </ListItemButton>
          </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
         <StyledMenuIcon onClick={toggleDrawer(anchor, true)}/>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  );
}