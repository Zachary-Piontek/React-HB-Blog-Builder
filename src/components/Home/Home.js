import React from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';
import { useState } from 'react';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('default title');
  const [subtitle, setSubTitle] = useState('default subtitle');


  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle}/>
      <Editor setTitle={setTitle} setSubTitle={setSubTitle}/>
    </main>
  );
}
