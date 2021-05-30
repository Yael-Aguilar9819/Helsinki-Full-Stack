import styles from "./NotificationMessage.module.css"
const NotificationMessage = ({message}) => {
  if (message === null) {
    return (
      null
    )
  }

  return(
    <div className={styles.container}>
      <h2 className={styles.message}>{message}</h2>
    </div>
  )

  
};
export default NotificationMessage