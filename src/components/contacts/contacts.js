import React, { useEffect, useState } from 'react';
import '../../stylesheets/contacts.css';

import axios from 'axios';
import url from '../../config.js';
import { useCookies } from 'react-cookie';

import AssociatedContacts from '../safeCustody/associatedContacts';
import ContactStripe from '../topStripes/ContactStripe';

function Contacts() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const loggedInToken = cookies.token;
  const [contactLists, setContactLists] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${url}/api/contacts?requestId=1124455&textField=&type=`,
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
        console.log(response.data.data);
        setContactLists(response.data.data.contactLists);
        setFilteredData(response.data.data.contactLists);
        // setSafeCustodyPackets(response.data.data.safeCustodyPackets);
      });
  }, []);

  const filterData = (prop, val) => {
    const newData = filteredData.filter((data) =>
      data[prop].toLowerCase().includes(val.toLowerCase())
    );
    setFilteredData(newData);
  };

  const handleFilter = (e) => {
    const { name } = e.target;

    if (e.target.value === '') {
      setFilteredData(contactLists);
    } else {
      filterData(name, e.target.value);
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        marginLeft: '30px',
        marginRight: '30px',
        paddingBottom: '30px',
      }}
    >
      <div>
        <ContactStripe />
      </div>

      <div className='row associatedContacts'>
        <div className='col-1'></div>
        <div className='col-2'>
          <label> Contact Code</label>
          <input type='text' name='contactCode' onChange={handleFilter}></input>
        </div>
        <div className='col-1'>
          <label>F.Name</label>
          <input type='text' name='firstName' onChange={handleFilter}></input>
        </div>
        <div className='col-1'>
          <label>L.Name</label>
          <input type='text' name='lastName' onChange={handleFilter}></input>
        </div>
        <div className='col-2'>
          <label>Company</label>
          <input type='text' name='companyName' onChange={handleFilter}></input>
        </div>
        <div className='col-1'>
          <label> Type</label>
          <input type='text' name='contactType' onChange={handleFilter}></input>
        </div>
        <div className='col-2'>
          <label>Email Address</label>
          <input
            type='text'
            name='emailAddress'
            onChange={handleFilter}
          ></input>
        </div>
        <div className='col-2'>
          <label>Phone Number</label>
          <input
            type='text'
            name='telephoneNumber'
            onChange={handleFilter}
          ></input>
        </div>
      </div>
      <div>
        {filteredData.map((contact, index) => {
          if (index % 2 == 0)
            return (
              <div className='contacttdatadiv'>
                <div className='row'>
                  <div className='col-1'>
                    <input
                      type='checkbox'
                      style={{ marginLeft: '50%' }}
                    ></input>
                  </div>
                  <div className='col-2'>
                    <p>{contact.contactCode}</p>
                  </div>
                  <div className='col-1'>
                    <p>{contact.firstName}</p>
                  </div>
                  <div className='col-1'>
                    <p>{contact.lastName}</p>
                  </div>
                  <div className='col-2'>
                    <p>{contact.companyName}</p>
                  </div>
                  <div className='col-1'>
                    <p>{contact.contactType}</p>
                  </div>
                  <div className='col-2'>
                    <p>{contact.emailAddress}</p>
                  </div>
                  <div className='col-2'>
                    <p>{contact.telephoneNumber}</p>
                  </div>
                </div>
              </div>
            );
          else {
            return (
              <div className='lightcontacttdatadiv'>
                <div className='row'>
                  <div className='col-1'>
                    <input
                      type='checkbox'
                      style={{ marginLeft: '50%' }}
                    ></input>
                  </div>
                  <div className='col-2'>
                    <p>{contact.contactCode}</p>
                  </div>
                  <div className='col-1'>
                    <p>{contact.firstName}</p>
                  </div>
                  <div className='col-1'>
                    <p>{contact.lastName}</p>
                  </div>
                  <div className='col-2'>
                    <p>{contact.companyName}</p>
                  </div>
                  <div className='col-1'>
                    <p>{contact.contactType}</p>
                  </div>
                  <div className='col-2'>
                    <p>{contact.emailAddress}</p>
                  </div>
                  <div className='col-2'>
                    <p>{contact.telephoneNumber}</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Contacts;
