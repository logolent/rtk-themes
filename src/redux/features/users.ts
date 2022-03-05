import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IDndDropEvent, IUser } from "../../types";
import { moveArrayItem } from '../../utils/array';

const initialState: IUser[] = [
  {
    id: 1,
    name: "user 1",
  },
  {
    id: 2,
    name: "user 2",
  },
  {
    id: 3,
    name: "user 3",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IUser>) => {
      return [
        ...state,
        action.payload
      ];
    },
    changePosition: (state, action: PayloadAction<IDndDropEvent>) => {
      const payload = action.payload;
      const currentState = current(state);

      const from = payload.sourceIndex;
      const to = payload.destinationIndex;
      const users = moveArrayItem(currentState, from, to);
      return users;
    }
  },
});

const { actions, reducer } = usersSlice;

export const { add, changePosition } = actions;

export const users = (state: RootState) => state.users;

export default reducer;
