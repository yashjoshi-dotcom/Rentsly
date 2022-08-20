//import React ,{useState,useEffect}from 'react'
import housesData from "../../../data/HouseData/Data/data"
import Card from 'react-bootstrap/Card';
import ReactSlider from "react-slider";
import Dropdown from 'react-bootstrap/Dropdown'; 
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
//import SearchBar from "../SearchBar/SearchBar";
const image1 = require("../../../img/icons8-bedroom-64.png");
const image2 = require("../../../img/icons8-size-64.png");

const HouseSnip = () => {
 // const API="https://hn.algolia.com/api/v1/search?query=html";
 //const API="https://randomuser.me/api/?nat=us&results=18&page=1";

 //const [houseDetails,setHouseDeatils]= useState([]);


  /* Ignore any comments on this page. These will be removed when being deploed on the mian branch.
  These comments are code developments which was required when fetching the data from an API.
  const fetchApiData= async(url)=>
  {
    try
    {
      const res = await fetch(url);
      const data= await res.json();
      setHouseDeatils(data);
      console.log(data);
    }
    catch(error){
      console.log(error);
    }
  };
  
  useEffect(() => {
    
    fetchApiData(API);
  },[]);
  
  //Deleting this piece of code wont impact working when data is fetched from the Json file directly
*/
const [currentValue, setCurrentValue] = useState(0);
return (
  <>
  <div className="flex bg-gradient-to-r from-sky-500 to-indigo-500">
    <div className="w-1/4 bg-white h-[90vh] mt-3 ml-3 rounded-sm sticky top-3 shadow-md shadow-gray-600 ">
      {/* <div className="x ml-3 text-slate-600 text-[105%]">Price Range</div>
    <ReactSlider
      className="customSlider relative max-w-xs m-auto |   "
      thumbClassName=" customSlider-thumb cursor-pointer w-5 h-5 bg-white border-yellow-400 border-2 rounded-full outline-none  hover: shadow-sm"
      trackClassName="customSlider-track top-2 h-1 bg-yellow-400 "
      markClassName="customSlider-mark cursor-pointer top-1.5 w-{1.5px} h-2 bg-slate-600 text-black"
      marks={20}
      min={0}
      max={100}
      defaultValue={0}
      value={currentValue}
      onChange={(value) => setCurrentValue(value)}
      renderMark={(props) => {
         if (props.key < currentValue) {
           props.className = "customSlider-mark customSlider-mark-before bg-rose-500 text-black";
         } else if (props.key === currentValue) {
           props.className = "customSlider-mark customSlider-mark-active hidden";
         }
         return <span {...props} />;
      }}
    /> */}
        {/* </div> */}

<div className="xyz mt-3">
  <div className="ml-3">
  <div className=" text-slate-600 text-[105%]"> Choose as per your accomodation needs</div>
  <div className=" flex-wrap " >
  <div className="block my-1 "><input type="checkbox" id="Rent" className="mr-2"   Rent/>Rent</div>
  <div className="block my-1"> <input type="checkbox" id="PG" className="mr-2" />PG</div>
  <div className="block my-1"> <input type="checkbox" id="Hostel" className="mr-2" />Hostel</div>
  <div className="block my-1"> <input type="checkbox" id="Buy" className="mr-2" />Buy</div>
  </div>
  </div>
  <div className="x mx-3 mt-3 text-slate-600 text-[105%]">Max Price: ₹30,000</div>
    <ReactSlider
      className="customSlider relative max-w-xs m-auto |   "
      thumbClassName=" customSlider-thumb cursor-pointer w-5 h-5 bg-white border-yellow-400 border-2 rounded-full outline-none  hover: shadow-sm"
      trackClassName="customSlider-track top-2 h-1 bg-yellow-400 "
      markClassName="customSlider-mark cursor-pointer top-1.5 w-{1.5px} h-2 bg-slate-600 text-black"
      marks={20}
      min={0}
      max={100}
      defaultValue={0}
      value={currentValue}
      onChange={(value) => setCurrentValue(value)}
      renderMark={(props) => {
         if (props.key < currentValue) {
           props.className = "customSlider-mark customSlider-mark-before bg-rose-500 text-black";
         } else if (props.key === currentValue) {
           props.className = "customSlider-mark customSlider-mark-active hidden";
         }
         return <span {...props} />;
      }}
    />
  {/* <DropdownButton className="text-black" id="dropdown-basic-button" title="Choose Apartment Size">
      <Dropdown.Item href="#/action-1">1BHK</Dropdown.Item>
      <Dropdown.Item href="#/action-2">2BHK</Dropdown.Item>
      <Dropdown.Item href="#/action-3">3BHK</Dropdown.Item>
    </DropdownButton> */}
<div className="mx-3 mt-7">
  <div className=" text-slate-600 text-[105%] mb-2">Choose Apartment Type</div>
  <div className="flex-wrap">
    <button className=" p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">1 RK</button>
    <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">1 BHK</button>
    <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">2 BHK</button>
    <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">3 BHK</button>
    <button className="p-2 rounded-sm bg-yellow-300 border-0 text-slate-600 mr-2 mb-2 text-sm">4+ BHK</button>
    <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">4 BHK</button>
    <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">4+ BHK</button>
  </div>
</div>

<div className=" text-slate-600 text-[105%] mb-2 mx-3 mt-3">Photos</div>
<div className="block  mx-3 "><input type="checkbox" id="Rent" className="mr-2"   Rent/>Show Only With Photos</div>

<div className="mx-3 mt-3">
  <div className=" text-slate-600 text-[105%] mb-2">Floor</div>
  <div className="flex-wrap">
  <button className=" p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">Ground</button>
    <button className=" p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">1st</button>
    <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">2nd</button>
    <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">3rd</button>
    <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">4th</button>
    <button className="p-2 rounded-sm bg-yellow-300 border-0 text-slate-600 mr-2 mb-2 text-sm">4th</button>
    <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">5th & above</button>
    <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">Custom</button>
  </div>
</div>
</div>

    </div>
    <div className=" pt-3  stock-container grid grid-cols-3 gap-3 w-4/5 object-center pl-10 pb-3">
      {housesData.map((data, key) => {
        return (
       /*   <div  key={key}>
            {data.name +
              " , " +
              data.description +
              " ," +
              data.address +
              ", " +
              data.price}
          </div>
          */
          
          <Card className="shadow-md shadow-gray-500  bg-white bg-opacity-40 rounded-md p-2 transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300" key ={data.id} style={{ width: '18rem' }}>
            <Card.Link  href="https://www.sanfransentinel.com/renstly-1.html">
          <Card.Img variant="top" src={data.image} />
          <Card.Body className="my-2">
            <Card.Title className="rounded-full bg-blue-500 text-white  inline px-2">{data.name}</Card.Title>
            <Card.Text className="font-bold h-11">
              {data.address}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush flex gap-5 text-gray-600 ">
            <ListGroup.Item className="flex"> <img className="object-contain w-8 m-1" src={image1} alt="" /> <div className="self-center">{data.bedrooms} Bedrooms</div></ListGroup.Item>
            <ListGroup.Item className="flex"> <img className="object-contain w-8 m-1" src={image2} alt="" /> <div className="self-center">{data.surface}</div></ListGroup.Item>
          </ListGroup>
          <ListGroup.Item className="font-bold text-xl ml-2">₹{data.price}</ListGroup.Item>
          <Card.Body>
            
          </Card.Body>
        </Card.Link>
        </Card>
    
        );
      })}
    </div>
    </div>
  </>
)
}

export default HouseSnip