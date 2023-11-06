export function DisplayTask({tasks, deleteTask}) {
    return (
        <>
        <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className='flex items-center space-x-4'>
              <p>{task}</p>
              <button onClick={() => deleteTask(index)}>Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
        </>
    )
}