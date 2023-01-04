import { chatAction } from "../action/chat";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    roomList: reducerUtils.initial(null),
    messageList: reducerUtils.initial(null),
    joinRoom: { id: "" },
    joinRoomList: [],
    createGroupRoom: reducerUtils.initial(null),
    deleteRoom: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case chatAction.roomList:
        case typeUtils(chatAction.roomList).success:
        case typeUtils(chatAction.roomList).error:
            return handleAsyncReducer(
                chatAction.roomList,
                "roomList",
                true
            )(state, action);
        case chatAction.messageList:
        case typeUtils(chatAction.messageList).success:
        case typeUtils(chatAction.messageList).error:
            return handleAsyncReducer(
                chatAction.messageList,
                "messageList",
                true
            )(state, action);
        case chatAction.createGroupRoom:
        case typeUtils(chatAction.createGroupRoom).success:
        case typeUtils(chatAction.createGroupRoom).error:
            return handleAsyncReducer(
                chatAction.createGroupRoom,
                "createGroupRoom",
                true
            )(state, action);
        case chatAction.deleteRoom:
        case typeUtils(chatAction.deleteRoom).success:
        case typeUtils(chatAction.deleteRoom).error:
            return handleAsyncReducer(
                chatAction.deleteRoom,
                "deleteRoom",
                true
            )(state, action);
        case chatAction.joinRoom:
            return {
                ...state,
                joinRoom: data,
            };
        case chatAction.joinRoomList:
            return {
                ...state,
                joinRoomList: [...state.joinRoomList, data],
            };
        case chatAction.leaveRoom:
            const arr = state.joinRoomList.filter((val) => {
                return val["roomId"] !== data;
            });
            return {
                ...state,
                joinRoomList: arr,
            };
        default:
            return state;
    }
};

export default reducer;
