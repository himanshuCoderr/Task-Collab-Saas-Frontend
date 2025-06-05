import NavInside from "../components/NavInside.tsx"
import Inbox from "../components/Inbox.tsx"
import TaskFlowBoardNav from "../components/TaskFlowBoardNav.jsx"

const TaskFlowBoard = () => {
  return (
    <>
      <NavInside></NavInside>
      {/* <Inbox></Inbox> */}
      <TaskFlowBoardNav></TaskFlowBoardNav>
    </>
  )
}

export default TaskFlowBoard