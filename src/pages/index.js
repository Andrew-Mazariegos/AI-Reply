import { Fragment, useEffect, useState } from "react";
import HeaderBar from "../components/HeaderBar";
import PromptInput from "../components/PromptInput";
import PromptResponseList from "../components/PromptResponseList";
import "../index.css";
import "antd/dist/antd.min.css";

const HomePage = (props) => {
    const [responseList, setResponseList] = useState([]);

    useEffect(() => {
        if (
            localStorage.getItem("responseList") !== "undefined" &&
            localStorage.getItem("responseList")
        ) {
            setResponseList(JSON.parse(localStorage.getItem("responseList")));
        }
    }, []);

    return (
        <Fragment>
            <HeaderBar />
            <div className="container">
                <PromptInput
                    setResponseList={setResponseList}
                    responseList={responseList}
                />
                <PromptResponseList responseList={responseList} />
            </div>
        </Fragment>
    );
};

export default HomePage;
