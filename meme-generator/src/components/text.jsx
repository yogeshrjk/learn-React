import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

const Text = () => {
    return (
        <Draggable bounds="parent">
            <div>
                <h1>Put your thought</h1>
            </div>
        </Draggable>
    );
};

export default Text;