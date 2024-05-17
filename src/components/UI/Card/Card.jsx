import classes from './Card.module.css';

const Card = props => {
    return (
        <div className={classes.card}>
            <div className={classes.heading}>
                <h4>{props.title}</h4>
            </div>
            <div className={classes.body}>{props.content}</div>
        </div>
    );
};
export default Card;
