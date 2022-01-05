import React from 'react'
import Login from "./login"
import Back from "./back"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login"/>} />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/back" element={<Back/>} />
            </Routes>
        </Router>
    )
}

export default App