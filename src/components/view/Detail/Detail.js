import { Calendar, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';

const Detail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (isModalOpen) {
      form.setFieldsValue({ plan: "" });
    }
  }, [isModalOpen]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Calendar onSelect={showModal} />
      <Modal title="Add a new plan" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="plan">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default Detail;

