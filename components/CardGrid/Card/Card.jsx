import styles from "./Card.module.scss";

const Card = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div
                className={styles.card}
                style={
                    props.due
                        ? { border: "solid thick red" }
                        : { border: "solid thick green" }
                }
            >
                <div className={styles.card_head}>
                    {props.subject.toUpperCase()}
                </div>
                <div className={styles.card_body}>
                    <ul>
                        <li>{props.title.toUpperCase()}</li>
                        <li>{props.due}</li>
                        <li>{props.time_left}</li>
                    </ul>
                </div>
            </div>
        </a>
    );
};

export default Card;
