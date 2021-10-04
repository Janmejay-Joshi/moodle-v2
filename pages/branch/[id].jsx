import Header from '../../components/Header';
import CardGrid from '../../components/CardGrid';

import styles from '../../styles/Home.module.scss';

const Post = ({initialData}) => {
  const data = initialData;
  const today = new Date();

  const old = new Date(data.last_updated);
  let difference = Math.round((today.getTime() - old.getTime()) / (1000 * 60));
  difference =
    difference > 60
      ? `${Math.round(difference / 60)} Hours ${difference % 60} minutes`
      : `${difference} minutes`;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.update}>
            Last Fetched Assignments <span>{difference}</span> ago.
          </div>
        </div>
        <main className={styles.main}>
          <CardGrid details={data.data.assignments} />
        </main>
      </div>
    </>
  );
};

export async function getServerSideProps({params}) {
  const res = await fetch(`https://dxx8aa.deta.dev/get/${params.id}`);
  const initialData = await res.json();
  return {
    props: {
      initialData,
    },
  };
}
export default Post;
