import { 
  Row, 
  Col,
  Typography,
  Steps, 
  Button, 
  message
} from 'antd';
import { UserOutlined, ToolOutlined, ScheduleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import 'antd/dist/antd.css';
import './main.css';

const { Title } = Typography;
const { Step } = Steps;

const steps = [
  {
    title: 'Information',
    icon: <UserOutlined />,
    content: 'First-content',
  },
  {
    title: 'Configuration',
    icon: <ToolOutlined />,
    content: 'Second-content',
  },
  {
    title: 'Done',
    icon:<ScheduleOutlined />,
    content: 'Last-content',
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
    <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh', backgroundColor:'#212E36'}}>
        <Col >
            <Title style={{color:'#fff'}}>Signature Generator</Title>
            
            <Steps current={current}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} icon={item.icon} />
              ))}
            </Steps>

            <div className="steps-content">
              {steps[current].content}
            
            </div>

            <div className="steps-action">
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
            
        </Col>
    </Row>
    </>
  );
}

