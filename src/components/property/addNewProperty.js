import React, { useState } from 'react';
import '../../stylesheets/property.css';
import axios from 'axios';

import PopupFormR from './popupformR.js';
import PopupFormUnR from './popupformUnR.js';
import RegisteredLot from './registeredLot.js';
import UnregisteredLot from './unregisteredLot.js';
import url from '../../config.js';

import { useCookies } from 'react-cookie';

function AddNewProperty(props) {
  const { modalId, isEditTrue, setIsEditTrue, setBoolVal } = props;

  const [buildingName, setBuildingName] = useState(null);
  const [unit, setUnit] = useState(null);
  const [streetNo, setStreetNo] = useState(null);
  const [street, setStreet] = useState(null);
  const [suburb, setSuburb] = useState(null);
  const [state, setState] = useState(null);
  const [postCode, setPostCode] = useState(null);
  const [country, setCountry] = useState(null);
  const [current, setCurrent] = useState('general');
  const [tempRegistered, setTempRegistered] = useState([]);
  const [tempUnregistered, setTempUnregistered] = useState([]);

  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const loggedInToken = cookies.token;

  function renderRegisteredLots() {
    return tempRegistered?.map((registeredLot) => {
      return (
        <RegisteredLot
          modal={9}
          registeredLot={registeredLot}
          isEditTrue={isEditTrue}
          setIsEditTrue={setIsEditTrue}
        />
      );
    });
  }

  function renderUnregisteredLots() {
    return tempUnregistered?.map((unregisteredLot) => {
      return (
        <UnregisteredLot
          modal={10}
          unregisteredLot={unregisteredLot}
          isEditTrue={isEditTrue}
          setIsEditTrue={setIsEditTrue}
        />
      );
    });
  }

  function renderGeneral() {
    return (
      <div className='generalDiv'>
        <div
          // style={{ marginTop: "10%" }}
          className='row '
        >
          <div className='col-4'>
            <p>Building Name</p>
          </div>
          <div className='col-4'>
            <p>Unit</p>
          </div>
          <div className='col-4'>
            <p>Street No.</p>
          </div>
          <div className='col-4'>
            <input
              type='text'
              value={buildingName}
              onChange={(e) => {
                setBuildingName(e.target.value);
              }}
            />
          </div>
          <div className='col-4'>
            <input
              type='text'
              value={unit}
              onChange={(e) => {
                setUnit(e.target.value);
              }}
            />
          </div>
          <div className='col-4'>
            <input
              type='text'
              value={streetNo}
              onChange={(e) => {
                setStreetNo(e.target.value);
              }}
            />
          </div>
          <div className='col-4'>
            <p>Street</p>
          </div>
          <div className='col-4'>
            <p>Suburb</p>
          </div>
          <div className='col-4'>
            <p>State</p>
          </div>
          <div className='col-4'>
            <input
              type='text'
              value={street}
              onChange={(e) => {
                setStreet(e.target.value);
              }}
            />
          </div>
          <div className='col-4'>
            <input
              type='text'
              value={suburb}
              onChange={(e) => {
                setSuburb(e.target.value);
              }}
            />
          </div>
          <div className='col-4'>
            <input
              type='text'
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
          </div>
          <div className='col-4'>
            <label>Post Code</label>
            <input
              type='text'
              value={postCode}
              onChange={(e) => {
                setPostCode(e.target.value);
              }}
            />
          </div>
          <div className='col-4'>
            <label>Country</label>
            <input
              type='text'
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  function renderAttachedLots() {
    return (
      <div>
        <div className='2'>
          <div className='propertyPageHeadings'>
            <h6 className='propertyPageHeads'>Add/Edit Registered Lots</h6>
            <button
              className='propertyPageBtns'
              data-bs-toggle='modal'
              data-bs-target='#staticBackdrop4'
              onClick={() => {
                setIsEditTrue(false);
              }}
            >
              + Add
            </button>
            <PopupFormR
              modalId={4}
              tempRegistered={tempRegistered}
              setTempRegistered={setTempRegistered}
              isEditTrue={isEditTrue}
            />
          </div>
          <div className='propertyPagesubHeads'>
            <div className='row'>
              <div className='col-1'>
                <h6>Edit</h6>
              </div>
              <div className='col-2'>
                <h6>Title Ref</h6>
                <input type='text'></input>
              </div>
              <div className='col-1'>
                <h6>LotNo.</h6>
                <input type='text'></input>
              </div>
              <div className='col-1'>
                <h6>Section</h6>
                <input type='text'></input>
              </div>
              <div className='col-3'>
                <h6>Deposited Plan No.</h6>
                <input type='text'></input>
              </div>
              <div className='col-2'>
                <h6>Strata Plan</h6>
                <input type='text'></input>
              </div>
              <div className='col-2'>
                <h6>Description</h6>
                <input type='text'></input>
              </div>
            </div>
            <div className='lotsScrollDiv'>{renderRegisteredLots()}</div>
          </div>
        </div>
        <div className='3'>
          <div className='propertyPageHeadings'>
            <h6 className='propertyPageHeads'>Add/Edit Unregistered Lots</h6>
            <button
              className='propertyPageBtns'
              data-bs-toggle='modal'
              data-bs-target='#staticBackdrop5'
            >
              + Add
            </button>
            <PopupFormUnR
              modalId={5}
              tempUnregistered={tempUnregistered}
              setTempUnregistered={setTempUnregistered}
              addBtn={1}
            />
          </div>
          <div className='propertyPagesubHeads'>
            <div className='row'>
              <div className='col-1'>
                <h6>Edit</h6>
              </div>
              <div className='col-2'>
                <h6>LotNo.</h6>
                <input type='text'></input>
              </div>
              <div className='col-2'>
                <h6>Part of Lot</h6>
                <input type='text'></input>
              </div>
              <div className='col-1'>
                <h6>Section</h6>
                <input type='text'></input>
              </div>
              <div className='col-3'>
                <h6>Plan Number</h6>
                <input type='text'></input>
              </div>
              <div className='col-3'>
                <h6>Description</h6>
                <input type='text'></input>
              </div>
            </div>
            <div className='lotsScrollDiv'>{renderUnregisteredLots()}</div>
          </div>
        </div>
      </div>
    );
  }

  function onSave() {
    console.log('in bada save reg', tempRegistered);
    console.log('in bada save unreg', tempUnregistered);
    const data = {
      buildingName: buildingName,
      unit: unit,
      streetNo: streetNo,
      street: street,
      suburb: suburb,
      state: state,
      postCode: postCode,
      country: country,
      registeredProperties: tempRegistered,
      unregisteredProperties: tempUnregistered,
    };
    console.log(data);
    axios
      .post(
        `${url}/api/property`,
        {
          requestId: '1123445',
          data: data,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${loggedInToken}`,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log('adding new property', response.data);
        setBoolVal(false);
      });
  }

  return (
    <div
      className='modal fade'
      id='staticBackdrop3'
      data-bs-backdrop='static'
      data-bs-keyboard='false'
      tabindex='-1'
      aria-labelledby='staticBackdropLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered modal-lg'>
        <div
          // style={{ height: "32rem" }}
          className='modal-content popupNewProperty'
        >
          <div className='modal-header newPropertyHead'>
            <h5 className='modal-title' id='staticBackdropLabel'>
              Add New Property
            </h5>
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='newPropertyBtnTray'>
            <div>
              <button
                className={
                  current === 'general'
                    ? 'newPropertyMainBtns newPropertyMainBtnsClicked'
                    : 'newPropertyMainBtns'
                }
                onClick={() => {
                  setCurrent('general');
                }}
              >
                General
              </button>
              <button
                className={
                  current === 'attached'
                    ? 'newPropertyMainBtns newPropertyMainBtnsClicked'
                    : 'newPropertyMainBtns'
                }
                onClick={() => {
                  setCurrent('attached');
                }}
              >
                Attached Lots
              </button>
            </div>
            <div
              style={{ width: '200px', display: 'flex', alignItems: 'center' }}
            >
              {current === 'general' ? (
                <button
                  style={{}}
                  onClick={() => {
                    setCurrent('attached');
                  }}
                  className='propertyPageBtns'
                >
                  Next
                </button>
              ) : (
                <button
                  data-bs-dismiss='modal'
                  style={{}}
                  className='propertyPageBtns'
                  onClick={() => {
                    onSave();
                  }}
                >
                  Save
                </button>
              )}
              <button className='propertyPageBtns' data-bs-dismiss='modal'>
                Cancel
              </button>
            </div>
          </div>
          <div className='modal-body'>
            {current === 'general' ? renderGeneral() : renderAttachedLots()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewProperty;
