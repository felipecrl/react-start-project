const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    background: "url(assets/img/bg.png) 0 0 repeat",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    boxShadow: "0 0 0 0"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 4,
    marginRight: 32
  },
  hide: {
    display: "none"
  },
  grow: {
    flexGrow: 1
  },
  opened: {
    flexGrow: 1,
    marginLeft: 25
  }
});

export default styles;
