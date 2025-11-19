# Speechify
This is a solo project of mine, 
it is aimed to be a full-stack web application that analyzes short audio clips of human speech and predicts the speaker's emotion.

This project combines:
- **React frontend** (record or upload audio)
- **Express backend** (API, routing, file handling)
- **Python ML microservice** (FastAPI, PyTorch/ONNX – added later)
- **Custom machine-learning model** trained on public emotion datasets

---

## Project Structure
speechify/ </br>
│ </br>
├── frontend/ # React app</br>
├── backend-main/ # Express API (file uploads, routing)</br>
└── backend-ml/ # Python ML service (FastAPI, model inference)</br>

---

## Project Goals

### Phase 1 — Fullstack System (no ML yet)
- Build a working React UI:
  - record audio
  - upload audio
  - send to backend
  - display result
- Build an Express API:
  - handle audio uploads
  - return dummy predictions
  - (later) forward requests to ML service

### Phase 2 — Machine Learning Integration
- Create a Python ML microservice using FastAPI
- Train a speech emotion recognition model using public datasets
- Add preprocessing (mel-spectrograms, normalization)
- Run real inference and return emotion + confidence

---

## Technologies

### Frontend
- React (Vite or Next.js)
- Web Audio API (recording)
- Axios for API calls

### Backend-main (Node.js)
- Express
- Multer (file uploads)
- Axios (calls ML microservice)
- CORS, dotenv

### Backend-ML (Python)
- FastAPI
- PyTorch / ONNX Runtime
- Librosa (audio processing)
- Uvicorn

---

## API Overview
### TODO...
