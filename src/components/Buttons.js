//npm install react-bootstrap bootstrap
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from "react";

export default function Buttons() {
    const [showMessage, setShowMessage] = useState(true);
    const [showDanger, setShowDanger] = useState(true);
    const [showSuccess, setShowSuccess] = useState(true);
    const [showWarning, setShowWarning] = useState(true);
    const [showInfo, setShowInfo] = useState(true);
    const [showLight, setShowLight] = useState(true);
    const [showDark, setShowDark] = useState(true);
    const [showLink, setShowLink] = useState(true);
    const [showPrimary, setShowPrimary] = useState(false);
    const [showSecondary, setShowSecondary] = useState(false);

  useEffect(() => {
      setShowMessage(false);
      setShowDanger(false);
        setShowDark(false);
        setShowInfo(false);
        setShowLight(false);
        setShowLink(false);
        setShowSecondary(false);
        setShowSuccess(false);
        setShowWarning(false);
        setShowPrimary(false);
  }, []);
  return (
    <div className="App">

<>
        <Button onClick={() => setShowPrimary(!showPrimary)} variant="primary">Primary</Button>{' '}
        <Button onClick={() => setShowSecondary(!showSecondary)} variant="secondary">Secondary</Button>{' '}
        <Button onClick={() => setShowSuccess(!showSuccess)} variant="success">Success</Button>{' '}
        <Button onClick={() => setShowWarning(!showWarning)} variant="warning">Warning</Button>{' '}
        <Button onClick={() => setShowDanger(!showDanger)} variant="danger">Danger</Button>{' '} 
        <Button onClick={() => setShowInfo(!showInfo)} variant="info">Info</Button>{' '}
        <Button onClick={() => setShowLight(!showLight)} variant="light">Light</Button>{' '} 
        <Button onClick={() => setShowDark(!showDark)} variant="dark">Dark</Button>{' '}
        <Button onClick={() => setShowLink(!showLink)} variant="link">Link</Button>{' '}
        <button onClick={() => setShowMessage(!showMessage)}>Show Text</button>{' '}
      </>

        <br /><br />

	  {showPrimary && <h4>{'<Button variant="primary">Primary</Button>'}</h4>}
        {showSecondary && <h4>{'<Button variant="secondary">Secondary</Button>'}</h4>}
        {showSuccess && <h4>{'<Button variant="success">Success</Button>'}</h4>}
        {showWarning && <h4>{'<Button variant="warning">Warning</Button>'}</h4>}
        {showDanger && <h4>{'<Button variant="danger">Danger</Button>'}</h4>}
        {showInfo && <h4>{'<Button variant="info">Info</Button>'}</h4>}
        {showLight && <h4>{'<Button variant="light">Light</Button>'}</h4>}
        {showDark && <h4>{'<Button variant="dark">Dark</Button>'}</h4>}
        {showLink && <h4>{'<Button variant="link">Link</Button>'}</h4>}
        {showMessage && <h4>{'<Button>Show Text</Button>'}</h4>}


    </div>
  );
}



