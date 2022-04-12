import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
//import handleSelect from 'home';

function DropMenu({handleSelect, value}) {
    return (
    <div className="App container">
    <DropdownButton
     // alignRight
      title="Select Category"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="All">all</Dropdown.Item>
              <Dropdown.Item eventKey="Latest">latest</Dropdown.Item>
              <Dropdown.Item eventKey="Classics">classics</Dropdown.Item>
              <Dropdown.Item eventKey="Animals">animals</Dropdown.Item>
              <Dropdown.Item eventKey="Crypto">crypto</Dropdown.Item>
              <Dropdown.Item eventKey="Cooking">cooking</Dropdown.Item>
              <Dropdown.Item eventKey="Relationship">relationship</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="Some link">some link</Dropdown.Item>
      </DropdownButton>
      <h4>You selected {value}</h4>
    </div>
  );
}
export default DropMenu;