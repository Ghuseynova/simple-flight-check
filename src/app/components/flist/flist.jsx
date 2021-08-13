import React from 'react';
import PlainIcon from '../../../assets/images/icon-plain.svg';

import './flist.scss';

const Flist = ({ flightList, favs, addToFav, removeFromFav }) => {
  const fListItems =
    flightList !== null &&
    flightList.map((fListItem, index) => {
      const {
        id,
        departure,
        arrival,
        date,
        flightTime,
        airlane,
        price,
      } = fListItem;

      const isFav = favs.includes(id);

      return (
        <li className="flist__item" key={`item_${index}`}>
          <div className="flist__item-col flist__item-col--left">
            <div className="flist__item-icon">
              <img src={PlainIcon} alt="item icon" />
            </div>
          </div>
          <div className="flist__item-col flist__item-col--center">
            <div className="flist__item-col-item">
              <h3 className="flist__item-departure">{departure}</h3>
              <h3 className="flist__item-arrival">{arrival}</h3>
            </div>

            <div className="flist__item-col-item">
              <p className="flist__item-date">{date}</p>
              <p className="flist__item-time">{flightTime}</p>
            </div>
            <div className="flist__item-col-item">
              <div className="flist__item-airplane">{airlane}</div>
            </div>
          </div>
          <div className="flist__item-col flist__item-col--right">
            <div
              className={`flist__item-fav ${isFav ? 'is-added' : ''}`}
              onClick={() => {
                if (isFav) {
                  removeFromFav(id);
                } else {
                  addToFav(id);
                }
              }}
            ></div>
            <div className="flist__item-price">
              Price:<span>{price}</span>
            </div>
          </div>
        </li>
      );
    });
  return <ul className="flist">{flightList !== null && fListItems}</ul>;
};

export default Flist;
