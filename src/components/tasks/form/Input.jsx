export function Input(newTask, handleInputChange, addTask) {
    return (
        <div className='flex items-center gap-x-2 w-1/2'>
        <input
                className='border border-gray-400 p-2 w-full'
                type="text"
                value={newTask}
                onChange={handleInputChange}
              />
        <button onClick={addTask}>Ajouter</button>
      </div>
    )
}