let constraintObj = { 
	audio: false, 
	video: { 
		facingMode: "user", 
		width: { min: 640, ideal: 1280, max: 1920 },
		height: { min: 480, ideal: 720, max: 1080 } 
	} 
}; 


navigator.mediaDevices.enumerateDevices()
.then(devices => {
	devices.forEach(device=>{
		console.log(device.kind.toUpperCase(), device.label);
		//, device.deviceId
	})
})
.catch(err=>{
	console.log(err.name, err.message);
})
        

navigator.mediaDevices.getUserMedia(constraintObj).then(function(mediaStreamObj) {
	//conecteaza streamul media  la primul element media
	let video = document.querySelector('video');
	if ("srcObject" in video) {
		video.srcObject = mediaStreamObj;
	} else {
		//versiunea veche
		video.src = window.URL.createObjectURL(mediaStreamObj);
	}
	
	video.onloadedmetadata = function(ev) {
		//afiseaza ce este capturat de camera
		video.play();
	};
	
	//adauga listeners pentru salvat imagine si audio
	let start = document.getElementById('btnStart');
	let stop = document.getElementById('btnStop');
	let vidSave = document.getElementById('vid2');
	let mediaRecorder = new MediaRecorder(mediaStreamObj);
	let chunks = [];
	
	start.addEventListener('click', (ev)=>{
		mediaRecorder.start();
		console.log(mediaRecorder.state);
	})
	stop.addEventListener('click', (ev)=>{
		mediaRecorder.stop();
		console.log(mediaRecorder.state);
	});
	mediaRecorder.ondataavailable = function(ev) {
		chunks.push(ev.data);
	}
	mediaRecorder.onstop = (ev)=>{
		let blob = new Blob(chunks, { 'type' : 'video/mp4;' });
		chunks = [];
		let videoURL = window.URL.createObjectURL(blob);
		vidSave.src = videoURL;
	}
})
.catch(function(err) { 
	console.log(err.name, err.message); 
});
