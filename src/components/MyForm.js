import React, { useEffect, useState } from 'react';
import { DatePicker, Divider, Form, Select } from "antd";
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import Text from "antd/lib/typography/Text";

const {Option} = Select;

const MyForm = (props) => {
    const {breakpoint} = props;
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const [selectWidth, setSelectWidth] = useState(200);
    useEffect(() => {
        if (breakpoint === 'xs') {
            setFormLayout('inline');
            setSelectWidth(150);
        } else {
            setFormLayout('horizontal');
            setSelectWidth(200);
        }
    }, [breakpoint]);
    const onFormLayoutChange = ({layout}) => {
        setFormLayout(layout);
    };

    const onFinish = (values) => {
        console.log(values);
    };


    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Form
                    name="control-hooks"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    form={form}
                    onFinish={onFinish}
                    layout={formLayout}
                    autoComplete="off"
                >
                    <Divider>
                        <Text style={{
                            fontWeight: 'bolder',
                            fontSize: 17,
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
                            //onChange={onGenderChange}
                            allowClear
                            showSearch
                            style={{width: selectWidth}}
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
                            //onChange={onGenderChange}
                            allowClear
                            showSearch
                            style={{width: selectWidth}}
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
                            //onChange={onGenderChange}
                            allowClear
                            showSearch
                            style={{width: selectWidth}}
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
            </div>
        </>
    );
};

export default MyForm;
