import React from "react";
import styles from "./CircleLoading.scss";

import { animated, useTrail } from "react-spring";
export default function CircLoading() {

    const [open, setOpen] = React.useState(true);

    const trail = useTrail(3, {
        config: {
            mass: 5,
            tension: 2000,
            friction: 200
        },
        opacity: open ? 1 : 0,
        y: open ? 0 : 30,
        from: {
            opacity: 0,
            y: 30
        }
    });

    React.useEffect(() => {

        let isCancelled = false;

        setTimeout(() => {
            if(!isCancelled) setOpen((value) => !value);
        }, 500);

        return () => {
            isCancelled = true;
        };
    }, [open]);

    return (
        <div className={styles.circleLoadingDiv}>
            {
                trail.map(({ ...style }, index) => (
                    <animated.div
                        key={index}
                        style={style}

                    >
                        <div className={styles.circle}></div>
                    </animated.div>
                ))
            }
        </div>
    );
}