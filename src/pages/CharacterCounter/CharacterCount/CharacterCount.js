import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from '../../../recoil/counter';

function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <>κΈμμ: {count}</>;
}

export default CharacterCount;
