FROM python:3.13-slim

# Imposta directory di lavoro
WORKDIR /app

# Installa uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv

# Copia file di dipendenze
COPY pyproject.toml uv.lock ./

# Installa dipendenze in prod aggiungere --no-dev
RUN uv sync --frozen --no-dev

# Copia codice sorgente
COPY ./src ./src 

# Esponi porta
EXPOSE 8000

# Avvia l'applicazione
CMD ["uv", "run", "uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]

