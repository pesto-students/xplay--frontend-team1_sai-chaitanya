import Home from "./Home";
import React, { useState } from 'react';
import './index.css';
import 'antd/dist/antd.css';
import img1 from './Images/image1.png';
import img2 from './images/first.png';
import img3 from './images/second.png';
import img4 from './images/third.png';
import img5 from './images/fourth.png';
import img6 from './images/fifth.png';
import { Button } from 'antd';

import {
  UsergroupAddOutlined,
  SearchOutlined,
  HomeFilled,
  MenuUnfoldOutlined,
  ProfileOutlined,
  VideoCameraAddOutlined,
  UserOutlined,
  LogoutOutlined,
  PlusCircleOutlined,
  CaretRightOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Sider,Footer } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Search', '1',<SearchOutlined style={{ fontSize: '150%'}}/>),
  getItem('Home', '2',<HomeFilled style={{ fontSize: '150%'}}/>),
  getItem('WatchList', '3',<MenuUnfoldOutlined style={{ fontSize: '150%'}}/>),
  getItem('Latest Movies', '4',<ProfileOutlined style={{ fontSize: '150%'}}/>),
  getItem('Featured Movies', '5',<VideoCameraAddOutlined style={{ fontSize: '150%'}}/>),
  getItem('Join Watch Party', '6',<UsergroupAddOutlined style={{ fontSize: '150%'}}/>),
  getItem('Suresh Kumar', '7',<UserOutlined style={{ fontSize: '150%'}}/>),
  getItem('Logout', '8',<LogoutOutlined style={{ fontSize: '150%'}}/>),
];
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  // const[fix, setfix]=useState(false);

  // function setFixSidebar(){
  //   if(window.scrollY>=600){
  //     setfix(true);
  //   }else{
  //     setfix(false);
  //   }
  // }
  // window.addEventListener("scroll",setFixSidebar);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" items={items}
        style={{
          paddingTop:'100px',
          backgroundColor:'black',
          height:'673px',
          
        }}
         />
      </Sider>
      <Layout className="site-layout">
        <Content>
          <div className="site-layout-background"
            style={{
              minHeight: 500,
            }}
          >
            {/* <div>
            <img src={img1} alt='my image'></img>
            </div> */}

<div className='imgresize'>
      <h1 style={{ fontSize: '250%', color:'white', marginLeft:'80px',}}>The Amazing Spider Man 2</h1>
      <h1 style={{ marginLeft:'385px', color:'white', marginTop:'-30px'}}>Welcome Home</h1>
      <h6 style={{fontSize: '110%', color:'white', marginLeft:'80px',marginTop:'20px'}}>2022|Action|Adventure|2h22m</h6>
      <h1 style={{fontSize: '110%', color:'white', marginLeft:'80px',marginTop:'40px'}}>A mythic and emotionally charged hero's journey, "Dune" 
      tells the story of Paul <br />Atreides, a brilliant and gifted young man 
      born into a great destiny beyond his<br /> understanding, who must travel to 
      the most dangerous planet in the universe to <br />ensure the future of his family and his people....</h1>
      <Button type="primary" style={{marginLeft:'80px',background:'#FF6212', width:'160px', color:'black'}}> <CaretRightOutlined  style={{ fontSize:'150%'}}/> Play</Button>
      <Button  type="primary" style={{marginLeft:'80px', color:'black', background:'white'}}> <TeamOutlined /> Watch with friends</Button>
      <PlusCircleOutlined style={{marginLeft:'80px', color:'white',fontSize: '190%',marginTop:'60px'}}/><span style={{color:'white',fontSize: '110%',marginLeft:'10px'}}>Add to Watchlist</span>
    </div>
          </div>
        </Content>
        <Footer
          style={{
            backgroundColor:'black',
            height:'421px',
            marginTop:'0'
          }}
        >
          <h1 style={{color:'#FF6212'}}>Watchlist</h1>
          <div>
            <img src={img2} style={{width:'212px', height:'158px', borderRadius: '16px'}} alt='my image'></img>
            <img src={img3} style={{width:'212px', height:'158px', borderRadius: '16px', marginLeft:'30px'}} alt='my image'></img>
            <img src={img4} style={{width:'212px', height:'158px', borderRadius: '16px', marginLeft:'30px'}} alt='my image'></img>
            <img src={img5} style={{width:'212px', height:'158px', borderRadius: '16px', marginLeft:'30px'}} alt='my image'></img>
            <img src={img6} style={{width:'212px', height:'158px', borderRadius: '16px', marginLeft:'30px'}} alt='my image'></img>
            </div>
            <h1 style={{color:'#FF6212',marginTop:'30px'}}>Latest on XPlay</h1>
            <div>
            <img src={img2} style={{width:'212px', height:'158px', borderRadius: '16px'}} alt='my image'></img>
            <img src={img3} style={{width:'212px', height:'158px', borderRadius: '16px', marginLeft:'30px', marginTop:'30px'}} alt='my image'></img>
            <img src={img4} style={{width:'212px', height:'158px', borderRadius: '16px', marginLeft:'30px', marginTop:'30px'}} alt='my image'></img>
            <img src={img5} style={{width:'212px', height:'158px', borderRadius: '16px', marginLeft:'30px', marginTop:'30px'}} alt='my image'></img>
            <img src={img6} style={{width:'212px', height:'158px', borderRadius: '16px', marginLeft:'30px', marginTop:'30px'}} alt='my image'></img>
            </div>
        </Footer>
      </Layout>
    </Layout>
  );
};
// export default App;



export { Home };

