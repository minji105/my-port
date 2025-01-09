import React from 'react';
import Joheesu from '../Projects/Joheesu';
import Cyworld from '../Projects/Cyworld';
import MyPT from '../Projects/MyPT';
import Museum from '../Projects/Museum';

export default function Sections() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'calc(var(--gap) * 2)'
    }}>
      <Joheesu></Joheesu>
      <Cyworld></Cyworld>
      <MyPT></MyPT>
      <Museum></Museum>
    </div>
  )
}