// function ProfileCard(props) {
//   const { title, handle } = props;

//   return (
//     <div>
//       <div>Title is {title}</div>
//       <div>Handle is {handle}</div>
//     </div>
//   );
// }
function ProfileCard({ title, handle, image, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure class="image is-3by3 ">
          <img src={image} alt="pda logo" />
        </figure>
      </div>
      <div className="card-content">
        <div class="media-content">
          <h3 className="title is-4">{title}</h3>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
