import { useState } from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

const ThemeSwitcher = () => {
    const [theme, setText] = useState(null);

    const resetText = () => {
        setText(null);
    };

    return (
        <div className="mb-2">

                <Button onClick={() => setText("Not quite, try stepping through the simulation again")}>
                &nbsp;&nbsp;1&nbsp;&nbsp;
                </Button>
                &nbsp;&nbsp;
                <Button onClick={() => setText("Not quite, try stepping through the simulation again")}>
                &nbsp;&nbsp;2&nbsp;&nbsp;
                </Button>
                &nbsp;&nbsp;
                <Button onClick={() => setText("Yes! Good job, every three ocillations the pattern repeats")}>
                &nbsp;&nbsp;3&nbsp;&nbsp;
                </Button>
                &nbsp;&nbsp;
                <Button onClick={() => setText("Not quite, try stepping through the simulation again")}>
                &nbsp;&nbsp;4&nbsp;&nbsp;
                </Button>                
                <p>                   
                    {theme ? theme : " "}
                </p>
        </div>
        
    );
};

export default ThemeSwitcher;