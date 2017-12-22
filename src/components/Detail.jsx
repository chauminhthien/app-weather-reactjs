import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ItemWeather from './ItemWeather';
import * as WeatherActions from './../actions/weather';
import { Table } from 'reactstrap';
class Detail extends Component {
  constructor(){
    super();
    this.state = {
      data : []
    }
  }
  componentWillMount(){
    let { match } = this.props;
    let { id, ngay } = match.params;
    let { citys } = this.props.citys;
    this.props.actions.feactWeather(citys[id].key, ngay)
      .then(list => {
        this.setState({data: list});
      })
      .catch(er => {
        this.setState({data: [] } );
      });
    
  }

  render() {
    let { match } = this.props;
    let { id } = match.params;
    let { citys } = this.props.citys;
    let { data } = this.state;
    let listItem =  ( data.list )
    ? ( data.list.map( (e, i) => {
      console.log(e);
      return (<ItemWeather key={i} title={ `${data.info.name} Ngày ${e.date}` }>
        <Table>
          <thead>
            <tr>
              <th>Nhiệt Độ TB<sup>o</sup>C</th>
              <th>Nhiệt Độ TB <sup>o</sup>F</th>
              <th>Hình Ảnh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ e.data.temp_c }</td>
              <td>{ e.data.temp_f }</td>
              <td>
                <img src={`https:${e.data.condition.icon}`} alt=""/>
              </td>
            </tr>
          </tbody>
        </Table>
      </ItemWeather>)
    }) )
    : ( <h4 className="text-center">Loadding.................</h4>);

    return (
      <div>
        <h1 className="text-center">Chi Tiết: { citys[id].name } </h1>
        <div className="offset-md-2 col-md-8">
          { listItem }
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state: any) => {
  let { citys } = state;
  return { 
    citys
  };
};

let mapDispatchToProp = (dispatch): any => {
  let actions = bindActionCreators({
    ...WeatherActions
  }, dispatch);

  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProp)(Detail);