import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    height: '80vh',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  productText: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0px',
    marginBottom: '50px',

  },
}));