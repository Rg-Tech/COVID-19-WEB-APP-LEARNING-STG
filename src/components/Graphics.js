import React,{Component} from 'react';  
import { default as CountryPicker } from './CountryPicker/CountryPicker';
import { default as Chart } from './Chart/Chart';

import { fetchData } from '../api/index';
import styles from './Graphics.module.css';

class Graphics extends Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData(); 
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country); 
    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default Graphics;