import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    const [foodDetails, setFoodDetails] = useState({});

    const { id } = useParams();
    

    useEffect(() => {
        fetchJobData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [id]);
    
      const fetchJobData = async () => {
        const { data } = await axios.get(
          `https://eleven-lab-retaurant-backend.vercel.app/food/${id}`
        );
        setFoodDetails(data);
        // console.log(data);
      };
    
    return (
        <div>
            <p>{foodDetails.name}</p>
        </div>
    );
};

export default FoodDetails;