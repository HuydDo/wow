import React from 'react';
import './App.css';

const blizzard = require('blizzard.js').initialize({
  key: process.env.BLIZZARD_CLIENT_ID,
  secret: process.env.BLIZZARD_CLIENT_SECRET,
  origin: 'us',
  locale: 'en_US'
});

class App extends React.Component {
   w = async function example () {
    try {
      await blizzard.getApplicationToken()
        .then(response => {
          blizzard.defaults.token = response.data.access_token
        });
      const item = await blizzard.wow.item({ id: 168185 });
      console.log(item)
    } catch (err) {
      console.error(err);
    }
  }
    
  

  render(){
    return (
      <div className="App">
        {this.props.w}
      </div>
    );
  }
}

export default App;
