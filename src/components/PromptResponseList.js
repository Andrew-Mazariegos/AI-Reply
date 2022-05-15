import styles from "../styles/PromptResponseList.module.css";
import PromptResponseCard from "./PrompResponseCard";

const PromptResponseList = (props) => {
    return (
        <div className={styles.list}>
            <h2 className={styles.title}>Responses</h2>
            {props.responseList &&
                props.responseList.length > 0 &&
                props.responseList.map((item) => (
                    <PromptResponseCard
                        prompt={item.prompt}
                        response={item.response}
                        key={item.id}
                    />
                ))}
            {(!props.responseList || props.responseList.length === 0) && (
                <strong className={styles.message}>
                    No prompts have been submitted for responses yet.
                </strong>
            )}
        </div>
    );
};

export default PromptResponseList;
