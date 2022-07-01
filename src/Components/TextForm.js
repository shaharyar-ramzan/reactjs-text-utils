import React, { useState } from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const [text, settext] = useState('');
    //const [colorScheme, setColorScheme] = useState({backgroundColor : 'black', color : 'white'});
    
    let colorScheme = {backgroundColor : 'black', color : 'white'};
    if (props.mode === 'light') {
        colorScheme = {backgroundColor : 'white', color : 'black'};
    }

    const handleUpperClick = () => {
        settext(text.toUpperCase());
    }

    const handleLowerClick = () => {
        settext(text.toLowerCase());
    }

    const handleClearClick = () => {
        if (window.confirm('Are you sure if you want to Clear Text?')){
            settext('');
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }

    const handleExtraSpaces = () => {
        settext(text.split(/[ ]+/).join(' '));
    }

    const handleOnChange = (event) => {
        //console.log('On Change');
        settext(event.target.value);
    }
    /*let summary = '<p>Enter Something to see Summary</p>';
    if (text.length) {
        summary = ` <p>${text.split(' ').length} words, ${text.length} characters</p>
                    <p>${0.008 * text.split(' ').length} Minutes Time to read</p>
                    <h2>Preview</h2> 
                    <p>${text}</p>`;
    }
    if (text.length) {
        summary = '<p>'+text.split(' ').length+' words, '+text.length+' characters</p>';
    }*/

    return (
        <>
        <div className="container-fluid pt-3 pb-3" style={colorScheme}>
        <div className="container">
            <div className="form-group mb-3">
                <label htmlFor="my-box">{props.fieldLabel}</label>
                <textarea style={colorScheme} className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
            </div>
            <div className="form-group mb-3">
                <button className="btn btn-success mr-3" type="button" onClick={handleUpperClick}>Convert to Uppercase</button>
                <button className="btn btn-warning mr-3" type="button" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-danger mr-3" type="button" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-info mr-3" type="button" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-dark mr-3" type="button" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>{text.split(' ').length} words, {text.length} characters, Time to read</p>
            <p>{0.008 * text.split(' ').length} Minutes Time to read</p>
            <h2>Preview</h2>
            <p>{text}</p>

            {/*`${text.length > 0 ? 
                `<p>${text.split(' ').length} words, ${text.length} characters</p>
                <p>${0.008 * text.split(' ').length} Minutes Time to read</p>
                <h2>Preview</h2> <p>${text}</p>`:'<p>Enter Something to see Summary</p>'}
            `*/}
             
        </div>
        </div>
        </>
    )
}

TextForm.propTypes = {
    fieldLabel: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    fieldLabel: 'Textarea'
}
