import React from 'react';

import './Editor.css';

export default function Editor({ title, setTitle, subtitle, setSubTitle, font, setFont, setAlign, text, setText }) {
  return (
    <div className="editor">
      <div className="form-control">
        <input name="title" type="text" value={title} onChange={ (event) => setTitle(event.target.value)} />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-control">
        <input type="text" value={subtitle} onChange={ (event) => setSubTitle(event.target.value)} />
        <label>Subtitle</label>
      </div>
      <div className="form-control">
        <select value={font} onChange={ (event) => setFont(event.target.value)}>
          <option value="architect">{"Architect's Daughter"}</option>
          <option value="comforter">Comforter</option>
          <option value="fredoka">Fredoka</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="monteserrat">Monteserrat</option>
          <option value="roboto">Roboto</option>
          <option value="roboto-mono">Roboto Mono</option>
          <option value="titillium">Titillium</option>
        </select>
        <label>Font</label>
      </div>
      <div className="form-control">
        <label>Alignment</label>
        <div className="radio-group">
          <label>
            <input name="align" type="radio" value="left" onChange={ (event) => setAlign(event.target.value)} />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input name="align" type="radio" value="center" onChange={ (event) => setAlign(event.target.value)} />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input name="align" type="radio" value="right" onChange={ (event) => setAlign(event.target.value)} />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control">
        <textarea style={{ height: '250px' }} value={text} onChange={ (event) => setText(event.target.value)} />
        <label>Text</label>
      </div>
    </div>
  );
}
