import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import FunctionDestructing from "./functions/FunctionDestructing";
import Destructing from "./json/Destructing";
import House from "./json/House";
import JsonStringify from "./json/JsonStringify";
import Spreading from "./json/Spreading";
import TemplateLiterals from "./strings/TemplateLiterals";
import BooleanVariables from "./variables/BooleanVariables";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import WorkingWithFunctions from "./WorkingWithFunctions";

function JavaScript() {
    console.log('Hello World!');

    return (
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <WorkingWithFunctions />
            <JsonStringify />
            <TemplateLiterals />
            <House />
            <Spreading />
            <Destructing />
            <FunctionDestructing />
        </div>
    );
}

export default JavaScript;