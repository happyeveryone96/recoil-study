import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../../../recoil/counter';
import css from './TextInput.module.scss';

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = event => {
    setText(event.target.value);
  };

  return (
    <div className={css.container}>
      <input type="text" value={text} onChange={onChange} />
      <br />
      <div className={css.text}>Echo: {text}</div>
    </div>
  );
}

export default TextInput;
