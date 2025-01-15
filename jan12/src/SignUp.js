import { Button, Form, Input } from "antd";

 const Signup = ()=>{
    
    const onSubmitform = (data)=>{ 
        console.log(data);
    };
    

    return ( 
        <div className="form">
            <Form onFinish={onSubmitform}>
                <Form.Item name="email">
                    <Input placeholder="Enter you Email"/>
                </Form.Item >
                <Form.Item name="name">
                    <Input placeholder="Enter you Name"/>
                </Form.Item>
                <Form.Item name="city">
                    <Input placeholder="Enter you city"/>
                </Form.Item>
                <Button htmlType="submit" type="primary" block>
                 SignUp
                </Button>
            </Form>
        </div>
    )
}

export default Signup ; 