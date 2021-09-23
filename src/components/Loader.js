import classes from './Loader.module.css';

const Loader = () => (
  <div className={classes.loaderBox}>
    <div className={classes.loader}>
      <p className={classes.p}>Loading...</p>
    </div>
  </div>
);

export default Loader;
