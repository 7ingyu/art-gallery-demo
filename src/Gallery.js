export default function Gallery ({
  title, primaryImage, artistDisplayName, medium, objectID
}) {
  return (
    <div>
      <h2 className="text-center">{title}</h2>
      {!!primaryImage &&
        <img className="img-fluid" src={primaryImage} alt={title} />
      }
      <ul>
        <li>Artist: {artistDisplayName}</li>
        <li>Medium: {medium}</li>
      </ul>
    </div>
  );
}