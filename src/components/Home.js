import React, { useState } from 'react'
import './home.css'
import CarouselComp from './Carousel/CarouselComp';
// import axios from 'axios';
// import { useEffect } from 'react';
import { useRecordWebcam } from 'react-record-webcam'

// import RecordVideo from './RecordVideo'
export default function Home() {
	const [playing, setPlaying] = useState(false);
	const recordWebcam = useRecordWebcam();

	const url = 'http://127.0.0.1:5000/api/upload';

	// const myImage = document.getElementById('my-image');

	const WIDTH = 388;
	const HEIGHT = 290

	// useEffect(()=>{
	// 	const myData = document.getElementById('my_data');
	// 	myData.style.display = 'none';
	// },[])


	const handleProblem = (passProblem) => {

        if (passProblem === '0') {
            return 'Not Found'
        } else if (passProblem === '1') {
            return "Invalid date of birth"
        } else if (passProblem === '2') {
            return "Passport has Expired"
        } else if (passProblem === '3') {
            return "Invalid date of birth and Passport has Expired"
        } else if (passProblem === '4') {
            return "Invalid passport number"
        } else if (passProblem === '6') {
            return "Passport has Expired and Invalid passport number"
        }else {
            return "Passport has Expired, Invalid passport number and Invalid passport number"
        }

    }

	////////////////////////////// handle video cam 


	const handleOpen = () => {
		setPlaying(true);
		recordWebcam.open();
	}


	const handleContent = (data) => {
		let myData = document.querySelector('#my_card_data')
				myData.innerHTML = `
				<div className="mx-auto text-center">
					<div className="text-primary">Name: ${data.Name} ${data.Surname}</div>
					<div className="text-secondary">Number: ${data.Number}</div>
					<div>Gender: ${data.Sex === 'M' ? 'Male' : 'Female' }</div>
					<div>Date of Birth: ${data.DateOfBirth}</div>
					<div>Country: ${data.Country}</div>
					<div>Problem: ${handleProblem(data.Problem)}</div>
			    </div>
			    `
	}

	const handleSpinner = () => {
		let myData = document.querySelector('#my_card_data')
				myData.innerHTML = `
				<div class="text-center mx-auto">
					<div class="spinner-border" role="status">
						<span class="sr-only">Loading...</span>
					</div>
				</div>
			    `
	}
	const handleStart = async () => {
		recordWebcam.start();
		// handleSpinner();
		await setTimeout(()=>{
			recordWebcam.stop();
			setTimeout(()=> {
				const blob = recordWebcam.getRecording();
				let myData = document.querySelector('#my_card_data')

				blob.then(data =>{
					const form = new FormData()
					form.append('file', data)
					handleSpinner();
					// now upload it
					fetch(url, {
						method: 'POST',
						body: form
					})
					.then(res => {
						res.json()
					})
					.then(data=>{
						handleContent(data);
					}).catch(
						myData.innerHTML = "<div className='text-danger'>Couldn't Recognize Passport</div>"	
					)

				})

				recordWebcam.open();
			},1000)
		}, 5000)
		
	}

	const handleStop = () => {
		setPlaying(false);
		recordWebcam.close();
	}

	return (
		<div className=''>
			<CarouselComp />
			<div className="container mt-4">
			{/* <RecordVideo /> */}
				<div className="">

					<h3 className='my-color text-center '>Let's try...</h3>
					<div className=" mx-auto ">
						<div className="mx-auto my-3 ">


							<p className="text-center lead my-font">Click on play icon to open the camera.</p>
							<div className='mx-auto text-center'>
								<video
									id='video'
									ref={recordWebcam.webcamRef}
									height={HEIGHT}
									width={WIDTH}
									muted
									autoPlay
									className="video mb-3"
								></video> <br />

									{
										playing ? ( <>
											<button className="btn btn-primary mx-2" id='' onClick={handleStart} ><i className="fas fa-video"></i></button>
											<button className="btn btn-secondary mx-2" id='' onClick={handleStop} ><i class="fas fa-pause"></i></button>
											</>
										) : (
											<button className="btn btn-primary" onClick={handleOpen}><i className="fas fa-play"></i></button>
										)
									}
								
							</div>

						</div>
					</div>
					<div>
					<div className="container my-3" id='my_data'>				
						<div className='mx-auto text-center' id='my_card_data'>
							
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>		
	)
}
