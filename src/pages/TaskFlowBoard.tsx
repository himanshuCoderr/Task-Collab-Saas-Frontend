import NavInside from "../components/NavInside.tsx"
import Inbox from "../components/Inbox.tsx"
import TaskFlowBoardNav from "../components/TaskFlowBoardNav.jsx"
import TaskFlowBoardDisplay from "../components/TaskFlowBoardDisplay.tsx"

const TaskFlowBoard = () => {
  return (
    <>
      <NavInside></NavInside>
      {/* <Inbox></Inbox> */}
      <TaskFlowBoardNav></TaskFlowBoardNav>
      <TaskFlowBoardDisplay></TaskFlowBoardDisplay>
    </>
  )
}

export default TaskFlowBoard