from fastapi import FastAPI
from source.routers import router as api_router

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI"}

app.include_router(api_router)