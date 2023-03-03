import { useState } from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(null);

    const resetTheme = () => {
        setTheme(null);
    };

    return (
        <div className="mb-2">

                <Button onClick={() => setTheme("YOU ARE WRONG AND SHOULD FEEL BAD")}>
                &nbsp;&nbsp;1&nbsp;&nbsp;
                </Button>
                &nbsp;&nbsp;
                <Button onClick={() => setTheme("YOU ARE WRONG AND SHOULD FEEL BAD")}>
                &nbsp;&nbsp;2&nbsp;&nbsp;
                </Button>
                &nbsp;&nbsp;
                <Button onClick={() => setTheme("YOU ARE {(right)} AND {(should not)} FEEL BAD")}>
                &nbsp;&nbsp;3&nbsp;&nbsp;
                </Button>
                &nbsp;&nbsp;
                <Button onClick={() => setTheme("YOU ARE WRONG AND SHOULD FEEL BAD")}>
                &nbsp;&nbsp;4&nbsp;&nbsp;
                </Button>                
                <p>                   
                    {theme ? theme : " "}
                </p>
        </div>
        
    );
};

export default ThemeSwitcher;