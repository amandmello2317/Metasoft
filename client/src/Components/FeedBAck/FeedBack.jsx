import React, { useState } from 'react'
import "./feedback.css"

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Paper, TextareaAutosize } from '@mui/material';

import axios from "axios"
import { Port } from '../../Port';
import { useNavigate } from 'react-router-dom';

export default function FeedBack() {

  const [values, setValues] = useState([])
  // const [value, setValue] = useState(2);
  const [visit, setVisit] = useState()


  const [foodValue, setFoodValue] = useState(1)
  const [serviceValue, setServiceValue] = useState(1)
  const [experienceValue, setExperienceValue] = useState(1)

  const navigate = useNavigate()


  console.log(foodValue);

 

  const handleChange = (e) => {

    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  console.log(values);


  const handleSubmit = () => {
    axios.post(`${Port}/api/feedback/feedbackinsert`, values).then((res) => {
      alert("Submited")
      navigate("/table")
    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <div>
      <Paper elevation={3} className='feedback'>

        <div className="logo" >
          <img className='logoImg' src="https://s3-alpha-sig.figma.com/img/723b/7ef0/fdaab7ac1c279227eed74dde34a8541f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZJEhN3Hunxo9DBOCc86n-gDYu718p9XcOpCtAUptEbQfad~CB2BBHKEZwmK6EYq2yB-GYqgIw4oXBDOP2xQrut2QXCX5wMK3BbTgyzUuo-tVOuimWw04jknJ78~k5W1orSQx9gyF~sNl6CwI8ajz1HMmd90xr3bZds15SvXHJfmLOT6kA28NVrLOQk8Gh2lcu8rAvFGNZqxOlvVXLBW6e5zw6sWNAcr73QufMh5Qm~55LjL7vxPB~J9lEgDKZNImiu8odFGTEvdkXRfes5rEfMPTUs~1wqTJBiDQFLwRxQKZlBSAAxs2bhSq8-bbAtG~6Sgx3V8iM-KKkstZrBFY7w__" alt="" />
        </div>

        <div className="img">
          <img src="https://s3-alpha-sig.figma.com/img/cb8c/9af4/d203120abada02a69052e18856bf1a40?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ivWA6CWQHI5Y1qqHI~QFDDWjBiTlsBfzFuXgAWD863RjpumzBtKxWslVxQAChrMiLRyj7E4rkmBwzmIiWG45QUYhQQFLcoIkAD0tpTwceAYC8HZtQPQwBruAxKCbfWKiwMl5yzUv29IV2viOJDxKM6ShDMpfZy8dlrtmLVMpFNpUA1EDmsTU5izn3KJISuC~btIishibglPhsDWser20ihoX0EHiiAfmB7xOl25Y0BMlGUGwFRqmGgtyuG-rEwCtAOkbYZm7lyVASwVWC5wJFOV6005XI7pXt40n5RhR6sddukjhplnmsS-9HSbSBqoJ-2txqwyfKVS-i45CQsm9tA__" alt="" className='imgBackground' />
        </div>

        <div className="details">
          <div className="infoText">
            <div className='firstinfo'>
              <h2>Hello, Thanks for Visiting</h2>
            </div>

            <div className="secondInfo">
              <p style={{ textAlign: "center", fontWeight: "bold" }}>Please help us improve our cafe services by filling in our feedback form. Thank you!</p>
            </div>
          </div>

          <div className="ratingFeedback">

            <div className="select">
              <div className="text">
                <p>How often do you visit here?</p>
              </div>

              <div className="selectItem">
                <select name="visit" id="" style={{ width: "200px", height: "30px" }} onClick={handleChange}>
                  <option disabled>Select One</option>
                  <option value="Regular">Regular</option>
                  <option value="sometime">some Time</option>
                  <option value="onceinweek">Once in week</option>
                  <option value="Never">Never</option>
                </select>
              </div>

              <div className="QualityFoodRating">

                <div className='ratingBar'>
                  <Box
                    sx={{
                      '& > legend': { mt: 2 },
                    }}
                  >
                    <Typography component="legend">Quality of the food</Typography>
                    <Rating
                      name="food"
                      value={foodValue}
                      onChange={(e, newValue) => {
                        handleChange(e)
                        setFoodValue(newValue)
                      }}
                    />
                  </Box>
                </div>
              </div>

              <div className="QualityFoodRating">


                <div className='ratingBar'>
                  <Box
                    sx={{
                      '& > legend': { mt: 2 },
                    }}
                  >
                    <Typography component="legend">Service quality</Typography>
                    <Rating
                      name="service"
                      value={serviceValue}
                      // onChange={handleChange}
                      onChange={(e, newValue) => {
                        handleChange(e)
                        setServiceValue(newValue)
                      }}
                    />
                  </Box>
                </div>
              </div>

              <div className="QualityFoodRating">


                <div className='ratingBar'>
                  <Box
                    sx={{
                      '& > legend': { mt: 2 },
                    }}
                  >
                    <Typography component="legend">Over All Experience</Typography>
                    <Rating
                      name="experince"
                      value={experienceValue}

                    

                      onChange={(e, newValue) => {
                        handleChange(e)
                        setExperienceValue(newValue)
                      }}
                    />
                  </Box>
                </div>
              </div>

              <div className="QualityFoodRating">
                <div className="text">
                  <p>Would you recommend our restaurant to others?</p>
                </div>

                <div className='ratingBar'>
                  <input type="radio" name='recommend' value="yes" onChange={handleChange} />Yes
                  <input type="radio" name='recommend' value="no" onChange={handleChange} />No
                </div>
              </div>


              <div className="QualityFoodRating">
                <div className="text">
                  <p>Your suggestions to improve</p>
                </div>

                <div className='ratingBar'>

                  <TextareaAutosize name='suggestion' onChange={handleChange} />
                </div>
              </div>

              <div className="submitButton" style={{ marginTop: "10px", marginBottom: "10px" }}>
                <Button variant="contained" onClick={() => 
                handleSubmit()}>Submit</Button>
              </div>

            </div>
          </div>


        </div>

      </Paper>
    </div>
  )
}
