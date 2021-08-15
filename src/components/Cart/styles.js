import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
body : {
  marginBottom: '0px',
  height: '100vh',
},
  grid: {
    display: 'flex',
    
  },

  background: {
    backgroundColor: '#fff',
    margin:'0',
  }, 

  title: {
    marginTop: '1%',
    marginBottom: '2%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
      
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
    backgroundColor: '#171819',
  },



  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));
