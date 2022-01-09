import React from "react";
import JavaParameter from "./components/javaParameter/JavaParameter";
import JavaPath from "./components/javaPath/JavaPath";
import Ram from "./components/ram/Ram";
import styles from "./Parameters.scss";

type IProps = {
    checkbox: boolean;
}

export default function Parameters(props: IProps) {

    const [ramMax, setRamMax] = React.useState(10);
    const [ramMin, setRamMin] = React.useState(1);
    const [javaPath, setJavaPath] = React.useState("C:/Program Files/Java/jre1.8.0_291/bin/javaw.exe");
    const [javaParameter, setJavaParameter] = React.useState("");
    const [ramChecked, setRamChecked] = React.useState(false);
    const [javaPathChecked, setJavaPathChecked] = React.useState(false);
    const [javaParameterChecked, setJavaParameterChecked] = React.useState(false);

    const isCheckbox = props.checkbox ? "instanceSetting" : "setting";

    return (
        <div className={styles.parametersDiv}>
            <Ram
                type={isCheckbox}
                ramChecked={ramChecked}
                ramMax={ramMax}
                ramMin={ramMin}
                onRamMaxChange={setRamMax}
                onRamMinChange={setRamMin}
                onRamChecked={setRamChecked}
            />
            <JavaPath
                type={isCheckbox}
                checked={javaPathChecked}
                value={javaPath}
                onChangeJavaPath={setJavaPath}
                onChecked={setJavaPathChecked}
            />
            <JavaParameter
                type={isCheckbox}
                checked={javaParameterChecked}
                value={javaParameter}
                onChangeJavaParameter={setJavaParameter}
                onChecked={setJavaParameterChecked}
            />
        </div>
    );
}