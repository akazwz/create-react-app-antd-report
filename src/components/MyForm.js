import React from 'react';
import { DatePicker, Divider, Form, Select } from "antd";
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import Text from "antd/lib/typography/Text";

const {Option} = Select;

const MyForm = () => {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };

    const onGenderChange = (value) => {
        switch (value) {
            case 'male':
                form.setFieldsValue({
                    note: 'Hi, man!',
                });
                return;
            case 'female':
                form.setFieldsValue({
                    note: 'Hi, lady!',
                });
                return;
            case 'other':
                form.setFieldsValue({
                    note: 'Hi there!',
                });
                return;
            default:
        }
    };

    const formItemLayout =
        {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        }
    return (
        <>
            <Form {...layout} form={form} {...formItemLayout} name="control-hooks" onFinish={onFinish}>
                <Divider>
                    <Text style={{
                        fontWeight: 'bolder',
                        fontSize: 21,
                    }}>
                        Duration Select
                    </Text>
                </Divider>
                <Form.Item
                    name="time"
                    label="Time"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <DatePicker locale={locale} showToday size='large' />
                </Form.Item>
                <Form.Item
                    name="time"
                    label="Time"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <DatePicker locale={locale} showToday size='large' />
                </Form.Item>
                <Divider>
                    <Text style={{
                        fontWeight: 'bolder',
                        fontSize: 21,
                    }}>
                        Options Filter
                    </Text>
                </Divider>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={onGenderChange}
                        allowClear
                        showSearch
                        style={{width: 200}}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={onGenderChange}
                        allowClear
                        showSearch
                        style={{width: 200}}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={onGenderChange}
                        allowClear
                        showSearch
                        style={{width: 200}}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
            </Form>
        </>
    );
};

export default MyForm;
