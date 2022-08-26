import classes from './Template.module.css';

const Template = (props) => {
  return (
    <section className={classes['temp-container']}>
      <div>
        <h2 className={classes['product-name']}>{props.name}</h2>
      </div>
        <hr />
      <div className={classes['temp-product']}>
        {props.product}
      </div>
    </section>
  );
};
export default Template;
