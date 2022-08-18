import React from 'react';
import TextInput from './TextInput/TextInput';
import CharacterCount from './CharacterCount/CharacterCount';
import css from './CharacterCounter.module.scss';

function CharacterCounter() {
  return (
    <div className={css.container}>
      <h1>글자수 세기</h1>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

export default CharacterCounter;
