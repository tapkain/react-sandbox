import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  grow: {
    flexGrow: 1
  }
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Live Hand Pans
          </Typography>
          <div className={classes.grow} />
          <div>
            <IconButton aria-haspopup="true" color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
