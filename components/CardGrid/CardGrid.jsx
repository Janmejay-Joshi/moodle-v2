import Card from "./Card";
import styles from "./CardGrid.module.scss";

const CardGrid = ({ details }) => {
    return (
        <div className={styles.wraper}>
            {details.map((detail) => {
                return (
                    <Card
                        title={detail.title}
                        subject={detail.subject}
                        time_left={detail.time_left}
                        status={detail.status}
                        due_date={detail.due_date}
                        due={detail.due}
                        key={detail.id}
                        link={detail.link}
                    />
                );
            })}
        </div>
    );
};

export default CardGrid;
