import styles from '../styles/Card.module.css'

const Card = ({ name, phone, email, image: { url, alt }, id }) => (
  <div className={styles.card}>
    <div className={styles['card-header']}>
      <img src={url} alt={alt} className={styles['card-img']} />
    </div>
    <div className={styles['cardContent']}>
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  </div>
)

export default Card
