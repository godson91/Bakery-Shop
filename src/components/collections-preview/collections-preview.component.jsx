import './collections-preview.styles.scss';

const CollectionsPreview = ({ title, items }) => {
  return (
    <div className="collections-preview">
      <h1>{title}</h1>
      <div>
        {items.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsPreview;
