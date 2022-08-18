import React, { useRef, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../../../recoil/counter';
import css from './TextArea.module.scss';

function TextArea() {
  const ref = useRef(null);
  console.log(ref.current);
  const handleHeight = () => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = '16px';
    ref.current.style.height = ref.current.scrollHeight + 'px';
  };

  const handleResizeHeight = useCallback(() => {
    handleHeight();
  }, []);

  const [text, setText] = useRecoilState(textState);
  const onChange = e => {
    setText(e.target.value);
    handleResizeHeight();
  };

  useEffect(() => {
    handleHeight();
  }, []);

  return (
    <div className={css.container}>
      <textarea
        className={css.textArea}
        value={text}
        onChange={onChange}
        ref={ref}
      />
    </div>
  );
}

export default TextArea;
