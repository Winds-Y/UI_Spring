import React from 'react'
import {Link} from "react-router-dom";
// 按需加载antd，需要配置
import {Menu,Icon} from "antd";
import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '@cssHome/home.css'
import '@cssHome/main.css'
import logoImg from '@imgHome/logo.png'

const SubMenu = Menu.SubMenu;

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            username: ''
        };
        // console.log(`in home's constructor: ${this.props.children}`);
        console.log(this.props.children);
    }
    handleClick = (e) => {
        console.log(e.key);
        this.setState({
            current: e.key
        });
        console.log(this.props.children);
    };

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: 'Changze'
        })
    };
    render(){
        return (
            <div>
                <div id="leftMenu">
                    <img src={logoImg} width="50" id="logo" alt="404"/>
                    <Menu theme="dark"
                          onClick={this.handleClick}
                          style={{ width: 185 }}
                          defaultOpenKeys={['sub1', 'sub2']}
                          defaultSelectedKeys={[this.state.current]}
                          mode="inline"
                    >
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                            <Menu.Item key="1"><Link to={{pathname:'/Page1',query:{way:'query'}}}>Page1</Link></Menu.Item>
                            <Menu.Item key="2"><Link to={{pathname:'/Page2',state:{way: 'state'}}}>Page2</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/Page3">Page3</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/UserList">UserList</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
                            <Menu.Item key="5"><Link to={{pathname:'/TestSocketIo'}}>TestSocketIo</Link></Menu.Item>
                            <Menu.Item key="6"><Link to={{pathname:'/CpuMonitor'}}>Cpu实时监测</Link></Menu.Item>
                            <Menu.Item key={'7'}><Link to={{pathname:'/ControlPanel'}}/>Redux入门实例</Menu.Item>
                            <Menu.Item key={'8'}><Link to={{pathname:'/TestPage'}}/>Test</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                        { this.props.children }
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;