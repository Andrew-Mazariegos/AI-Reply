import styles from "../styles/HeaderBar.module.css";

const HeaderBar = (props) => {
    return (
        <div className={styles.header} style={{ color: "#1890ff" }}>
            <h1>aiReply</h1>
        </div>
    );
};

export default HeaderBar;
