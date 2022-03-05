import React, { useState } from "react";
import { DropResult, ResponderProvided } from "react-beautiful-dnd";

import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { changePosition, add, users } from "../../redux/features/users";
import { IDndDropEvent } from "../../types";

import TextInputForm from "../../components/TextInputForm";
import DndUsersList from "../../components/DndUsersList";

import "./index.scss";

const UsersContainer: React.VFC = () => {
  const [name, setName] = useState("");

  const usersState = useAppSelector(users);
  const dispatch = useAppDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return;

    dispatch(
      add({
        id: usersState.length + 1,
        name,
      })
    );

    setName("");
  };

  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;

    const userDropEvent: IDndDropEvent = {
      sourceIndex: result.source.index,
      destinationIndex: result.destination.index,
    };
    const userDropAction = changePosition(userDropEvent);
    dispatch(userDropAction);
  };

  return (
    <div className="users-container">
      <TextInputForm
        value={name}
        buttonText="Добавить"
        onSubmit={handleSubmit}
        onChange={handleNameChange}
      />
      <div className="users-container__list">
        <DndUsersList users={usersState} onDragEnd={handleDragEnd} />
      </div>
    </div>
  );
};

export default UsersContainer;
