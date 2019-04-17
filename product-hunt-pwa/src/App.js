import React, { Component } from 'react';
import { Layout, Header, Content, Navigation, Drawer } from 'react-mdl';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout fixedHeader>
          <Header title="Product Hunt PWA">
            <Navigation className="hide-on-sm">
            
            </Navigation>
          </Header>
          <Drawer title="Product Hunt">
            <Navigation>
            
            </Navigation>
          </Drawer>
          <Content>
            Dynamic Content Here
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
