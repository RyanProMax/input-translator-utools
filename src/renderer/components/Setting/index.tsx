import { useState } from 'react';
import { Collapse } from 'antd';

import { PlatForm } from '@/constant';
import YouDao from './YouDao';

import './index.less';

const SettingItems = [
  {
    key: PlatForm.YouDao,
    label: '有道翻译',
    children: <YouDao />,
  },
];

export default () => {
  const [activeKey, setActiveKey] = useState([PlatForm.YouDao]);

  const onChange = (key: string | string[]) => {
    console.log('onChange', key);
    setActiveKey(key as PlatForm[]);
  };

  return (
    <div className='setting'>
      <Collapse
        items={SettingItems}
        activeKey={activeKey}
        onChange={onChange}
        className='setting-collapse'
      />
    </div>
  );
};
