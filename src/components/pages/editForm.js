// import React from "react";

// const editForm = () => {
//   const handleEdit = e => {
//     e.preventDefault();
//     fetch(`https://social-page-be.herokuapp.com/social/${props.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify({
//         name: input,
//         image: image,
//         shortdescription: shortdescription,
//         longdescription: longdescription
//       })
//     })
//       .then(imageRef.current.dropzone.removeAllFiles())
//       .catch(error => console.log("put error", error));

//     navigate("/");
//   };

//   return (
//     <div>
//       <div className="form-wrapper">
//         <form className="form" onSubmit={e => handleEdit(e)}>
//           <div className="inputs-wrapper">
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={e => setName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Short Bio"
//               value={shortdescription}
//               onChange={e => setShortdescription(e.target.value)}
//             />
//             <textarea
//               type="text"
//               placeholder="Long Bio"
//               value={longdescription}
//               onChange={e => setLongdescription(e.target.value)}
//             />

//             <div className="dropzone-wrapper">
//               <DropzoneComponent
//                 className="dropzone-image"
//                 ref={imageRef}
//                 config={componentConfig()}
//                 djsConfig={djsConfig()}
//                 eventHandlers={handleSocialDrop()}
//               >
//                 <div className="message">Profile Picture</div>
//               </DropzoneComponent>
//             </div>

//             <button className="btn" type="submit">
//               SAVE
//             </button>
//           </div>
//         </form>
//         <div className="side-bar">
//           <CardFrame form={true} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default editForm;
