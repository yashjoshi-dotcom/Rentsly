//import React ,{useState,useEffect}from 'react'
import housesData from "../HouseData/Data/data"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SearchBar from "../SearchBar/SearchBar";

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
      <div className="stock-container">
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
            <Card key ={data.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                Location: {data.address}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Price:   {data.price}</ListGroup.Item>
              <ListGroup.Item>Carpet  Area: {data.surface}</ListGroup.Item>
              <ListGroup.Item>Bedrooms: {data.bedrooms}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://www.sanfransentinel.com/renstly-1.html">Know More</Card.Link>
            </Card.Body>
          </Card>
      

          );
        })}
      </div>
    </>
  )
}

export default HouseSnip