import {
  Layout,
  Avatar,
  Descriptions,
  Button,
  Form,
  Input,
  Typography,
} from "antd";

function MyPost(props) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    props.addPost(values.newPost);
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Typography.Title level={2}>My post</Typography.Title>
      <Form
        name="basic"
        labelCol={{
          span: 0,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
        form={form}
      >
        <Form.Item
          label="TextArea"
          name="newPost"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Send new post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default MyPost;
