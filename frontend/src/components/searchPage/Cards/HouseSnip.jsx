//import React ,{useState,useEffect}from 'react'
import housesData from "../../../data/HouseData/Data/data"
import Card from 'react-bootstrap/Card';
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

return (
  <>
    <div className=" pt-3 bg-gradient-to-r from-sky-500 to-indigo-500 stock-container grid grid-cols-4 gap-3 object-center pl-10 pb-3">
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
  </>
)
}

export default HouseSnip