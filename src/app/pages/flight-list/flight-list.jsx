import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';

import Button from '../../components/button';
import Breadcrumbs from '../../components/breadcrumbs';
import Input from '../../components/input';
import ICarousel from '../../components/carousel';
import IconLogOut from '../../../assets/images/icon-logout.svg';
import Flist from '../../components/flist';
import {
  logout,
  getFlights,
  addToFav,
  removeFromFav,
} from '../../store/actions';
import { formatDate } from '../../utils/utils';

import './flight-list.scss';
import 'react-datepicker/dist/react-datepicker.css';

class FlightList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date(),
    };
  }

  componentDidMount() {
    const { getFlights } = this.props;
    const date = new Date();
    getFlights(formatDate(date));
  }

  onChange = (date) => {
    const { getFlights } = this.props;
    getFlights(formatDate(date));

    this.setState({
      startDate: date,
    });
  };
  onLogOut = () => {
    const { logout } = this.props;

    logout();
  };

  render() {
    const { flights, favs, addToFav, removeFromFav } = this.props;
    const { startDate } = this.state;
    return (
      <div className="flight-list">
        <Button
          className="btn--logout flight-list__btn"
          text="Выйти"
          hasOnClick="true"
          onClick={this.onLogOut}
        />
        <div className="flight-list__inner">
          <div className="flight-list__inner-top">
            <Breadcrumbs />
            <div className="flight-list__inner-datapicker">
              <DatePicker
                selected={startDate}
                onChange={this.onChange}
                dateFormat="MMM do yyyy"
              />
            </div>
          </div>

          <div className="flight-list__inner-carousel">
            <ICarousel />
          </div>

          <div className="flight-list__inner-fav-count">
            Добавлено в Избранное: <span>{favs.length}</span> рейсов
          </div>

          <div className="flight-list__inner-list">
            <Flist
              flightList={flights}
              favs={favs}
              addToFav={addToFav}
              removeFromFav={removeFromFav}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  flights: state.flightList,
  favs: state.favs,
});

export default connect(mapStateToProps, (dispatch) => ({
  logout: () => dispatch(logout()),
  getFlights: (date) => dispatch(getFlights(date)),
  addToFav: (id) => dispatch(addToFav(id)),
  removeFromFav: (id) => dispatch(removeFromFav(id)),
}))(FlightList);
