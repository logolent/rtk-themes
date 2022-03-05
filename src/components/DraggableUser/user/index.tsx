import React, { useState } from "react";
import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { RoundedArrowDown } from "../../../icons";
import { IUser } from "../../../types";
import DragHandle from "../handle";

import "./index.scss";

interface IUserProps {
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  user: IUser;
}

const User = React.forwardRef<HTMLDivElement, IUserProps>(
  ({ provided, snapshot, user }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleOpen = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div
        className={`user ${snapshot.isDragging ? "user--dragging" : ""}`}
        ref={ref}
        {...provided.draggableProps}
      >
        <div className="user__main-info">
          <DragHandle draggableProps={provided.dragHandleProps} />
          <span className="user__name">{user.name}</span>
          <div className="user__badge">user</div>
          <RoundedArrowDown
            className={`user__icon ${isOpen ? "open" : ""}`}
            onClick={handleToggleOpen}
          />
        </div>

        {isOpen && <div className="user__extra-info">some info about user</div>}
      </div>
    );
  }
);

export default User;
