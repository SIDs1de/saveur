import styles from './index.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={'container'}>
        <div className={styles.row}>
          <span className={styles.text}>© 2026 SAVEUR</span>
          <span className={styles.text}>БРОНИРОВАНИЕ БЕЗ ЗВОНКОВ И ОЖИДАНИЯ</span>
        </div>
      </div>
    </footer>
  );
};
