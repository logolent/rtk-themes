import { DraggableProvidedDragHandleProps } from "react-beautiful-dnd";

import "./index.scss";

interface IDragHandleProps {
  draggableProps: DraggableProvidedDragHandleProps | undefined;
}

const DragHandle: React.VFC<IDragHandleProps> = ({ draggableProps }) => {
  return (
    <div className="drag-handle" {...draggableProps}>
      <span className="drag-handle__bar"></span>
      <span className="drag-handle__bar"></span>
    </div>
  );
};

export default DragHandle;
