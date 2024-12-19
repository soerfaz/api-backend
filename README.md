# Task Management API

## Deskripsi
Task Management API adalah aplikasi backend yang menyediakan layanan untuk mengelola tugas atau pekerjaan dalam bentuk **CRUD** (Create, Read, Update, Delete). API ini memiliki fitur tambahan seperti **pagination**, **sorting**, dan **filtering** untuk mempermudah pengelolaan dan pencarian data tugas.

API ini dibuat dengan menggunakan **Node.js** dan **Express**.

---

## Fitur
- **Create**: Menambahkan tugas baru.
- **Read**: Mengambil daftar tugas atau tugas berdasarkan ID.
- **Update**: Memperbarui tugas yang sudah ada.
- **Delete**: Menghapus tugas yang ada.
- **Pagination**: Menyediakan fitur pagination untuk daftar tugas.
- **Sorting**: Menyediakan fitur sorting berdasarkan kolom tertentu (misalnya ID atau status).
- **Filtering**: Menyaring daftar tugas berdasarkan title.

---

## Teknologi
- **Node.js**: JavaScript runtime untuk membangun aplikasi server-side.
- **Express**: Framework web minimalis untuk Node.js.
- **Body-parser**: Middleware untuk parsing request body dalam format JSON.
- **Nodemon** (development): Untuk otomatis restart server selama pengembangan.

---

## Instalasi

1. **Clone repositori**:
   ```bash
   git clone https://github.com/soerfaz/api-backend/
   cd api-backend
   ```

2. **Instal dependencies**:
   Pastikan Anda memiliki **Node.js** terinstal di sistem Anda. Kemudian jalankan:
   ```bash
   npm install
   ```

3. **Jalankan server**:
   Untuk menjalankan server dalam mode development dengan otomatis restart (menggunakan **nodemon**):
   ```bash
   npm run start-dev
   ```

   API akan berjalan pada **http://localhost:3000**.

---

## API Endpoints

### **1. GET `/api/tasks`**
- **Deskripsi**: Mendapatkan daftar tugas dengan pagination, filtering, dan sorting.
- **Query Parameters**:
  - `page` (default: 1): Halaman yang akan ditampilkan.
  - `limit` (default: 5): Jumlah tugas per halaman.
  - `sort` (default: id): Kolom untuk sorting (`id`, `title`, `completed`, dsb).
  - `order` (default: asc): Urutan sorting (`asc` atau `desc`).
  - `filter`: Filter tugas berdasarkan judul.
- **Contoh Request**:
  ```http
  GET http://localhost:3000/api/tasks?page=1&limit=2&filter=api&sort=id&order=asc
  ```
- **Contoh Response**:
  ```json
  {
    "total": 3,
    "page": 1,
    "limit": 2,
    "tasks": [
      {
        "id": 2,
        "title": "Build a RESTful API",
        "completed": false,
        "priority": "Medium"
      }
    ]
  }
  ```

### **2. POST `/api/tasks`**
- **Deskripsi**: Membuat tugas baru.
- **Body**: 
  - `title` (required): Judul tugas.
  - `completed` (optional): Status tugas (default: `false`).
  - `priority` (optional): Prioritas tugas (default: `Medium`).
- **Contoh Request**:
  ```http
  POST http://localhost:3000/api/tasks
  ```
  Body:
  ```json
  {
    "title": "Write Unit Tests",
    "completed": false,
    "priority": "High"
  }
  ```
- **Contoh Response**:
  ```json
  {
    "id": 4,
    "title": "Write Unit Tests",
    "completed": false,
    "priority": "High"
  }
  ```

### **3. GET `/api/tasks/:id`**
- **Deskripsi**: Mendapatkan tugas berdasarkan ID.
- **Contoh Request**:
  ```http
  GET http://localhost:3000/api/tasks/2
  ```
- **Contoh Response**:
  ```json
  {
    "id": 2,
    "title": "Build a RESTful API",
    "completed": false,
    "priority": "Medium"
  }
  ```

### **4. PUT `/api/tasks/:id`**
- **Deskripsi**: Memperbarui tugas berdasarkan ID.
- **Body**: 
  - `title` (optional): Judul tugas.
  - `completed` (optional): Status tugas.
  - `priority` (optional): Prioritas tugas.
- **Contoh Request**:
  ```http
  PUT http://localhost:3000/api/tasks/2
  ```
  Body:
  ```json
  {
    "title": "Build and Deploy API",
    "completed": true,
    "priority": "High"
  }
  ```
- **Contoh Response**:
  ```json
  {
    "id": 2,
    "title": "Build and Deploy API",
    "completed": true,
    "priority": "High"
  }
  ```

### **5. DELETE `/api/tasks/:id`**
- **Deskripsi**: Menghapus tugas berdasarkan ID.
- **Contoh Request**:
  ```http
  DELETE http://localhost:3000/api/tasks/2
  ```
- **Contoh Response**:
  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

---

