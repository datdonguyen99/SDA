import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  navbar: {
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  appBar: {
    padding: '0px 100px',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    paddingLeft: 200,
    paddingRight: 200,
    paddingTop: 10,
  },
  footer: {
    marginTop: 10,
    textAlign: 'center',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  transparentBackgroud: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },
  fullWidth: {
    width: '100%',
  },
  reviewForm: {
    maxWidth: 800,
    width: '100%',
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  menuButton: { padding: 0 },
  mt1: { marginTop: '1rem' },
  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  searchInput: {
    paddingLeft: 5,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
  },
  iconButton: {
    backgroundColor: '#f8c040',
    padding: 5,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },
  sort: {
    marginRight: 5,
  },

  fullContainer: { height: '100vh' },
  mapInputBox: {
    position: 'absolute',
    display: 'flex',
    left: 0,
    right: 0,
    margin: '10px auto',
    width: 300,
    height: 40,
    '& input': {
      width: 250,
    },
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productOldPrice: {
    fontSize: 11,
    textDecoration: 'line-through',
    display: 'inline',
  },
  productPrice: {
    fontSize: 15,
  },
  productDiscount: {
    fontSize: 13,
    display: 'inline',
  },
  slug_productName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  slug_productOldPrice: {
    fontSize: 13,
    textDecoration: 'line-through',
  },
  slug_productPrice: {
    fontSize: 24,
    color: 'tomato',
    fontWeight: 'bold',
  },
  slug_productDiscount: {
    fontSize: 17,
    color: 'green',
    fontWeight: '600',
  },
  tag: {
    fontSize: 11,
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 2,
    marginRight: 5,
    marginBottom: 5,
  },
  coupon: {
    fontSize: 11,
  },
  flexBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagBox: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    height: '100%',
    display: 'flex',
    borderRadius: 15,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'tomato',
    // flex: 1,
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'column',
    // flex: 1,
  },
  cardBody: {
    // backgroundColor: 'darkgray',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginTop: 10,
  },
  cardBottom: {
    marginTop: 'auto',
  },
  cardBottomContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 28,
  },
  loginHeader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    display: 'flex',
  },

  sectionNumber: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionText: {
    fontSize: 8,
    color: 'gray',
  },

  bold: {
    fontWeight: 'bold',
  },
  root: {
    position: 'sticky',
  },
  property: {
    display: 'flex',
    alignItems: 'flex-start',
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
  },
  propertyText: {
    marginLeft: 5,
  },
  propertyLabel: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  slugCard: {
    borderRadius: 20,
  },

  emptyCart: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  cartItemPrice: {
    fontWeight: 'bold',
    color: 'tomato',
  },
  cartItemOldPrice: {
    fontWeight: 'bold',
    textDecoration: 'line-through',
  },
  cartItemDiscount: {
    fontWeight: 'bold',
    color: 'green',
  },
  cartItemName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartItemDetail: {
    fontSize: 14,
    color: 'gray',
  },
  cartItemImage: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardAdmin: {
    justifyContent: 'center',
    display: 'flex',
  },

  gray: {
    backgroundColor: 'gray',
  },

  modal: {
    position: 'absolute',
    top: 150,
    left: 'calc(50% - 400px)',
    padding: 5,
    width: 800,
  },
  loginCard: {
    display: 'flex',
  },
  loginContent: {
    flex: 1,
  },
}));

export { useStyles };
