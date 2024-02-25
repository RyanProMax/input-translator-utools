import { useEffect } from 'react';
import { Form, Input } from 'antd';

import { PlatForm } from '@/constant';

type FieldType = {
  app_id?: string;
  app_key?: string;
};

const Keys = {
  app_id: `${PlatForm.YouDao}_app_id`,
  app_key: `${PlatForm.YouDao}_app_key`,
};

export default () => {
  const [form] = Form.useForm();

  const onValuesChange = (changedValues: Record<string, unknown>) => {
    // console.log('changedValues', changedValues);
    Object.entries(changedValues).forEach(([key, value]) => {
      if (key) {
        utools.dbStorage.setItem(`${PlatForm.YouDao}_${key}`, value);
      }
    });
  };

  // initialize
  useEffect(() => {
    form.setFieldsValue({
      app_id: utools.dbStorage.getItem(Keys.app_id),
      app_key: utools.dbStorage.getItem(Keys.app_key),
    });
  }, []);

  return (
    <Form
      name='basic'
      form={form}
      onValuesChange={onValuesChange}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete='off'
      className='setting-youdao'
    >
      <Form.Item<FieldType>
        label='App ID'
        name='app_id'
        rules={[{ required: true, message: 'Please input your App ID' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label='App Key'
        name='app_key'
        rules={[{ required: true, message: 'Please input your App Key' }]}
      >
        <Input.Password />
      </Form.Item>
    </Form>
  );
};
