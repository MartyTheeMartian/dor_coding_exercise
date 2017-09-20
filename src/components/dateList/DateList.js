import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllDate} from '../../actions'
const mapStateToProps = (state, ownProps) => {
  // console.log('state=',state);
  return {in_counts: state.loadAllData}
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getAllDate}, dispatch);
};

class DateList extends Component {

  componentDidMount = () => {
    this.props.getAllDate();
  }

  renderList = (list) => (list.map((item, index) =>
  (<tr key={index}>
      <td className="date">
        { item.date }
      </td>
      <td>
        <div className="bar"></div>
        {` amount is ${ item.in_count }`}
      </td>
    </tr>)
  ));

  render() {
    if(this.props.in_counts.data){
    return (
      <div className="dateList-container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>
                <h4>
                  <strong>
                    Refresh
                  </strong>
                </h4>
              </th>
              <th>
                <h4>
                  <strong>
                    Last updated 12:30:23
                  </strong>
                </h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderList(this.props.in_counts.data)}
          </tbody>
        </table>
      </div>
    )
  } else {
    return <div>nothing</div>
   }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateList);
