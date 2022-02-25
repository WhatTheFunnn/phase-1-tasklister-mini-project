document.addEventListener('DOMContentLoaded',  () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    list(e.target.new_task_description.value)
  })
})

function list(newTask){
    const p = document.createElement('p')
    const butt = document.createElement('button')
    p.textContent = `${newTask} `
    butt.textContent = 'x'
    butt.addEventListener('click', handleDelete)
    p.appendChild(butt)
    
    document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}

