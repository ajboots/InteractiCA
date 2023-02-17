import styles from '../styles/SandBox.module.css';

export default function SandBox(props) {
  return (
    <div className={styles.codeboxContainer}>
      <h3>{props.title}</h3>
      <iframe className={styles.codebox}
        src={props.link + "?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.jsx&theme=dark&hidedevtools=1"}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
      </iframe>
    </div>
  );
}