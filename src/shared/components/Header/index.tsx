import styles from './index.module.scss';

export const Header = () => {
  return (
    <header className={'container'}>
      <div className={styles.main}>
        <span className={styles.logo}>SAVEUR</span>
        <span className={styles.location}>МОСКВА · ПАТРИАРШИЕ ПРУДЫ</span>
      </div>
    </header>
  );
};
