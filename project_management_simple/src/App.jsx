import { useState } from 'react'
import NoProjectSelected from './components/NoProjectSelected'
import NewProject from './components/NewProject'
import ProjectsSidebar from './components/ProjectsSidebar'
import SelectedProject from './components/SelectedProject'

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  })

  function handleAddTask(text) {
    setProjectsState((prevProjectsState) => {
      const newTask = {
        text: text,
        projectId: prevProjectsState.selectedProjectId,
        id: Math.random(),
      }
      return {
        ...prevProjectsState,
        tasks: [...prevProjectsState.tasks, newTask],
      }
    })
  }
  function handleDeleteTask(taskId) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        tasks: prevProjectsState.tasks.filter((task) => task.id !== taskId),
      }
    })
  }
  function handleStartAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: null,
      }
    })
  }
  function handleCancelAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleCreateProject(createdProject) {
    const newProject = {
      ...createdProject,
      id: Math.random(),
    }
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
        projects: [...prevProjectsState.projects, newProject],
      }
    })
  }

  function handleSelectProject(projectId) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: projectId,
      }
    })
  }
  function handleDeleteProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
        projects: prevProjectsState.projects.filter((project) => project.id !== prevProjectsState.selectedProjectId),
      }
    })
  }
  const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId)
  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onDelete={handleDeleteProject}
      project={selectedProject}
      tasks={projectsState.tasks}
    />
  )
  if (projectsState.selectedProjectId === null) {
    content = <NewProject handleCreateProject={handleCreateProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  )
}

export default App
