// import React, { useRef, useState, useEffect } from "react";
// import { useReactMediaRecorder } from "react-media-recorder";

// export const Recorder = () => {
//   const [videoRec, setVideoRec] = useState("");
//   const [recording, setRecording] = useState(false);

//   useEffect(() => {
//     if (!recording) {
//       if (navigator.mediaDevices.getUserMedia) {
//         navigator.mediaDevices
//           .getUserMedia({ video: true })
//           .then(function (stream) {
//             videoRef.current.srcObject = stream;
//           })
//           .catch(function (err0r) {
//             console.log("Something went wrong!");
//           });
//       }
//     }
//     console.log(videoRef);
//   }, []);
//   const videoRef = useRef();

//   const { status, startRecording, stopRecording, mediaBlobUrl } =
//     useReactMediaRecorder({ video: true });

//   useEffect(() => {
//     console.log(status);
//     setRecording(true);
//   }, [status]);

//   return (
//     <div className="Recorder">
//       <p>{status}</p>
//       <div className="videos">
//         {recording ? (
//           <video className="videoPreview" ref={videoRef} autoPlay loop muted />
//         ) : (
//           <video
//             className="videoPreview"
//             src={mediaBlobUrl}
//             controls
//             autoPlay
//             loop
//             muted
//           />
//         )}
//       </div>
//       <div className="btns">
//         <button onClick={startRecording}>Start Recording</button>
//         <button onClick={stopRecording}>Stop Recording</button>
//       </div>
//     </div>
//   );
// };

import React from "react";

export const Recorder = () => {
  return <div>hello world</div>;
};
