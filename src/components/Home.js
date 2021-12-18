import React, { useState, useRef } from 'react'
import './home.css'
import CarouselComp from './Carousel/CarouselComp';
// import axios from 'axios';
export default function Home() {

	const [playing, setPlaying] = useState(false);
	const [hasPhoto, setHasPhoto] = useState(false);
	const [image, setImage] = useState();
	const videoRef = useRef()
	const photoRef = useRef()
	const url = 'http://127.0.0.1:5000/api/upload';

	// const myImage = document.getElementById('my-image');

	const WIDTH = 388;
	const HEIGHT = 290

	const startVideo = () => {
		setPlaying(true);
		navigator.getUserMedia(
			{
				video: true,
			},
			(stream) => {
				let video = document.getElementsByClassName('video')[0];
				if (video) {
					video.srcObject = stream;
				}
			},
			(err) => console.error(err)
		);
	};

	const stopVideo = () => {
		setPlaying(false);
		let video = document.getElementsByClassName('video')[0];
		video.srcObject.getTracks()[0].stop();

	};

	const takePhoto = () => {

		setHasPhoto(true);
		let video = videoRef.current;
		let photo = photoRef.current;
		let result = photoRef.current.toDataURL("image/jpg");
		setImage(result)
		let ctx = photo.getContext('2d')
		ctx.drawImage(video, 0, 0, WIDTH, HEIGHT);
	}

	const closePhoto = () => {
		let photo = photoRef.current;
		let ctx = photo.getContext('2d');
		ctx.clearRect(0, 0, photo.width, photo.height);
		setHasPhoto(false);
	}

	// 	function binEncode(data) {
	//     var binArray = []
	//     var datEncode = "";

	//     for (var i=0; i < data.length; i++) {
	//         binArray.push(data[i].charCodeAt(0).toString(2)); 
	//     } 
	//     for (var j=0; j < binArray.length; j++) {
	//         var pad = padding_left(binArray[j], '0', 8);
	//         datEncode += pad + ' '; 
	//     }
	//     function padding_left(s, c, n) { if (! s || ! c || s.length >= n) {
	//         return s;
	//     }
	//     var max = (n - s.length)/c.length;
	//     for (var i = 0; i < max; i++) {
	//         s = c + s; } return s;
	//     }
	//     console.log(binArray);
	// }

	const handleRequest = (e) => {
		e.preventDefault();
		// console.log(image);

		// const actual_img = image;
		// console.log(actual_img)

		// var dataInBase64 = image[0].toDataURL('image/png').replace(/data\:image\/png;base64,/, '');

		// console.log()

		// const binary = binEncode(image);

		fetch(image)
			.then(res => res.blob())
			.then(blob => {
				console.log("here is your binary: ", blob)

				const form = new FormData()
				form.append('file', blob)

				// now upload it
				fetch(url, {
					method: 'POST',
					body: form
				})
			})

	}


	return (
		<div className=''>
			<CarouselComp />
			<div className="container mt-4">
				<div className="row">

					{/* <input type="file" id='my-image'/>
					<button className="btn" onClick={handlePost}>click to add</button> */}

					<h3 className='my-color text-center '>Let's try...</h3>
					<div className="col-lg-6 col-sm-12 ">
						<div className="mx-auto my-3 ">

							{/* <hr /> */}
							<p className="text-center lead my-font">Click on play icon to open the camera.</p>
							<div className='mx-auto text-center'>
								<video
									ref={videoRef}
									height={HEIGHT}
									width={WIDTH}
									muted
									autoPlay
									className="video mb-3"
								></video> <br />


								{playing ? (
									<>
										<button className="btn btn-secondary mx-2" onClick={stopVideo}><i className="fas fa-pause"></i></button>
										<button className="btn btn-primary mx-2" onClick={takePhoto}><i className="fas fa-camera"></i></button>
									</>
								) : (
									<button className="btn btn-primary" onClick={startVideo}><i className="fas fa-play"></i></button>
								)}
							</div>

						</div>
					</div>
					<div className="col-lg-6 col-sm-12">
						<div className="text-center mx-auto my-3">
							<p className="text-center lead my-font">The photo taken will be shown here.</p>


							<canvas
								className="img mx-auto w-xs-100 mb-3"
								ref={photoRef}
								width={WIDTH}
								height={HEIGHT}
							>
							</canvas>


							{
								hasPhoto ? (
									<>
										<br />
										<button className="btn  mx-2 btn-secondary " onClick={closePhoto}><i className="fas fs-5 fa-window-close"></i></button>
										<button className="btn  mx-2 btn-primary" onClick={handleRequest} >Add new passport</button>
									</>
								) : (null)
							}

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

