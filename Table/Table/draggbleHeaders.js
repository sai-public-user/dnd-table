import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { hidden } from 'ansi-colors';

const DragableHeader = (props) => {
  const { setHeaderOrder, headers, noDrag } = props;
  let FinalResult = headers;

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onEnd = (result) => {
    if (result.destination) {
      FinalResult = reorder(
        FinalResult,
        result.source.index,
        result.destination.index,
      );
      setHeaderOrder(FinalResult);
    }
  };

  const grid = 30;

  const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  background: isDragging ? 'lightsteelblue' : '#257aa0',
  padding: '0.65rem',
  width: `${100 / headers.length}%`,
  // borderRadius: '6px',
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? '#257aa0' : '#257aa0',
  'overflow-x': 'hidden',
});

  return (
    <DragDropContext onDragEnd={onEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided, snapshot) => (
          <tr
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}>
            {headers && Array.isArray(FinalResult) && FinalResult.length > 0 ? FinalResult.map((item, index) => (
              item.value ? (
                <Draggable key={item.value} isDragDisabled={noDrag} draggableId={item.value} index={index}>
                  {(provided, snapshot) => (
                    <td
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                    >
                        {item.name}
                    </td>
                  )}
                </Draggable>
              ) : null)) : null}
            {provided.placeholder}
          </tr>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragableHeader;

