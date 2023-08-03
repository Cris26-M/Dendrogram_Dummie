import styles from './InfoWrapper.module.css'

function InfoWrapper (props) {
    return <div className={styles.infoWrapper}>{props.children}</div>;
}

export default InfoWrapper;