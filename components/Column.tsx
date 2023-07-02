import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import TodoCard from "./TodoCard";
import { BsPlusCircleFill } from "react-icons/bs";
import { useBoardStore } from "@/store/AppStore";
import { useModalStore } from "@/store/ModalStore";
type Props = {
  id: TypeColumn;
  todos: Todo[];
  index: number;
};
const idtostring: {
  [key in TypeColumn]: string;
} = {
  todo: "To Do",
  inprogress: "In Progress",
  done: "Done",
};
const Column = ({ id, todos, index }: Props) => {
  const [searchString, setNewTaskType] = useBoardStore((state) => [
    state.searchString,
    state.setNewTaskType,
  ]);
  const [openModal] = useModalStore((state) => [state.openModal]);
  const handleAddTodo = () => {
    setNewTaskType(id);
    openModal();
  };
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 rounded-xl shadow-sm pt-3 ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-gray-300/50"
                }`}
              >
                <h2 className="flex justify-between font-bold">
                  {idtostring[id]}
                  <span className="h-8 w-8 rounded-[50%] bg-white flex items-center justify-center">
                    {!searchString
                      ? todos.length
                      : todos.filter((todo) =>
                          todo.title
                            .toLowerCase()
                            .includes(searchString.toLowerCase())
                        ).length}
                  </span>
                </h2>
                <div className="space-y-2">
                  {todos.map((todo, index) => {
                    if (
                      searchString &&
                      !todo.title
                        .toLowerCase()
                        .includes(searchString.toLowerCase())
                    ) {
                      return null;
                    }
                    return (
                      <Draggable
                        key={todo.$id}
                        draggableId={todo.$id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <TodoCard
                            todo={todo}
                            index={index}
                            id={id}
                            innerRef={provided.innerRef}
                            draggableProps={provided.draggableProps}
                            dragHandleProps={provided.dragHandleProps}
                          />
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                  <div className="flex justify-end mt-2">
                    <button
                      className=" text-green-500 px-2 py-1 rounded-md"
                      onClick={handleAddTodo}
                    >
                      <BsPlusCircleFill size={30} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
