import { Draggable } from "react-beautiful-dnd";
import { IUser } from "../../types";
import User from "./user";

interface IDraggableUserProps {
  user: IUser;
  dragIndex: number;
}

const DraggableUser: React.VFC<IDraggableUserProps> = ({ user, dragIndex }) => {
  return (
    <Draggable draggableId={user.id.toString()} index={dragIndex}>
      {(provided, snapshot) => (
        <User
          ref={provided.innerRef}
          provided={provided}
          snapshot={snapshot}
          user={user}
        />
      )}
    </Draggable>
  );
};

export default DraggableUser;
