from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


class Edge(BaseModel):
    source: str
    target: str


class PipelineRequest(BaseModel):
    nodes: List[dict]
    edges: List[Edge]


def is_dag(nodes, edges):
    graph = {node["id"]: [] for node in nodes}

    for edge in edges:
        graph[edge.source].append(edge.target)

    visited = set()
    recursion_stack = set()

    def dfs(node):
        if node in recursion_stack:
            return False

        if node in visited:
            return True

        visited.add(node)
        recursion_stack.add(node)

        for neighbor in graph[node]:
            if not dfs(neighbor):
                return False

        recursion_stack.remove(node)
        return True

    for node in graph:
        if node not in visited:
            if not dfs(node):
                return False

    return True


@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineRequest):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    dag_status = is_dag(pipeline.nodes, pipeline.edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": dag_status
    }
