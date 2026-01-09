from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

# Mount static files under /static only (do NOT mount at "/")
app.mount("/static", StaticFiles(directory="static"), name="static")

class Item(BaseModel):
    item_id: int
    q: Optional[str] = None

@app.get("/")
async def read_root():
    return {"message": "Hello World"}

@app.get("/items/{item_id}", response_model=Item)
async def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}