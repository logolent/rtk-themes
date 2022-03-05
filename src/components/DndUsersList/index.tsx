import {
  DragDropContext,
  Droppable,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import { IUser } from "../../types";
import DraggableUser from "../DraggableUser";

import "./index.scss";

interface IDndUsersListProps {
  users: IUser[];
  onDragEnd: (result: DropResult, provided: ResponderProvided) => void;
}

const DndUsersList: React.VFC<IDndUsersListProps> = ({ users, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="drop-users">
        {(provided, snapshot) => (
          <div className="users-list" ref={provided.innerRef}>
            {users.map((user, index) => (
              <DraggableUser key={user.id} user={user} dragIndex={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DndUsersList;
