import { useIdleTimer } from "react-idle-timer";
import { useEffect, useState } from "react";
import { logout, auth } from "../services/firebase-auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { message } from "antd";

const Timeout = () => {
    const [user, loading, error] = useAuthState(auth);
    const [isIdle, setIsIdle] = useState(false);
    const { getLastActiveTime } = useIdleTimer({
        timeout: 60000,
        onIdle: () => {
            setIsIdle(true);
        },
        onAction: () => {
            setIsIdle(false);
        },
    });

    useEffect(() => {
        if (isIdle && user && !loading) {
            const timer = setTimeout(() => {
                const currTime = Date.now();
                if (currTime - getLastActiveTime() >= 300000) {
                    logout();
                    message.destroy();
                    message.error(
                        "You have been timed out, please login again."
                    );
                }
            }, 300000);

            return () => clearTimeout(timer);
        }
        return () => {};
    }, [isIdle]);

    return null;
};

export default Timeout;
