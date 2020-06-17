import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { connect } from 'react-redux'

import DeleteIcon from 'react-ionicons/lib/IosTrash'

import * as actions from '../../../store/actions/index'
import classes from './Step.module.css'


const getItemStyle = (isDragging, draggableStyle) => {
    let variableStyles = {}

    if (isDragging) {
        variableStyles = {
            boxShadow: "0px 0px 16px 4px #ddd",
            background: "white"
        }
    } else {
        variableStyles = {
            boxShadow: "0px 0px 8px 4px #eee",
            background: "white"
        }
    }

    return {
        userSelect: "none",
        padding: 16,
        margin: "0 0 16px 0",
        borderRadius: "5px",
        ...variableStyles,
        ...draggableStyle,
    };
};

const step = (props) => {

    let tagColor
    switch (props.stepType) {
        case 'Content': tagColor = '#ff5400'; break;
        case 'Pathway': tagColor = '#ff0054'; break;
        case 'Shared Step': tagColor = '#9b5de5'; break;
    }

    // These styles are kinda messed up, with the transform and all.
    // TODO: Get a real front-end dev to fix these.
    const typeStyle = {
        display: "inline-block",
        backgroundColor: tagColor,
        height: "23px",
        borderRadius: "5px",
        fontSize: "15px",
        boxSizing: "border-box",
        paddingLeft: "10px",
        paddingRight: "10px",
        marginTop: "auto",
        marginBottom: "auto",
        transform: "translateY(-20%)",
        textAlign: "center",
        color: "white",
        fontWeight: "800",
        verticalAligh: "middle"
    }

    const content = props.content.length < 40 ? props.content
                                              : `${props.content.slice(0, 40)}...`

    return (
        <Draggable
            key={props.id}
            draggableId={props.id.toString()}
            index={props.index}
        >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                    )}
                >
                    <div className={classes.StepTitle}>
                        <p>{content}</p>
                    </div>
                    <div className={classes.BottomRow}>
                        <div style={typeStyle}>
                            <p>{props.stepType}</p>
                        </div>
                        <div 
                            className={classes.DeleteBtn}
                            onClick={() => props.onDeleteStep(props.id)}
                        >
                            <DeleteIcon color="#aaa" fontSize="30px"/>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteStep: (stepId) => dispatch(actions.deleteStep(stepId))
    }
}

export default connect(null, mapDispatchToProps)(step)