# CollabyDraw

CollabyDraw is a real-time collaborative drawing application inspired by Excalidraw and a project built by Harkirat Singh Sir in his **Cohort 3**. While working on the project, I made some modifications and introduced features that make **CollabyDraw** slightly different from what project built during Cohort and possibly from other students' implementations.

## 🚀 Features

### 🎨 **Standalone Mode (No Authentication Required)**
- Users can start drawing **without signing up or logging in**.
- Offers the **same features** as collaboration mode, except live room functionality.
- Data is stored in **local storage**, ensuring **privacy** and **no dependency on a database**.

### 🎨 **Live Collaboration Mode**
- Users can **join rooms** and collaborate in real-time.
- Participants are **visibly displayed in an interactive UI**, similar to Excalidraw.
- Built-in **WebSocket-based syncing** for smooth collaboration.

### 🎨 **Next.js Server Actions (No Separate HTTP Services)**
- The cohort project used a separate HTTP service for:
  - Room creation & management
  - User authentication & management
- **CollabyDraw eliminates separate HTTP services** by using **Next.js server actions**, making the architecture cleaner and more efficient.

### 🎨 **Privacy-Focused Architecture**
- **Standalone mode does not require a database**; it relies on **local storage**.
- Planning to fully **eliminate database usage in the future**, similar to Excalidraw.

### 🎨 **Interactive and Responsive UI**
- Built with a focus on **high performance and smooth UX**.
- WebSocket connections are **hookified** for better state management.
- The UI is highly **interactive and visually appealing**, improving the user experience over the cohort project.

## 🛠️ Tech Stack

- **Frontend:** Next.js 15  
- **Real-time Sync:** WebSockets  
- **State Management:** React hooks  
- **Storage:** Local Storage (Standalone Mode), Database (for authentication in Collaboration Mode)  

## 🆚 Differences from Cohort Project

| Feature                   | Cohort Project by Harkirath | CollabyDraw |
|---------------------------|---------------------------|-------------|
| Authentication Required   | Yes                        | No (Standalone Mode) |
| Local Storage Support     | No                         | Yes |
| Database Dependency       | Yes                        | No (Standalone Mode) |
| Separate HTTP Services    | Yes                        | No (Uses Next.js Server Actions) |
| Live Collaboration UI     | Basic                      | Interactive UI with participant list |
| Performance Optimizations | Basic                      | Hookified WebSocket connection & responsive UI |

## 🎯 Future Plans
- **Fully eliminate database dependency** to enhance privacy.
- **Enhance UI further** with better collaboration tools.
- **Improve performance** with optimizations in WebSocket handling.

## 🌍 Open Source & Contributions  
I want **CollabyDraw** to be open source so that other students and developers can explore and learn from it.  
If you'd like to contribute—whether it's improving the UI, optimizing performance, or adding new features—feel free to open an issue or submit a pull request!  

## 📜 License
This project is open-source and available under the MIT License.

---