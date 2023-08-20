import React, { useState } from 'react';
import { DoorMapping, ColorMapping } from '../constants/Constants';

const DoorPreview = ({ selectedOptions }) => {
    const [doorConfig, setDoorConfig] = useState({
        doorShape: null,
        color: null,
        windowShape: null,
    });

    const updateDoorConfig = () => {
        const updatedConfig = { ...doorConfig, ...selectedOptions };
        setDoorConfig(updatedConfig);
    }

    const findDoorSrc = DoorMapping.find(door => {
        return door.id === doorConfig.doorShape;
    })

    const findColor = ColorMapping.find(color => {
        return color.id === doorConfig.color;
    })

    const findGlassSrc = DoorMapping.find(door => {
        return door.id === doorConfig.doorShape;
    })

    React.useEffect(() => {
        updateDoorConfig();
    }, [selectedOptions]);

    return (
        <div className='flex h-full'>
            <div className="DoorConfig">
                <div className="DoorPreview">
                    {/* Render door preview based on doorConfig */}
                    {/* You can display an image or a visual representation of the door */}
                </div>
                <div className="DoorDetails">
                    <h2>Door Details</h2>
                    <p>Shape: {doorConfig.doorShape || 'N/A'}</p>
                    <p>Color: {doorConfig.color || 'N/A'}</p>
                    <p>Window Shape: {doorConfig.windowShape || 'N/A'}</p>

                    <img src={
                        DoorMapping.filter(door => {
                            return door.id === doorConfig.doorShape;
                        }).src
                    } alt="Selected Image" className="max-w-full max-h-full" />

                    <img src={
                        ColorMapping.filter(color => {
                            return color.id === doorConfig.color;
                        }).previewSrc
                    } alt="Selected Image" className="max-w-full max-h-full" />
                    {/* <img src={selectedImage} alt="Selected Image" className="max-w-full max-h-full" /> */}
                </div>
            </div>

            {/* {selectedImage && showSelectedImage && (
                <div className="fixed top-[25%] left-[63%] transform[-translate(-50%, -50%)] max-w-[calc(100% - 60px)] max-h-[calc(100% - 60px)] flex items-center justify-center bg-black bg-opacity-80">
                    <img src={selectedImage} alt="Selected Image" className="max-w-full max-h-full" />
                </div>
            )} */}
        </div>
    );

}

export default DoorPreview;