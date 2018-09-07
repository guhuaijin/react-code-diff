import React from 'react';
import ReactDOM from 'react-dom';
import CodeDiff from '../index.jsx'
import {Row, Col, Input, Form, Switch, InputNumber}from 'antd'
import newStr from './data/newStr'
import oldStr from './data/oldStr'
import 'antd/dist/antd.css';

const {TextArea}  = Input;
const FormItem = Form.Item;

class CodeDiffPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // oldStr: null,
            // newStr: null,
            format: false,
            context: 5,
        }
    }

    handleFormatChange = () => {
        const {format} = this.state
        this.setState({format: !format})
    }

    handleContextChange = (e) => {
        this.setState({context: e})
    }


    render() {
        const {format, context } = this.state

        const outputFormat = format? 'line-by-line' : 'side-by-side';
        return (
            <div style={{padding: '10px'}}>
                <Row gutter={16}>
                    <Col span={12}>
                        <FormItem label="旧数据">
                            <TextArea rows={12} defaultValue={oldStr}/>
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem label="新数据">
                            <TextArea rows={12} defaultValue={newStr}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <FormItem label="展示效果" >
                            <Switch checkedChildren="side-by-side" unCheckedChildren="line-by-line" defaultChecked onChange={this.handleFormatChange} />
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem label="差异化范围"  >
                            <InputNumber  min={1} max={100000} defaultValue={context} onChange={this.handleContextChange}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <CodeDiff oldStr={oldStr} newStr={newStr} context={context} outputFormat={outputFormat}/>
                </Row>
            </div>
        );
    }
}

ReactDOM.render(<CodeDiffPage/>, document.querySelector('#app'));
