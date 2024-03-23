import styles from 'src/styles/team.module.css';

type ProfileProps = {
  name: string
  role: string
  img: string
  committeeType: string
}

export const Profile = ({ name, role, img, committeeType }: ProfileProps) => {

  const roleClassName = `${styles.profileRole} ${styles[committeeType]}`;

  return (
    <div className={styles.profileContainer}>
      <img src={img} alt={name} className={styles.profilePic} />
      <div className={styles.profileName}>{name}</div>
      <div className={roleClassName}>{role}</div>
    </div>
  );
}
