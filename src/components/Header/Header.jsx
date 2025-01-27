import {Layout} from 'antd'

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

function Header() {
  return <Layout.Header style={headerStyle}>REACT KABZDA</Layout.Header>
}

export default Header;
