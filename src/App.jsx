import { TextField, Typography, Button, List, ListItem } from "@mui/material"
import React, { useRef, useState } from "react"

const App = () => {
  const [tasks, setTasks] = useState(["Задача 1", "Задача 2", "Задача 3"])
  const [newTask, setNewTask] = useState("")
  const dragItem = useRef(null)
  const dragOverItem = useRef(null)

  const handleSort = () => {
    let updatedTasks = [...tasks]

    const draggedItemContent = updatedTasks.splice(dragItem.current, 1)[0]
    updatedTasks.splice(dragOverItem.current, 0, draggedItemContent)
    dragItem.current = null
    dragOverItem.current = null

    setTasks(updatedTasks)
  }

  const handleNameChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleAddItem = () => {
    const updatedTasks = [...tasks]
    updatedTasks.push(newTask)
    setTasks(updatedTasks)
    setNewTask("")
  }

  return (
    <main
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#EBF8FE",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          maxWidth: "1080px",
          margin: "100px auto",
        }}
      >
        <Typography variant="h3">Список Задач</Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            margin: "auto",
          }}
        >
          <TextField
            id="outlined-basic"
            sx={{ padding: "15px" }}
            name="taskName"
            placeholder="Задача:..."
            onChange={handleNameChange}
            style={{ marginBottom: "10px" }}
          />
          <Button
            variant="contained"
            onClick={handleAddItem}
            sx={{ marginBottom: "15px" }}
          >
            Добавить
          </Button>
        </div>

        {/* Список */}
        <List
          sx={{
            width: "100%",
            maxWidth: 720,
            margin: "0 auto",
            bgcolor: "background.paper",
          }}
        >
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              draggable
              sx={{ cursor: "move" }}
              onDragStart={(e) => (dragItem.current = index)}
              onDragEnter={(e) => (dragOverItem.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <Typography>{task}</Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </main>
  )
}

export default App
