import styles from "./Card.module.scss";

const Card = (props) => {
  const today = new Date();
  const old = new Date(props.due_date);

  let difference = Math.round((old.getTime() - today.getTime()) / (1000 * 60));
  difference =
    Math.abs(difference) > 60 * 24
      ? ` ${Math.round(difference / (60 * 24))} Days ${Math.abs(
          Math.round((difference / 60) % 24)
        )} Hours ${Math.abs(difference % 60)} minutes`
      : Math.abs(difference) > 60
      ? `${Math.round(difference / 60)} Hours ${Math.abs(
          difference % 60
        )} minutes`
      : `${difference} minutes`;

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
        <div className={styles.card_head}>{props.subject.toUpperCase()}</div>
        <div className={styles.card_body}>
          <ul>
            <li>{props.title.toUpperCase()}</li>
            <li>{props.due}</li>
            <li>{difference}</li>
          </ul>
        </div>
      </div>
    </a>
  );
};

export default Card;
