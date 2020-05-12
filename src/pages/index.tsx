import React from 'react';
import styles from './index.less';
import Toast from '../component/toast/index'

export default () => {
  Toast('网络错误');
  return (
    <div>
      <h1 className={styles.title} onClick={()=>{Toast('网络错误');}}>Page index</h1>
    </div>
  );
}
