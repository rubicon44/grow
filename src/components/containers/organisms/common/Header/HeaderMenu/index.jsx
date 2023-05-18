import { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const HeaderMenu = ({
  drawerStatus,
  headerLinks,
  headerLinksForAuth,
  toggleDrawer,
}) => {
  // todo: ログイン後とログイン前で、「headerLinks」と「headerLinksForAuth」を切り替える。
  const headerMenuList = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {headerLinks.map((headerLink) => (
          <Link to={headerLink.url} key={headerLink.url}>
            <ListItem button key={headerLink.text} sx={{ textAlign: "center" }}>
              <ListItemText primary={headerLink.text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {headerLinksForAuth.map((headerLink) => (
          <Link to={headerLink.url} key={headerLink.url}>
            <ListItem button key={headerLink.text} sx={{ textAlign: "center" }}>
              <ListItemText primary={headerLink.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return ["top"].map((anchor) => (
    <Fragment key={anchor}>
      <IconButton onClick={toggleDrawer(anchor, true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor={anchor}
        open={drawerStatus[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        {headerMenuList(anchor)}
      </SwipeableDrawer>
    </Fragment>
  ));
};

HeaderMenu.propTypes = {
  drawerStatus: PropTypes.shape({
    top: PropTypes.bool.isRequired,
    left: PropTypes.bool,
    bottom: PropTypes.bool,
    right: PropTypes.bool,
  }).isRequired,
  headerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  headerLinksForAuth: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};
