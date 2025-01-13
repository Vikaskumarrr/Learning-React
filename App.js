import "./app.scss";
import { Button, FloatButton, Tabs } from "antd";
import { SearchOutlined } from '@ant-design/icons';

const App = () => {
    return (
        <div className="app">
            <h1>App Component</h1>
            <button className="btn">Click Me</button>
            <div className="container">
                <span>Text 1</span>
                <span>Text 2</span>

            </div>
            <Button>Click me</Button>
            <FloatButton icon={< SearchOutlined />} />

            <Tabs items={[
                {
                    key: "1",
                    label: "Tab 1",
                    children: <b>First Tab</b>
                },{
                    key: "2",
                    label: "Tab 2",
                    children: <b>second Tab</b>
                },{
                    key: "3",
                    label: "Tab 3",
                    children: <b>third Tab</b>
                }
            ]}/>
        </div>
    )
}

export default App;