import { useEffect } from 'react';
import { Form, Input } from 'antd';

import { PlatForm } from '@/constant';
import { getTranslatorConfig, updateTranslatorConfig } from '@/core/translator/utils';

type FieldType = {
  app_id?: string;
  app_key?: string;
};

export default () => {
  const [form] = Form.useForm();

  const onValuesChange = (
    changedValues: Record<string, unknown>,
    allValues: Record<string, unknown>,
  ) => {
    console.log('allValues', allValues);
    updateTranslatorConfig(PlatForm.YouDao, allValues);
  };

  // initialize
  useEffect(() => {
    form.setFieldsValue(
      getTranslatorConfig(PlatForm.YouDao)
    );
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
