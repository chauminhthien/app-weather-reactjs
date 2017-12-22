import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Home extends Component {

  handelSubmit = (e) => {
    e.preventDefault();
    let id = this._optionCity.value;
    let ngay = this._optionDay.value;
    let url = `/detail/${id}/${ngay}`;
    this.props.history.push(url);
  }

  render() {
    let { citys, ordered } = this.props.citys;
    let days = [
      { id: "1", value: "Xem Trong 1 Ngày"},
      { id: "2", value: "Xem Trong 2 Ngày"},
      { id: "3", value: "Xem Trong 3 Ngày"},
      { id: "4", value: "Xem Trong 4 Ngày"},
      { id: "5", value: "Xem Trong 5 Ngày"},
      { id: "6", value: "Xem Trong 6 Ngày"},
      { id: "7", value: "Xem Trong 7 Ngày"}
    ];

    let optionCitys = ordered.map((e, i) =>{
      return (<option key={ i } value={ e }>{ citys[e].name }</option>);
    });

    let optionDays = days.map((e, i) =>{
      return (<option key={ i } value={e.id }>{ e.value }</option>);
    });

    return (
      <div>
          <h1 className="text-center">Web App Weather</h1>
          <div className="offset-md-2 col-md-8" style={{marginTop: "150px"}}>
            <form onSubmit={ this.handelSubmit }>
              <div className="row">
                <div className="col">
                <select className="form-control" ref={e => this._optionCity = e} >
                  {optionCitys}
                </select>
                </div>
                <div className="col">
                  <select className="form-control" ref={e => this._optionDay = e} >
                    { optionDays }
                  </select>
                </div>
                <div className="col-md-2">
                  <button type="submit" className="btn btn-success">Kiểm Tra</button>
                </div>
              </div>
            </form>
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
  
  }, dispatch);

  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProp)(Home);