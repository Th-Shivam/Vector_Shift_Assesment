# VectorShift Technical Assessment - Shivam Singh

## Overview
This project is a ReactFlow-based AI pipeline builder with dynamic node abstraction and backend DAG validation. It features a premium, futuristic dark glassmorphism UI designed for building complex AI workflows.

## Features
- **BaseNode Abstraction**: A highly scalable composition pattern for creating new node types effortlessly.
- **9 Scalable Node Types**: Input, Output, LLM, Text, Prompt Template, Parser, Condition, Memory, and Tool nodes.
- **Dynamic Handle Generation**: Automatically parses `{{variable}}` syntax in text fields to generate dynamic input handles.
- **Auto-resizing Text Node**: Text areas that automatically adjust their height based on content.
- **Premium Dark UI**: Features a floating macOS-style dock, smart empty states, animated radial glows, and custom ReactFlow handles.
- **Context Menu (Duplicate & Delete)**: Right-click any node to access a premium floating menu. You can duplicate nodes (with their data) or delete them (which automatically cleans up connected edges).
- **DAG Detection**: FastAPI backend validates if the constructed pipeline forms a Directed Acyclic Graph (DAG).
- **Pipeline Submission**: Calculates and displays the total number of nodes, edges, and the DAG status.

## How to Run

### Frontend
```bash
cd frontend  
npm install  
npm start  
```

### Backend
```bash
cd backend  
pip install fastapi uvicorn
uvicorn main:app --reload  
```

## Architecture Notes
- **Composition Pattern**: Used for node abstraction to keep the codebase DRY and maintainable.
- **Dynamic Handle Rendering**: Handles are rendered dynamically based on state and regex parsing.
- **DFS-based DAG Detection**: The backend uses Depth-First Search to detect cycles in the graph.
- **Zustand**: Used for lightweight, fast, and scalable global state management.
- **Tailwind CSS**: Used for rapid, utility-first styling and complex glassmorphism effects.
