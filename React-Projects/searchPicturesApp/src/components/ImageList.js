import ImageShow from './ImageShow';
import "./ImageList.css";

function ImageList({ images }) {

    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />; //Add key tot he top-most JSX element
    });

    return <div className="image-list"> {renderedImages} </div>;
}

export default ImageList;