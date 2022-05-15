import { useState } from "react";
import axios from "axios";
import styles from "../styles/PromptInput.module.css";
import { message } from "antd";

const PromptInput = (props) => {
    const [selectedEngine, setSelectedEngine] = useState("text-curie-001");
    const [enteredPrompt, setEnteredPrompt] = useState("");
    const [enteredKey, setEnteredKey] = useState("");

    const onEngineSelectHandler = (event) => {
        setSelectedEngine(event.target.value);
    };

    const onPromptChangeHandler = (event) => {
        setEnteredPrompt(event.target.value);
    };

    const onEnteredKeyChangeHandler = (event) => {
        setEnteredKey(event.target.value);
    };

    const submitHandler = async () => {
        if (enteredPrompt && enteredKey) {
            setEnteredPrompt("");
            const resp = await axios.post(
                `https://api.openai.com/v1/engines/${selectedEngine}/completions`,
                {
                    prompt: enteredPrompt,
                    max_tokens: 200,
                },
                {
                    headers: {
                        Authorization: `Bearer ${enteredKey}`,
                    },
                }
            );

            props.setResponseList((prev) => {
                if (prev) {
                    localStorage.setItem(
                        "responseList",
                        JSON.stringify([
                            {
                                prompt: enteredPrompt,
                                response: resp.data.choices[0].text,
                                id: resp.data.id,
                            },
                            ...prev,
                        ])
                    );
                    return [
                        {
                            prompt: enteredPrompt,
                            response: resp.data.choices[0].text,
                            id: resp.data.id,
                        },
                        ...prev,
                    ];
                } else {
                    localStorage.setItem(
                        "responseList",
                        JSON.stringify([
                            {
                                prompt: enteredPrompt,
                                response: resp.data.choices[0].text,
                                id: resp.data.id,
                            },
                        ])
                    );
                    return [
                        {
                            prompt: enteredPrompt,
                            response: resp.data.choices[0].text,
                            id: resp.data.id,
                        },
                    ];
                }
            });
        } else {
            if (!enteredKey) {
                message.error("Please enter the API key.");
            } else {
                message.error("Please enter a prompt.");
            }
        }
    };

    return (
        <div className={styles.content}>
            <h2>Enter Prompt</h2>
            <textarea
                required
                rows="20"
                cols="80"
                onChange={onPromptChangeHandler}
                value={enteredPrompt}
            />
            <br />
            <label htmlFor="key">API Key:</label>
            <input
                type="text"
                onChange={onEnteredKeyChangeHandler}
                required
                value={enteredKey}
            />
            <br />
            <br />
            <label htmlFor="engine">Select AI Engine:</label>
            <select name="engine" onChange={onEngineSelectHandler}>
                <option value="text-curie-001">text-curie-001</option>
                <option value="text-babbage-001	">text-babbage-001 </option>
                <option value="text-ada-001">text-ada-001</option>
                <option value="text-davinci-002">text-davinci-002</option>
            </select>
            <br />
            <div className={styles.buttonDiv}>
                <button type="submit" onClick={submitHandler}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default PromptInput;
