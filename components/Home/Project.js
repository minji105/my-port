import React from 'react';
import Joheesu from '../Projects/Joheesu';
import Cyworld from '../Projects/Cyworld';
import MyPT from '../Projects/MyPT';

export default function Sections() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '64px'
    }}>
      <Joheesu></Joheesu>
      <Cyworld></Cyworld>
      <MyPT></MyPT>
    </div>
  )
}