import styles from "../styles/PromptResponseCard.module.css";

const PromptResponseCard = (props) => {
    return (
        <div className={styles.card}>
            <strong className={styles.prompt}>Prompt:</strong>
            <span>{props.prompt}</span>
            <br />
            <br />
            <strong>Response:</strong>
            <span>{props.response}</span>
        </div>
    );
};

export default PromptResponseCard;
