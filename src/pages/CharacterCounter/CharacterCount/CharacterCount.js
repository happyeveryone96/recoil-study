import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from '../../../recoil/counter';

function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <>글자수: {count}</>;
}

export default CharacterCount;
