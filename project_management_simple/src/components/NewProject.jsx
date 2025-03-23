import React from 'react'
import { useRef } from 'react'
import Input from './Input'
import CancelButton from './CancelButton'
import Modal from './Modal'

export default function NewProject({ onCancel, handleCreateProject }) {
  const modalRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const dueDateRef = useRef()
  function handleSave() {
    const title = titleRef.current.value
    const description = descriptionRef.current.value
    const dueDate = dueDateRef.current.value

    // VALIDATION
    if (title.trim() === '' || description.trim() === '' || dueDate.trim() === '') {
      modalRef.current.open()
      return
    }
    const newProject = {}
    newProject.title = title
    newProject.description = description
    newProject.dueDate = dueDate
    handleCreateProject(newProject)
  }
  return (
    <>
      <Modal ref={modalRef} buttonCaption='Close'>
        <h2 className='text-xl font-bold text-stone-500 my-4'>All the fields are required</h2>
        <p className='text-stone-600 pb-4'>Make sure all fields are field appropriately.</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <CancelButton onClick={onCancel} className='text-stone-800 hover:text-stone-950'>
              Cancel
            </CancelButton>
          </li>
          <li>
            <button onClick={handleSave} className='bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md'>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type='text' ref={titleRef} label='Title' />
          <Input ref={descriptionRef} label='Description' textArea />
          <Input type='date' ref={dueDateRef} label='Due Date' />
        </div>
      </div>
    </>
  )
}
