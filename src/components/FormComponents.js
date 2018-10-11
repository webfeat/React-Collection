import { List, InputItem, WhiteSpace, Button, WingBlank, Range, TextareaItem, Picker } from 'antd-mobile';
import React from 'react';
import ListItem from 'antd-mobile/lib/list/ListItem';
import http from './../http/app.service';

//薪酬待遇
let money = [];
const getMoney = () => {
    for (let i = 0; i < 20; i++) {
        let temp = { label: `${i}K`, value: i * 1000 };
        money.push(temp);
    }
};
getMoney();

let rooms = [
    { label: '305鹰眼实验室', value: '305鹰眼实验室' },
    { label: '306逆向CDIO创新实验室', value: '306逆向CDIO创新实验室' },
    { label: '102ICode实验室', value: '102ICode实验室' },
    { label: '303博弈实验室', value: '303博弈实验室' },
    { label: '奇点实验室', value: '奇点实验室' }
];


class FormComponent extends React.Component {
    state = {
        studentNumber: {
            value: '',
            hasError: false
        },
        studentName: {
            value: '',
            hasError: false
        },
        officeName: {
            value: '',
            hasError: false
        },
        offerNum: {
            value: null,
            hasError: false
        },
        marks: {
            value: '',
            hasError: false
        },
    }

    submit = () => {
       var a = http.post('http://sdfsdfsdf.do',this.state);
       console.log(a);
    }


    studentNumberChange = (value) => {
        this.setState(
            {
                studentNumber: {
                    value: value
                }
            }
        );
    }

    studentNameChange = (value) => {
        this.setState(
            {
                studentName: {
                    value: value
                }
            }
        );
    }

    officeNameChange = (value) => {
        this.setState(
            {
                officeName: {
                    value: value
                }
            }
        );
    }

    offerNumChange = (value) => {
        this.setState(
            {
                offerNum: {
                    value: value
                }
            }
        );
    }

    marksChange = (value) => {
        this.setState(
            {
                marks: {
                    value: value
                }
            }
        );
    }

    render() {
        return (
            <div>
                <List>
                    <InputItem type="number" maxLength={20} value={this.state.studentNumber.value} onChange={this.studentNumberChange}
                        error={this.state.studentNumber.hasError}>学号</InputItem>
                    <InputItem value={this.state.studentName.value} onChange={this.studentNameChange} error={this.state.studentNumber.hasError}>姓名</InputItem>
                    <InputItem value={this.state.officeName.value} onChange={this.officeNameChange} error={this.state.studentNumber.hasError}>在职公司</InputItem>
                    <Picker extra="请选择(可选)" data={money} cols={1} value={this.state.offerNum.value} onOk={this.offerNumChange} error={this.state.studentNumber.hasError}>
                        <List.Item arrow="horizontal" extra="K">薪酬</List.Item>
                    </Picker>
                    <Picker extra="请选择(可选)" data={rooms} cols={1} value={this.state.marks.value} onOk={this.marksChange} error={this.state.studentNumber.hasError}>
                        <List.Item arrow="horizontal" extra="K">备注</List.Item>
                    </Picker>
                    <ListItem>
                        <Button type="primary" onClick={this.submit}>提交</Button><WhiteSpace />
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default FormComponent;