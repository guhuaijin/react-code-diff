# [react-code-diff]()
 
此组件是基于[vue-code-diff]()实现的react版本代码对比展示工具。
> 代码对比展示demo

## 安装
```$xslt
npm install reacr-code-diff
```

## 使用
```$xslt
import {Component} from 'react';
import CodeDiff from 'react-vode-diff';

class Demo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            oldStr: oldStr,
            newStr: newStr,
        }
    }
    render(){
        return (
            <div>
                <CodeDiff oldStr={oldStr} newStr={newStr}/>;
            </div>
        )
    }
}

export default Demo;
``` 

## 参数说明

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| old-string| 陈旧的字符串| string  |   —    |    —     |
| new-string| 新的字符串| string  |   —    |    —     |
| context| 不同地方上下间隔多少行不隐藏 | number  |   —    |    —     |
| outputFormat| 展示的方式 | string  |   line-by-line，side-by-side    |    line-by-line     |


## 效果展示

### line-by-line
![line-by-line](../react-code-diff/line-by-line.png?row=true)
### side-by-side
![line-by-line](../react-code-diff/side-by-side.png?row=true)

## LICENSE
[MIT](LICENSE)

